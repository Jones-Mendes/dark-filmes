import CustonInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import Header from "@/components/Header";
import PageWrapper from "@/components/pageWrapper";

export default function Cadastrar(){
    return (
        <PageWrapper showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[30px] font-bold text-[#9a86f4]">Adicione um novo filme</h1>
                <p className="text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3a364c] flex flex-col p-6 gap-4">
                    <CustonInput 
                            label="Título"
                            placeholder="Digite o título do filme"
                            type="text"
                        />
                        <CustonInput 
                            label="Diretor"
                            placeholder="Digite o nome do diretor"
                            type="text"
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustonInput 
                                    label="Ano"
                                    placeholder="Digite o ano de lançamento"
                                    type="number"
                        />
                            </div>
                            <div className="w-[50%]">
                                <CustomSelect
                                label="Gênero"
                                options={[
                                    "Ação", 
                                    "Comédia", 
                                    "Drama", 
                                    "Terror", 
                                    "Ficção Cientifica",
                                    "Romance"]}
                                />
                            </div>
                        </div>
                        <div className="w-[30%] itenms-center flex gap-2">
                            <div className="w-[70%]">
                            <CustonInput
                                label="Nota"
                                placeholder="0"
                                type="number"


                            />
                            </div>
                            <p className="flex mt-8"> 10 / 10</p>
                        </div>
                        <div className="w-full h-[150px]flex flex-col gap-2">
                            <label htmlFor="text-[17px] font-bold">Sinopse</label>
                            <textarea className="w-full min-h-[150px] max-h-[150px] rounded-b-lg border border-[#ffffff1a] focus:border-purple-400 p-2 bg-[#141414] outline-none" ></textarea>
                        </div>
                        <CustonInput
                            label="Banner"
                            placeholder="Url da Imagem"
                            type="text"
                        />
                        <div className="w-full flex justify-end gap-4"><button type="reset" className="w-[100px] h-[50px] rounded-me bg-#141414] cursor-pointer hover:bg-white/10
                            border border-[#3a364c]">Cancelar</button></div>
                            
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}