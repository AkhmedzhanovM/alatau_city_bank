import { navbar } from "@/data/navbar";
import { SearchIcon } from "lucide-react";

export const Navbar = () => {
    return(
        <div className="text-white flex justify-between items-center pt-10 px-5">
            <div className="bg-neutral-800 w-fit px-80 py-2 rounded-2xl flex items-center pl-5 text-neutral-400 cursor-text"><SearchIcon className="text-neutral-600" />Search</div>

            <div className="flex space-x-5">
                {navbar.map((navbar, i) => (
                    <div className="bg-neutral-800 rounded-full w-fit p-2 cursor-pointer" key={i}><navbar.icon /></div>
                ))}
            </div>
        </div>
    )
}