import {db} from "../_utils/firebase.js";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems ( userId ) {
  const itemsDb = collection(db, 'users', userId, 'items');
  const items = [];

  try {
    const querySs = await getDocs(itemsDb);

    querySs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return items;
} catch (error) {
    console.error("Error with documents: ", error);
    return [];
  }
}

export async function addItem(userId, item) {
  const itemsDb = collection(db, "users", userId, "items");

  try {
    const docReference = await addDoc(itemsDb, item);
    return docReference.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
}
