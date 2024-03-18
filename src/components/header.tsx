import Logo from "../assets/images/logo.png"
import Image from "next/image";
import Button from "./buttons";

export default function Header() {
    
    return (
        <nav className="flex justify-around w-full font-semibold items-center"> 
        <Image className="w-24  h-28" src={Logo} alt="logo" />

        <div className="w-128 flex flex-row justify-around bg-botoes h-10 rounded-lg shadow-md shadow-shadow">
            <div className="flex p-4 w-24 items-center justify-center">Início</div>
            <div className="flex p-4 w-36 items-center justify-center">Sobre nós</div>
            <div className="flex p-4 w-24 items-center justify-center">Planos</div>
        </div>

        <Button title={"Minha conta"} />
    </nav>
)}