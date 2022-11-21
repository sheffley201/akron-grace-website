import NavBarLink from './../UI/NavBarLink';

const NavBar = () => {
    return (
        <nav className="bg-gray-100 p-2">
            <ul className="flex justify-center">
                <li>
                    <NavBarLink href="/">About Us</NavBarLink>
                </li>
                <li>
                    <NavBarLink href="/about">Sermons</NavBarLink>
                </li>
                <li>
                    <NavBarLink href="/events">Contact</NavBarLink>
                </li>
                <li>
                    <NavBarLink href="/sermons">Online Giving</NavBarLink>
                </li>
                <li>
                    <NavBarLink href="/contact">Helping Hands Daycare</NavBarLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
