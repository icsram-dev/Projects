import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-indigo-800 text-white h-14 flex items-center justify-between px-20">
            <div className="text-2xl font-solid mx-8">Hello Teacher!</div>
            <div>
                <Link
                    to="/"
                    className="px-4 py-1 mx-1 rounded-md hover:text-white text-gray-300"
                >
                    Home
                </Link>
                <Link
                    to="/marks"
                    className="px-4 py-1 mx-1 rounded-md text-gray-300  hover:text-white hover:bg-indigo-900"
                >
                    View Students
                </Link>
                <Link
                    to="/contact"
                    className="px-4 py-1 mx-1 rounded-md text-gray-300  hover:text-white hover:bg-indigo-900"
                >
                    Create Marks
                </Link>
            </div>
        </header>
    )
}
