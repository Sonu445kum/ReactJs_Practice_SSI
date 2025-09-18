import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen p-6 bg-slate-50">
            <header className="mb-6">
                <nav className="flex gap-4 items-center">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                        }
                    >
                        About
                    </NavLink>


                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                        }
                    >
                        Contact
                    </NavLink>
                </nav>
            </header>


            <main className="bg-white shadow rounded p-6">
                <Outlet /> {/* nested route content renders here */}
            </main>
        </div>
    );

}
