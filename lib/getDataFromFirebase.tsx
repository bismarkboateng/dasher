import { collection, query, getDoc, where, getDocs } from "firebase/firestore";
import { database } from "@/lib/firebase";

const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(database, collectionName));

  let data;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });

  return data;
};

export const getProducts = async () => {
  const data = await getData("products");
  return data;
};

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(database, "users"));
  const usersList: UserFromFirebase[] = [];

  querySnapshot.forEach((doc) => {
    usersList.push(doc.data() as UserFromFirebase);
  });

  return usersList;
};

export const getDataBasedOnTime = async (time: string) => {
  const usersRef = collection(database, "users");
  const usersList: UserFromFirebase[] = [];
  const q = query(usersRef, where("time", "==", time));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    usersList.push(doc.data() as UserFromFirebase);
  });

  return usersList;
};
