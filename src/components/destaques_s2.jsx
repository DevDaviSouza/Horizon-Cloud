import Image from "next/image";

export default function Destaques({image, title, text}) {
    return (
        <div className=" w-98 flex flex-col max-w-80 items-center justify-center text-center gap-9 py-12 rounded-lg rounded-br-large 
        bg-gradient-to-t from-footer2 to-footer1 shadow-inner shadow-shadow  lg:m-20">
            <Image className="" src={image} alt="" />
            
            <h3 className=" text-2xl font-bold">{title}</h3>
            <p className="font-light w-72">{text}</p>
        </div>
    )
}