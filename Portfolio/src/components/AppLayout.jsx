import "../styles/applayout.css"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"


export default function AppLayout() {
    return (
        <main className="layout">
            <Navbar />
            <Outlet />
        </main>
    )
}