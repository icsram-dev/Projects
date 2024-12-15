import React, { useState, useEffect } from 'react'
import { readSpectacle } from '../services/readSpectacle'
import deleteSpectacle from '../services/deleteSpectacle'
import updateSpectacle from '../services/updateSpectacle'

export default function Home() {
    const [contacts, setContacts] = useState([])

    const subjects = ['Math', 'Science', 'History', 'English', 'Geography']

    useEffect(() => {
        readSpectacle().then((data) => {
            console.log(data)
            setContacts(data)
        })
    }, [])

    const handleDeleteGrade = async (id, subject, grade) => {
        try {
            const student = contacts.find((c) => c.id === id)
            const updatedGrades = { ...student.grades }

            if (updatedGrades[subject]) {
                updatedGrades[subject] = updatedGrades[subject].filter(
                    (g) => g !== grade
                )

                if (updatedGrades[subject].length === 0) {
                    delete updatedGrades[subject]
                }

                const studentHasGrades = Object.keys(updatedGrades).length > 0
                if (!studentHasGrades) {
                    await deleteSpectacle(id)
                    setContacts((prev) => prev.filter((c) => c.id !== id))
                } else {
                    await updateSpectacle(id, { grades: updatedGrades })
                    setContacts((prev) =>
                        prev.map((c) =>
                            c.id === id ? { ...c, grades: updatedGrades } : c
                        )
                    )
                }
            } else {
                console.error(
                    `The subject ${subject} does not exist for student ${student.student}`
                )
            }
        } catch (err) {
            console.error('Error deleting grade', err)
            alert('Error deleting the grade.')
        }
    }

    const calculateAverage = (gradesArray) => {
        if (!gradesArray || gradesArray.length === 0) return '-'
        const sum = gradesArray.reduce((acc, grade) => acc + grade, 0)
        return (sum / gradesArray.length).toFixed(2)
    }

    const groupByStudent = () => {
        const grouped = {}

        contacts.forEach(({ id, student, grades }) => {
            if (!grouped[student]) {
                grouped[student] = { id, student, grades: {} }
            }

            subjects.forEach((subject) => {
                if (grades && grades[subject]) {
                    if (grouped[student].grades[subject]) {
                        grouped[student].grades[subject] = [
                            ...grouped[student].grades[subject],
                            ...grades[subject],
                        ]
                    } else {
                        grouped[student].grades[subject] = grades[subject]
                    }
                }
            })
        })

        return Object.values(grouped)
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center mb-6 text-indigo-800">
                GRADE BOOK
            </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Student</th>
                            {subjects.map((subject) => (
                                <th
                                    key={subject}
                                    className="px-6 py-3 text-center"
                                >
                                    {subject}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {groupByStudent().map(({ id, student, grades }) => (
                            <tr
                                key={id}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {student}
                                </th>
                                {subjects.map((subject) => (
                                    <td
                                        key={subject}
                                        className="px-6 py-4 text-center"
                                    >
                                        <div className="flex justify-center space-x-2">
                                            {grades?.[subject]?.map(
                                                (grade, index) => (
                                                    <span
                                                        key={index}
                                                        className="flex items-center border border-gray-400 rounded px-2 py-1 bg-gray-200"
                                                    >
                                                        <span className="mr-2 text-black font-semibold">
                                                            {grade}
                                                        </span>
                                                        <button
                                                            className="text-red-600"
                                                            onClick={() =>
                                                                handleDeleteGrade(
                                                                    id,
                                                                    subject,
                                                                    grade
                                                                )
                                                            }
                                                        >
                                                            x
                                                        </button>
                                                    </span>
                                                )
                                            ) || '-'}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className="text-xl font-semibold text-center mt-8 mb-4 text-indigo-700">
                AVERAGES
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {groupByStudent().map(({ id, student, grades }) => {
                    const subjectAverages = subjects
                        .map((subject) => {
                            const gradeArray = grades?.[subject] || []
                            return gradeArray.length > 0
                                ? {
                                      subject,
                                      average: calculateAverage(gradeArray),
                                  }
                                : null
                        })
                        .filter(Boolean)

                    return (
                        <div
                            key={id || `${student}-${Math.random()}`}
                            className="w-64 p-4 bg-white shadow-lg rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                        >
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {student}
                            </h3>
                            {subjectAverages.map(({ subject, average }) => (
                                <p
                                    key={subject}
                                    className="text-sm text-gray-600 dark:text-gray-400"
                                >
                                    <span className="font-medium">
                                        {subject}:{' '}
                                    </span>
                                    <span className="font-medium">
                                        {average}
                                    </span>
                                </p>
                            ))}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
