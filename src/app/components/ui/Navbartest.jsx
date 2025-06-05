// components/Navbar.jsx
export default function Navbar() {
    return (
        <nav className="fixed top-4 
        left-1/2 -translate-x-1/2 
        z-50 w-[90%] 
        rounded-[50px]
        backdrop-blur
  bg-white/20 
        shadow-md px-6 py-3 
        flex items-center 
        justify-between">
            <div className="text-lg font-bold">MyApp</div>
            <ul className="flex gap-6 text-sm font-medium">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    );
}
