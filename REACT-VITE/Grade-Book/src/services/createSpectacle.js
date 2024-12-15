import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function createSpectacle(spectacle) {
    if (spectacle.price) {
        spectacle.price = parseInt(spectacle.price)
    }
    const docRef = await addDoc(collection(db, 'spectacles'), spectacle)
    return docRef.id
}
