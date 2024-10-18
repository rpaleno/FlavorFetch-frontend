import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNavLogin from "./MainNav";

const Header = () => {
    return (
        <div className="px-4 py-6">
            <div className="mx-auto flex justify-between items-center px-4">
                <Link 
                    to="/"
                    className="text-3xl font-bold tracking-tight" style={{ color: 'var(--custom-color)'}}
                >
                    FlavorFetch
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
            
                <div className="hidden md:block px-4">
                    <MainNavLogin />
                </div>
            </div>
        </div>
    );
};

export default Header;