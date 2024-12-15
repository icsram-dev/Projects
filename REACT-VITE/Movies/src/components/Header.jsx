import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="h-16 bg-black flex items-center text-align:left pl-20 gap-10 text-white text-xl">
            <Link to="/" className="hover:underline">
                My TMDB App
            </Link>
            <Link to="/movies" className="hover:underline">
                Movies
            </Link>
            <Link to="/people" className="hover:underline">
                People
            </Link>
            <Link to="/tvshows" className="hover:underline">
                Tv Shows
            </Link>
        </header>
    )
}
