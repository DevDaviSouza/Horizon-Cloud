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
import Planos from "@/components/planos"
import Footer from '@/components/footer'


export default function Dashboard() {
  return (
    <div className="m-0 bg-fundo h-vh flex flex-col justify-center">
      <Header />

      <section className="flex flex-col lg:flex-col justify-center items-center mt-28">
        <div className="flex flex-col lg:items-center sm:mx-5 text-center justify-center items-center">
          <div className="font-extrabold text-5xl sm:text-2xl max-w-128 mb-10"> Trabalhe, jogue, renderize e muito mais através de um PC de ultima geração</div>
          <div className="flex flex-col  text-2xl sm:text-xl text-center items-center justify-center"> Execute seus jogos favoritos sem o incômodo de possuir qualquer hardware</div>

          <div className="mt-8 items-center justify-center">
            <Button title="Cadastrar-se" />
          </div>
        </div>
      </section>

      <section className="flex flex-row lg:flex-col justify-center items-center pt-32 md:pt-12  ">
        <div className="flex flex-row  justify-evenly w-154 max-w-256">
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
        </div>
      </section>

      <section className="flex flex-col items-center justify-center pb-20 mt-56 md:mt-32 mb-56">
        <h2 className=" text-4xl font-black mb-24">Nossos Parceiros</h2>
        <div className=" flex flex-row gap-16 md:gap-6">
          <Parceiros parceiro={nvidia} />


          <Parceiros parceiro={azure} />


          <Parceiros parceiro={aws} />


          <Parceiros parceiro={cloud} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
