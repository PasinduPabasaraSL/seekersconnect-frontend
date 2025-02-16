import MyButton from "../../common/components/MyButton/MyButton";

export default function NavBar() {
    return (
        <nav className="bg-primary fixed top-0 left-0 w-full z-10 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    Seekers<span className="text-accent">Connect</span>
                </div>
                <div className="flex space-x-8 text-white text-lg">
                    <a href="#" className="hover:text-accent transition">Home</a>
                    <a href="#" className="hover:text-accent transition">Jobs</a>
                    <a href="#" className="hover:text-accent transition">Companies</a>
                    <MyButton className="ml-4" name="Sign In" backgroundColor="#00cec9" txtColor="black" />
                </div>
            </div>
        </nav>
    );
}