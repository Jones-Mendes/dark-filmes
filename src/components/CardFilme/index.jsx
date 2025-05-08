export default function CardFilme(){
    return(
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
                <img className="w-full h-full rounded-t-lg object-cover" 
                src="https://www.acidadeon.com/tudoep/wp-content/uploads/sites/10/2025/01/nosferatu_2025-01-02_18-12-27_jpeg_2025-01-02_18-12-27.webp"
                alt="" />
            </div>
            <div className="w-full h-[30%] flex-col pt-0 px-4">
                <p className="text-[20px] font-bold">Nosferatu</p>
                <p className="text-[17px] text-[#8a898c]">JOnes</p>
                <div className="w-full flex justify-between">
                <p className="text-[17px] text-[#8a898c]">2024</p>
                <div className="px-2 py-0 bg-[#8f7bdb]/10 text-[#8f7bdb] rounded-lg">Terror</div>
                </div>
            </div>
    </div>
    )
}