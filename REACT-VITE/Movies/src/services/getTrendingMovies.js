export default async function getTmdb() {
    const response = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=f7b32a1fed7be62e13215af55e9ddbee&page=1'
    )
    const data = await response.json()
    return data.results.map((movie) => ({
        ...movie,
        posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }))
}
