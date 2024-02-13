import React from "react";

export default function Navbar() {
    return (
        <header className="bg-black text-white pb-4">
            <h1 className="text-2xl">Hardik Kotak</h1>
            <p>Software Developer</p>
            <nav>
                <ul className="flex justify-around pt-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
