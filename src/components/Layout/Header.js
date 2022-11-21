import logo from './../../assets/AGEC_logo.webp';

const Header = props => {
    return (
        <header className="bg-gray-100 p-5 flex flex-col justify-center items-center">
            <img src={logo} alt={"Church Logo"} className="w-36 mb-5" />
            <h1 className="text-3xl font-semibold">Akron Grace EC Church</h1>
        </header>
    );
}

export default Header;