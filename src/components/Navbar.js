import { GrUserAdmin, GrSearch } from 'react-icons/gr'
import CartWidget from "./CartWidget";
import CategoriesNavbar from "./CategoriesNavbar";

const Navbar = () => {
    return (
        <div className="h-16 w-full flex flex-row items-center place-content-between px-10 bg-white border-b border-gray-300">
            <div className="font-Jura uppercase text-2xl font-bold">
                Dogs & Cats
            </div>
            <div>
                <CategoriesNavbar />
            </div>
            <div className="flex flex-row items-center gap-x-10">
                <div className="flex flex-col items-center">
                    <div className="text-lg"><GrSearch/></div>
                    <div className="text-sm font-Jura uppercase">Search</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-lg"><GrUserAdmin/></div>
                    <div className="text-sm font-Jura uppercase">Account</div>
                </div>
                <CartWidget />
            </div>
        </div>

    )
}

export default Navbar