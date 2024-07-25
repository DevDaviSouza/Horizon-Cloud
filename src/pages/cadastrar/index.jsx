import Button from "@/components/buttons";
import Logo from "../../assets/images/logo.png"
import Image from "next/image";

export default function Cadastrar() {
    return(
        <div className="w-screen h-screen flex flex-row">
            <div className="bg-botoes h-screen w-1/2 items-center flex justify-center">
            <Image className="w-72" src={Logo} alt="logo" />
            </div>
            <div className="bg-fundo h-screen w-1/2 flex flex-col justify-center items-center">
                <h2 className="text-7xl mb-10">Criar conta</h2>

                <label className="text-2xl mb-2" htmlFor="">Login</label>
                <input className="mb-5 text-black border-none outline-none rounded-lg" type="text" />

                <label className="text-2xl mb-2" htmlFor="">senha</label>
                <input className="text-black mb-14 border-none outline-none rounded-lg" type="password" />
                  
                    <Button title="Confirmar" />
            </div>
        </div>
    )
}