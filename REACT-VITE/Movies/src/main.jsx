import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Movies from './routes/Movies'
import People from './routes/People'
import TvShows from './routes/TvShows'
import TmdbDashboard from './routes/TmdbDashboard'
import MainLayout from './layouts/MainLayout'
import MovieDetails from './routes/MovieDetails'
import PeopleDetails from './routes/PeopleDetails'
import TvShowDetails from './routes/TvShowDetails'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <TmdbDashboard/>,
            },
            {
                path: 'movies',
                element: <Movies />,
            },
            {
                path: '/movies/:movieId',
                element: <MovieDetails />,
            },

            {
                path: 'people',
                element: <People />,
            },
            {
                path: '/people/:personId',
                element: <PeopleDetails />,
            },
            {
                path: 'tvshows',
                element: <TvShows />,
            },
            {
                path: 'tvshows/:showId',
                element: <TvShowDetails />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
