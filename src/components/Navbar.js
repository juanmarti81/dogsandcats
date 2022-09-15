import {GrCart, GrUserAdmin, GrSearch} from 'react-icons/gr'

const Navbar = () => {
    return (
        <div className="h-16 w-full flex flex-row items-center place-content-between px-10 bg-amber-50">
            <div className="font-Jura uppercase text-2xl font-bold">
                Dogs & Cats
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
                <div className="flex flex-col items-center">
                    <div className="text-lg"><GrCart/></div>
                    <div className="text-sm font-Jura uppercase">Cart</div>
                </div>
            </div>
        </div>

    )
}

export default Navbar