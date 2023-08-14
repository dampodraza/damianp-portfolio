import {Link} from "react-router-dom";
import logo from '../assets/dp-low-resolution-logo-color-on-transparent-background.png'
import {useState} from "react";

const Navbar = () => {
    const [active, setActive] = useState('');

    return (
        <nav className="sm:px-16 px-6 w-full flex items-center fixed py-5 top-0 z-10 bg-black">
            <div className="w-full flex items-center justify-between max-w-7-xl mx-auto">
                <Link to='/' className='flex item-center gap-2' onClick={() => {
                    setActive('')
                    window.scroll(0, 0)
                }}>
                    <img src={logo} alt='logo' className='w-12 h-12 object-contain'/>
                    <p className='text-2xl font-bold text-white'>Damian <span>| Software Front-End</span></p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;