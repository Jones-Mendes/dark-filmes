import {LuFilm} from "react-icons/lu";

export default function Header({showButton = true}){
    return(
        <header className="w-full h-[50px] flex bg-[#0c0f15] justify-between items-center pr-2">
            <div
                onClick={() => window.location.href = "/"}
                 className="cursor-pointer flex h-full gap-2 items-center justify-center pl-2">
                <LuFilm color="#9b87f5" size={30}/>
                <h2 className="font-bold text-[18px] text-white">Dark films</h2>
            </div>
            {showButton && (
                <button 
                    onClick={() => window.location.href = "/cadastrar"}
                    className="w-[150px] h-[60%] rounded-md bg-[#9b87f5] text-white font-bold hover:bg-[#9b87f5]/70 cursor-pointer">Add film
                </button>
            )}
        </header>
    )
}