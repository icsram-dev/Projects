import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getPeopleTmdb from '../services/getpeople'

export default function People() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPeopleTmdb()
                setPeople(data)
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1 className="font-bold text-4xl mb-8 text-center">People</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {people.map(({ id, name, title, posterUrl }) => (
                    <Link
                        to={`/people/${id}`}
                        key={id}
                        className="block border border-gray-300 rounded-md overflow-hidden hover:border-indigo-500 hover:shadow-md"
                    >
                        <img
                            src={posterUrl}
                            alt={title}
                            className="object-cover w-70 h-70"
                        />
                        <div className="p-4">
                            <h1 className="text-lg">{name}</h1>
                            <h2 className="text-xl font-semibold">{title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
