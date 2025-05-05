import { LuFilm } from "react-icons/lu";

export default function Header({showButton = true }){
    return (
        <header className="w-full h-[50px] flex bg-[#0c0f15] justify-between items-center pr-2">
            <div className="flex h-full gap-2 items-center justify-center">
            <LuFilm color="#9b87f5" size={25}/>
            <h2 className="font-bold text-[18px] text-white">Dark Filmes</h2>
            </div>
            {showButton && (
                <button className="w-[150px] h-[60%] rounded-md
                bg-[#9b87f5] text-white font-bold hover:bg-[#9b87f5]/70 cursor-pointer">Adicionar Filmes

                </button>
            )}      
        </header>
    )
}