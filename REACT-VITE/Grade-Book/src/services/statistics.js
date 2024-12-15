import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function Statistics() {
    const querySnapshot = await getDocs(collection(db, 'spectacles'))

    const spectacles = []

    querySnapshot.forEach((doc) => {
        spectacles.push({ id: doc.id, ...doc.data() })
    })

    const marks = findMarks(spectacles)

    const statistics = []
    for (let mark of marks) {
        statistics.push(createStatisticsForMark(mark, spectacles))
    }

    return statistics
}
