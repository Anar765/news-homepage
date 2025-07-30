import { useState } from 'react';
import Menu from '../assets/images/icon-menu.svg';
import CloseMenu from '../assets/images/icon-menu-close.svg';


const NavBarMobile = () => {

    const [open, setOpen] = useState(false);

    return (
        <>

            <button type="button" onClick={() => setOpen(true)}>
                <img src={Menu} alt="Open Menu" />
            </button>

            {open &&

                <>

                    <nav className='fixed top-0 right-0 h-full w-60 z-20 bg-white flex flex-col py-6 px-4 space-y-18 animate-navbar'>
                        <button onClick={() => setOpen(false)} className='self-end'>
                            <img src={CloseMenu} alt="Close Menu" />
                        </button>

                        <div className='flex flex-col gap-4 items-start'>
                            <button>Home</button>
                            <button>New</button>
                            <button>Popular</button>
                            <button>Trending</button>
                            <button>Categories</button>
                        </div>
                    </nav>
                    <div className='fixed top-0 left-0 h-full w-full bg-Dark-Grayish-Blue opacity-50' onClick={() => setOpen(false)}></div>

                </>
            }
        </>
    )
}

export default NavBarMobile