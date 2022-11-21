const NavBarLink = props => {
    return (
        <li className="ml-10">
            <a href={props.href} className="text-black text-sm font-bold hover:text-gray-500"> {props.children} </a>
        </li>
    )
}

export default NavBarLink;