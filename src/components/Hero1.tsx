import { useNavigate } from 'react-router-dom';
import hero from "../assets/lp-5.jpeg"
import SearchBar, { SearchForm } from "@/components/SearchBar";

const Hero = () => {
    const navigate = useNavigate();
    
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`
        });
    };

    return (
        <div className="flex flex-col">
            <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">
                <img src={hero} className="w-full h-full object-cover absolute inset-0" alt="Hero" />
                <div className="relative z-10 text-black py-6 rounded-2xl shadow-md bg-white/60 px-6 mb-20">
                    <h1 className="text-6xl font-bold tracking-tight p-4">
                        Find Restaurants Near You
                    </h1>
                    <SearchBar 
                        placeHolder="Search by City or Town" 
                        onSubmit={handleSearchSubmit} 
                    />
                </div>
            </div>  
        </div>
    );
};

export default Hero;