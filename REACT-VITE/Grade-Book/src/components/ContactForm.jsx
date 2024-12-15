import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import createSpectacle from '../services/createSpectacle'
import updateSpectacle from '../services/updateSpectacle'

const initialValues = {
    student: '',
    subject: '',
    mark: '',
}

export default function ContactForm({ contactData = null, contacts = [] }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState(contactData || initialValues)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { student, subject, mark } = formData

        if (!student || !subject || !mark) {
            alert('Töltsd ki az összes mezőt!')
            return
        }

        setIsLoading(true)
        try {
            const existingEntry = contacts.some((c) => c.student === student)

            let updatedGrades = {}

            if (existingEntry) {
                const entry = contacts.find((c) => c.student === student)
                updatedGrades = { ...entry.grades }

                if (updatedGrades[subject]) {
                    updatedGrades[subject] = [...updatedGrades[subject], mark]
                } else {
                    updatedGrades[subject] = [mark]
                }

                await updateSpectacle(entry.id, {
                    ...entry,
                    grades: updatedGrades,
                })
            } else {
                updatedGrades[subject] = [mark]

                await createSpectacle({
                    student,
                    grades: updatedGrades,
                })
            }

            navigate('/marks')
        } catch (err) {
            console.error('Hiba történt a mentés során:', err)
            alert('Hiba történt a mentés során!')
        }
        setIsLoading(false)
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="student"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Student
                </label>
                <select
                    id="student"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                    onChange={(e) =>
                        setFormData({ ...formData, student: e.target.value })
                    }
                    value={formData.student}
                >
                    <option value="">Select a student</option>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                    <option value="Cecile">Cecile</option>
                    <option value="David">David</option>
                    <option value="John">John</option>
                </select>
            </div>
            <div className="mb-6">
                <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Subject
                </label>
                <select
                    id="subject"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                    onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                    }
                    value={formData.subject}
                >
                    <option value="">Select a subject</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="English">English</option>
                    <option value="Geography">Geography</option>
                </select>
            </div>
            <div className="mb-6">
                <label
                    htmlFor="mark"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Mark
                </label>
                <input
                    type="number"
                    id="mark"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                    min="1"
                    max="5"
                    onChange={(e) =>
                        setFormData({ ...formData, mark: e.target.value })
                    }
                    value={formData.mark}
                />
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
                disabled={isLoading}
            >
                {isLoading ? 'Saving...' : 'Save'}
            </button>
        </form>
    )
}
