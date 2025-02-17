import { useState } from "react";
import MyButton from "../../common/components/MyButton/MyButton";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-primary fixed top-0 left-0 w-full z-10 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    Seekers<span className="text-accent">Connect</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-white text-lg">
                    <a href="#" className="hover:text-accent transition">Home</a>
                    <a href="#" className="hover:text-accent transition">Jobs</a>
                    <a href="#" className="hover:text-accent transition">Learning Paths</a>
                    <a href="#" className="hover:text-accent transition">Companies</a>
                    <MyButton name="Sign In" backgroundColor="#00cec9" txtColor="black" />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-100 absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-2 text-black text-lg">
                    <a href="#">Home</a>
                    <a href="#">Jobs</a>
                    <a href="#">Learning Paths</a>
                    <a href="#">Companies</a>
                    <a href="#">Sign In / Register</a>
                </div>
            )}
        </nav>
    );
}