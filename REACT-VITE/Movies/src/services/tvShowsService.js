export default async function getTvShowsTmdb() {
    const response = await fetch(
        'https://api.themoviedb.org/3/trending/tv/day?api_key=f7b32a1fed7be62e13215af55e9ddbee&page=1'
    )
    const data = await response.json()
    return data.results.map((tv) => ({
        ...tv,
        posterUrl: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
    }))
}
