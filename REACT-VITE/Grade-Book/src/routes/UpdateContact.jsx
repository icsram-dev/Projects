import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function updateSpectacle(id, updatedData) {
    const docRef = doc(db, 'spectacles', id)
    await updateDoc(docRef, updatedData)
}
