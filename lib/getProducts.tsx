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


export const getJeans = async () => {
  const data = await getData("Jeans")
  return data
}

export const getShoes = async () => {
  const data = await getData("shoes")
  return data
}

export const getBlogs = async () => {
  const data = await getData("blogs")
  return data
}