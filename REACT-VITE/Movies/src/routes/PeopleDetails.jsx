import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPeopleDetailsFromTmdb } from '../services/peopleService'

export default function PeopleDetails() {
    const { personId } = useParams()
    const [peopleDetails, setPeopleDetails] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        getPeopleDetailsFromTmdb(personId).then((response) => {
            if (response.length === 0) {
                setError(`Cannot find data with id of "${personId}"`)
            } else {
                setPeopleDetails(response)
            }
        })
    }, [])

    return (
        <>
            <h1 className="font-bold text-4xl mb-8 text-center">People</h1>
            {error && (
                <h1 className="font-bold text-4xl mb-8 text-center text-red-600">
                    {error}
                </h1>
            )}
            {peopleDetails && (
                <div className="flex justify-center">
                    <div className="max-w-2xl w-full">
                        <img
                            src={peopleDetails.posterUrl}
                            alt={peopleDetails.name}
                            className="mx-auto"
                        />
                        <h2 className="text-2xl font-bold my-4">
                            {peopleDetails.name}
                        </h2>
                        <h2 className="text-2xl font-bold my-4">
                            {peopleDetails.title}
                        </h2>
                        <p className="text-lg">{peopleDetails.birthday}</p>
                        <p className="text-lg">{peopleDetails.biography}</p>
                    </div>
                </div>
            )}
        </>
    )
}
