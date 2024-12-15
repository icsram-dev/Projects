export async function getTvShowsDetailsFromTmdb(showId) {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${showId}?api_key=f7b32a1fed7be62e13215af55e9ddbee`
    )
    const data = await response.json()
    if (response.ok) {
        return {
            name: data.name,
            overview: data.overview,
            posterUrl: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }
    }
}

export async function getTrendingTvShowsFromTmdb() {
    const response = await fetch(
        'https://api.themoviedb.org/3/trending/tv/day?api_key=f7b32a1fed7be62e13215af55e9ddbee&page=1'
    )
    const data = await response.json()
    return data.results.map((show) => ({
        ...show,
        posterUrl: `https://image.tmdb.org/t/p/w500${show.profile_path}`,
    }))
}
