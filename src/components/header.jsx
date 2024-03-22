import Logo from "../assets/images/logo.png"
import Image from "next/image";
import Button from "./buttons";
import { useState } from "react";



export default function Header() {

    const [menu, setMenu] = useState(false)
    let menuAberto = menu

    function fecharMenu() {
        return setMenu(false)
    }

    function abrirMenu() {
        setMenu(true)
        return setMenu
    }

    return (
        <div className="flex flex-col justify-end">
            <nav className="flex justify-around w-full font-semibold items-center lg:justify-between lg:px-10 md:px-10 sm:px-5 lg:bg-botoes  lg:top-0 "> 
            <Image className="w-24 sm:w-20 sm:h-24 h-28" src={Logo} alt="logo" />

            <div className="w-128 flex flex-row justify-around bg-botoes h-10 rounded-lg shadow-md shadow-shadow lg:hidden">
                <div className="flex p-4 w-24 items-center justify-center"><a href="/">Início</a></div>
                <div className="flex p-4 w-36 items-center justify-center"><a href="sobre-nos">Sobre nós</a></div>
                <div className="flex p-4 w-24 items-center justify-center"><a href="planos">Planos</a></div>
            </div>
                
            <div id="menuButton" className="flex flex-col mlg:hidden lg:visible gap-1 opacity-100" onClick={() =>{ menuAberto === true ? fecharMenu() : abrirMenu()}}>
                    <a className="border w-5 h-1 bg-white" href="#"></a>
                    <a className="border w-5 h-1 bg-white" href="#"></a>
                    <a className="border w-5 h-1 bg-white" href="#"></a>
            </div>

            <div className="lg:hidden"><Button title={"Minha conta"} /></div>
            </nav>
            
            <div id="menu" className={menu === true ? "visible right-0 top-24 opacity-100 bg-opacity-100 absolute rounded-b-lg w-40 flex flex-col bg-botoes items-center justify-center" : "hidden"}>
            <div className="flex p-4 items-center justify-center bg-minhaConta w-full"><a href="planos">Minha conta</a></div>
                <div className="flex p-4 w-full items-center justify-center"><a href="/">Início</a></div>
                <div className="flex p-4 w-full items-center justify-center"><a href="sobre-nos">Sobre nós</a></div>
                <div className="flex p-4 w-full items-center justify-center"><a href="planos">Planos</a></div>
                
                
            </div>
        </div>
)}