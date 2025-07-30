import { useWindowWidth } from "@react-hook/window-size";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import Logo from '../assets/images/logo.svg';

const Header = () => {

    const width = useWindowWidth();

    return (
        <header className="flex justify-between items-center">
            <img src={Logo} alt="W." />

            {width > 768 ? <NavBarDesktop /> : <NavBarMobile />}
        </header>
    )
}

export default Header