import Footer from "@/components/Footer"
import {Navbar  } from "@/components/Navbar"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default MainLayout