import instance from "@/api/instance";
import PageWrapper from "@/components/pageWrapper"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { LuArrowLeft } from "react-icons/lu"
import { PiNotePencilFill } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";


export default function Filme(){
    const router = useRouter()
    const {id} = router.query
    const [filme, setFilme] = useState({})
   useEffect(()=> {
    async function getFilmeById() {
        const response = await instance.get(`/api/movies/${id}`);
        setFilme(response.data);
    }
   if(id){
    getFilmeById()
   }
    
}, [])

    return (
        <PageWrapper
        showHeader={false}
        >  
           <div className="w-full h-full min-h-full flex flex-col px-[350px] pt-12 items-start">
                <button 
                    onClick={() => router.back()}
                    className="px-5 py-2 text-[#8a898c] gap-2 flex items-center 
                    justify-center rounded-lg hover:bg-[#27282b] hover:text-[#8f7bd8] ">
                    <LuArrowLeft />
                    <p>Voltar para a lista de filmes</p>
                </button>
                <div className="w-full min-h-[90vh] flex">
                    <div className="w-[40%] h-full flex flex-col">
                        <div className="w-full h-[90%]">
                            <img 
                            className="w-full h-full rounded-lg object-cover"
                            src="https://assets.multiplan.com.br/Multiplan/filer_public/9f/04/9f04da99-b481-4f90-8171-4d4939aab5fc/o-contador-2-posterportrait.webp?ims=500x "                            
                            alt=""
                            />
                        </div>
                        <div className="w-full flex h-[10%] pt-4 justify-between">
                            <button className="w-[46%] h-full border border-[#9b87f533] 
                            rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 flex items-center 
                            justify-center gap-2 py-1"><PiNotePencilFill />
                                Editar Filme</button>
                            <button className="w-[46%] h-full border border-[#ef444433] 
                            rounded-md text-[#ef4444] hover:bg-[#ef4444]/20 flex items-center 
                            justify-center gap-2 py-1"><RiDeleteBin6Fill />
                                Excluir Filme</button>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col pl-4">
                        <div className="w-full flex gap-2 items-baseline">
                            <h1 className="text-[35px] text-[#9b87f5] font-bold">Contador 2</h1>
                            <p className="text-[#8a898c] font-semibold text-[17px]">2025</p>
                        </div>
                        <div className="w-full gap-4 flex">
                            <div className="py-2 px-4 rounded-xl bg-[#4ade80]/20 text-[#4ade80]">
                                    <p className="text-[17px]">10/10</p>
                            </div>
                            <div className="w-full gap-4 flex">
                                <div className="py-2 px-4 rounded-xl bg-[#9b87f5]/20 text-[#9b87f5]">
                                    <p className="text-[17px]">Ação</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                                <h4 className="font-bold text-[20px]">Diretor</h4>
                                <p className="text-[#8a898c]">Gavin O'Connor</p>
                         </div>
                    </div>
                </div>
           </div>
        </PageWrapper>
    )
}
 