export default async function getpeopleTmdb() {
    const response = await fetch(
        ' https://api.themoviedb.org/3/person/popular?api_key=f7b32a1fed7be62e13215af55e9ddbee&page=1'
    )
    const data = await response.json()
    return data.results.map((popular) => ({
        ...popular,
        posterUrl: `https://image.tmdb.org/t/p/w500${popular.profile_path}`,
    }))
}
