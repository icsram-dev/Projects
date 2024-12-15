import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function deleteSpectacle(id) {
    const docRef = doc(db, 'spectacles', id)
    await deleteDoc(docRef)
}
