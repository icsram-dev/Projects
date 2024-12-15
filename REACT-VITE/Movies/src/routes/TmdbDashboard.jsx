import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function TmdbDashboard() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
            }}
        >
            <div className="card text-center" style={{ width: '25rem' }}>
                <img
                    src="https://image.tmdb.org/t/p/w500/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg"
                    className="card-img-top"
                    alt="Movie Poster"
                />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">Movies</h5>
                    <p className="card-text">Explorer trending movies.</p>
                    <Link to="/movies" className="btn btn-primary mt-auto">
                        Go to Movies
                    </Link>
                </div>
            </div>

            <div className="card text-center" style={{ width: '25rem' }}>
                <img
                    src="https://image.tmdb.org/t/p/w500/9KnIzPCv9XpWA0MqmwiKBZvV1Sj.jpg"
                    className="card-img-top"
                    alt="People Poster"
                />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">People</h5>
                    <p className="card-text"></p>
                    <Link to="/people" className="btn btn-primary mt-auto">
                        Go to People
                    </Link>
                </div>
            </div>

            <div className="card text-center" style={{ width: '25rem' }}>
                <img
                    src="https://image.tmdb.org/t/p/w500/5zmiBoMzeeVdQ62no55JOJMY498.jpg"
                    className="card-img-top"
                    alt="Tv-show Poster"
                />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">Tv-shows</h5>
                    <p className="card-text"></p>
                    <Link to="/tvshows" className="btn btn-primary mt-auto">
                        Go to Tv Show
                    </Link>
                </div>
            </div>
        </div>
    )
}
