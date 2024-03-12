import { collection, getDocs } from "firebase/firestore"
import { database } from "@/lib/firebase"

const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(database, collectionName))

  let data
  querySnapshot.forEach((doc) => {
    data = doc.data()
  })

  return data
}


export const getProducts = async () => {
  const data  = await getData("products")
  return data
}

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(database, "users"))
  const usersList: UserFromFirebase[] = []

  querySnapshot.forEach((doc) => {
    const data: UserFromFirebase = doc.data()
    usersList.push(data)
  })

  return usersList

}