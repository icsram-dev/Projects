import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/init'

export async function readSpectacle() {
    const querySnapshot = await getDocs(collection(db, 'spectacles'))
    return querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        }
    })
}
