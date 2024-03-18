import Header from "@/components/header"
import atirador from "../assets/images/atirador.png" 
import destaque1 from "../assets/images/destaque1.png"
import destaque2 from "../assets/images/destaque2.png"
import destaque3 from "../assets/images/destaque3.png"
import Button from "@/components/buttons"
import Image from "next/image"
import Destaques from "@/components/destaques_s2"
import Parceiros from "@/components/parceiros"
import nvidia from "@/assets/images/nvidia.png"
import azure from "@/assets/images/azure.png"
import aws from "@/assets/images/aws.png"
import cloud from "@/assets/images/cloud.png"

export default function Dashboard() {
  return (
    <div className="m-0 bg-fundo h-vh">
        <Header />

      <section className="flex flex-row justify-evenly items-center my-28">
            <div className="">
              <div className="  font-extrabold text-3xl max-w-128 mb-7"> Trabalhe, jogue, renderize e muito mais através de um PC de ultima geração</div>
              <div className=" max-w-124 text-2xl"> Execute seus jogos favoritos sem o incômodo de possuir qualquer hardware</div>

              <div className="flex gap-12 mt-8">
                <Button title="Nossos Planos" />
                <Button title="Cadastrar-se" />
              </div>
            </div>

            <div className= "flex flex-col   ">
              <div className= "w-80 h-80 bg-gradient-to-b from-cor1 to-cor2 rounded-full items-center justify-center ">
                <Image className=" ml-2 h-80 sticky left-130" src={atirador} alt="atirador" />
              </div>
            </div>
      </section>
      
      <section className="flex flex-row justify-evenly pt-24">
        <Destaques
          image={destaque1}
          title="Baixa Latencia"
          text="Alto desempenho, taxas de quadro ilimitadas e baixa latência para oferecer a melhor experiência."
        />

        <Destaques
          image={destaque2}
          title="Sincronize"
          text="Aproveite a experiência de um PC nativo com Windows 10 com o clique de um botão."
        />

        <Destaques
          image={destaque3}
          title="Suporte em ate 4K"
          text="O streaming de alta definição com resolução 4k oferece uma experiência de jogo envolvente."
        />
      </section>
      
      <section className="flex flex-col items-center justify-center">
        <h2 className=" text-4xl font-black mt-56 mb-24">Nossos Parceiros</h2>
        <div className=" flex flex-row gap-16">
          <Parceiros parceiro={nvidia} />
        
      
          <Parceiros parceiro={azure} />
        
      
          <Parceiros parceiro={aws} />
        
      
          <Parceiros parceiro={cloud} />
        </div>
      </section>
      
      <section>
        
      </section>
      
      <section>
        
      </section>

      <footer>
        
      </footer>
    </div>
  );
}
