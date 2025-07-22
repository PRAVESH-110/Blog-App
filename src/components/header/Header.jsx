import React from "react";
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ];

    return (
        <header className="w-full header-navbar">
            <Container>
                <nav className="flex items-center py-1">
                    <div className="mr-6 flex items-center">
                        <Link to="/">
                            <Logo width="48px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto gap-2">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="px-4 py-1 rounded-full font-medium bg-transparent hover:bg-[#1a237e] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-200 header-navbar-btn"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;