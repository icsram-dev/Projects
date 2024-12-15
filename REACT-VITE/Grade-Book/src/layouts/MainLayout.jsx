import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="mx-40 my-10">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
