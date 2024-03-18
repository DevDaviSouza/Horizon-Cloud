import Image from "next/image";

export default function Destaques({image, title, text}) {
    return (
        <div className=" w-98  flex-col max-w-80 items-center justify-center gap-9 py-3 rounded-lg rounded-br-large 
        bg-gradient-to-b from-cor2 from-10% to-cor1 shadow-inner shadow-shadow">
            <div className="mx-4">
                <Image src={image} alt="" className='w-8 flex mb-2 mx-1'/>
            
                <h3 className=" text-2xl font-bold mb-3">{title}</h3>
                <p className="font-light w-72">{text}</p>
            </div>
        </div>
    )
}