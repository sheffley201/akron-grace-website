import NavBarLink from './../UI/NavBarLink';

const NavBar = () => {
    return (
        <nav className="bg-gray-100 p-2">
            <ul className="flex justify-center">
                <NavBarLink href="/">About Us</NavBarLink>  
                <NavBarLink href="/about">Sermons</NavBarLink>   
                <NavBarLink href="/about">Connect</NavBarLink>
                <NavBarLink href="/events">Contact</NavBarLink> 
                <NavBarLink href="/sermons">Online Giving</NavBarLink>       
                <NavBarLink href="/contact">Helping Hands Daycare</NavBarLink>            
            </ul>
        </nav>
    )
}

export default NavBar;
