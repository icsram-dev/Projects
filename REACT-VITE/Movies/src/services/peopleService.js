export async function getPeopleDetailsFromTmdb(personId) {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${personId}?api_key=f7b32a1fed7be62e13215af55e9ddbee`
    )
    const data = await response.json()

    if (response.ok) {
        return {
            name: data.name,
            biography: data.biography,
            birthday: data.birthday,
            title: data.title,
            placeOfBirth: data.place_of_birth,
            posterUrl: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
        }
    }
}

export async function getTrendingPeopleFromTmdb() {
    const response = await fetch(
        'https://api.themoviedb.org/3/person/popular/day?api_key=f7b32a1fed7be62e13215af55e9ddbee&page=1'
    )
    const data = await response.json()
    return data.results.map((person) => ({
        ...person,
        posterUrl: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
    }))
}
