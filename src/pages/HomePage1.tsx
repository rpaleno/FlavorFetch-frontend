import { useNavigate } from 'react-router-dom';
import landingImage from "../assets/lp3.jpeg"
import appDownloadImage from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12 py-20">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into a takeaway today
                </h1>
                <span className="text-xl">Food is just a click away!</span>
            </div>
        </div>
    );
};

export default HomePage;
