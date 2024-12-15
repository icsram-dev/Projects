import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetailsFromTmdb } from '../services/movieService'

export default function MovieDetails() {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getMovieDetailsFromTmdb(movieId).then((response) => {
            if (response.length === 0) {
                setError(`Cannot find data with id of "${movieId}"`)
            } else {
                setMovieDetails(response)
            }
        })
    }, [])

    return (
        <>
            <h1 className="font-bold text-4xl mb-8 text-center">
                Trending Movies
            </h1>
            {error && (
                <h1 className="font-bold text-4xl mb-8 text-center text-red-600">
                    {error}
                </h1>
            )}
            {movieDetails && (
                <div className="flex justify-center">
                    <div className="max-w-2xl w-full">
                        <img
                            src={movieDetails.posterUrl}
                            alt={movieDetails.title}
                            className="mx-auto"
                        />
                        <h2 className="text-2xl font-bold my-4">
                            {movieDetails.title}
                        </h2>
                        <p className="text-lg">{movieDetails.overview}</p>
                    </div>
                </div>
            )}
        </>
    )
}
