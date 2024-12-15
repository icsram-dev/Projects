import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getTmdb from '../services/getTrendingMovies'

export default function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getTmdb()
                setMovies(data)
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1 className="font-bold text-4xl mb-8 text-center">Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map(({ id, title, posterUrl }) => (
                    <Link
                        to={`/movies/${id}`}
                        key={id}
                        className="block border border-gray-300 rounded-md overflow-hidden hover:border-indigo-500 hover:shadow-md"
                    >
                        <img
                            src={posterUrl}
                            alt={title}
                            className="object-cover w-70 h-70"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
