import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTvShowsDetailsFromTmdb } from '../services/getTvShowsDetails'

export default function TvShowDetails() {
    const { showId } = useParams()
    const [tvShowDetails, setTvShowDetails] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        getTvShowsDetailsFromTmdb(showId).then((response) => {
            if (!response) {
                setError(`Cannot find data with id of "${showId}"`)
            } else {
                setTvShowDetails(response)
            }
        })
    }, [showId])

    return (
        <>
            <h1 className="font-bold text-4xl mb-8 text-center">
                TV Show Details
            </h1>
            {error && (
                <h1 className="font-bold text-4xl mb-8 text-center text-red-600">
                    {error}
                </h1>
            )}
            {tvShowDetails.name && (
                <div className="flex justify-center">
                    <div className="max-w-2xl w-full">
                        <img
                            src={tvShowDetails.posterUrl}
                            alt={tvShowDetails.name}
                            className="mx-auto"
                        />
                        <h2 className="text-2xl font-bold my-4">
                            {tvShowDetails.name}
                        </h2>
                        <p className="text-lg">{tvShowDetails.overview}</p>
                    </div>
                </div>
            )}
        </>
    )
}
