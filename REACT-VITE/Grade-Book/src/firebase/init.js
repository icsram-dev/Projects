import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import firebaseConfig from './config'

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const addMark = async (mark, student, subject) => {
    const validMarks = [1, 2, 3, 4, 5]
    const validStudents = ['Alice', 'Bob', 'Cecile', 'David', 'John']
    const validSubjects = ['Math', 'Science', 'History', 'English', 'Geography']

    if (!validMarks.includes(mark)) {
        console.error('Invalid mark value')
        return
    }

    if (!validStudents.includes(student)) {
        console.error('Invalid student name')
        return
    }

    if (!validSubjects.includes(subject)) {
        console.error('Invalid subject name')
        return
    }

    try {
        const docRef = await addDoc(collection(db, 'marks'), {
            mark,
            student,
            subject,
        })
        console.log('Document written with ID: ', docRef.id)
        return docRef.id
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}

export const fetchMarks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'marks'))
        const marksData = []

        querySnapshot.forEach((doc) => {
            marksData.push({ id: doc.id, ...doc.data() })
        })

        console.log('Fetched marks:', marksData)
        return marksData
    } catch (error) {
        console.error('Error fetching documents: ', error)
    }
}
