const NavBarLink = props => {
    return (
        <a href={props.href} className="ml-10 text-black text-sm font-bold hover:text-gray-500"> {props.children} </a>
    )
}

export default NavBarLink;