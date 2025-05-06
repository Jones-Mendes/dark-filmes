export default function CustomSelect({label, options}){
    return (
        <div className="wfull flex flex-col gap-2">
            <label htmlFor="text[17px] font-bold">{label}</label>
            <select className="w-full h-[45px] bg-[#141414] rounded-lg pl-2 border border-[#ffffff1a] outline-none focus:border-purple-400">
                <option value="">Selecione...</option>
                {options.map((opcao)=>{
                    return (    
                        <option className=""
                        key={opcao} 
                        value={opcao}
                        >{opcao}
                        </option>
                    )
                })}
            </select>
        </div>
        );
}