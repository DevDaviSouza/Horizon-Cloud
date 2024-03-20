import Header from "@/components/header"
import atirador from "../../assets/images/atirador.png" 
import destaque1 from "../../assets/images/destaque1.png"
import destaque2 from "../../assets/images/destaque2.png"
import destaque3 from "../../assets/images/destaque3.png"
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
import { useRouter } from "next/router"

export default function Dashboard() {
  return (
    <div className="m-0 bg-fundo h-vh">
        <Header />

      <section className="flex flex-row lg:flex-col justify-evenly items-center my-28 lg:justify-center lg:text-center">
            <div className="flex flex-col lg:items-center sm:mx-5">
              <div className="font-extrabold text-5xl max-w-128 mb-7 sm:text-3xl"> Desfrute do nosso Serviço</div>
              <div className="max-w-124 text-2xl sm:text-xl"> Descubra ainda hoje o poder das nossas Maquinas Virtuais e adquire agora mesmo uma.</div>

              <div className="flex gap-12 mt-8 lg:mb-20">
                <Button title="Nossos Planos"/>
                <Button title="Cadastrar-se" />
              </div>
            </div>

            <div className= "flex flex-col">
              <div className= "w-80 h-80 bg-gradient-to-b from-circulo1 to-circulo2 rounded-full items-center justify-center ">
                <Image className=" ml-2 h-80 left-130" src={atirador} alt="atirador" />
              </div>
            </div>
      </section>
      
      <section className=" flex flex-col items-center gap-12 mt-56 lg:mt-32 mb-32 lg:justify-center">
        <h1 className=" text-4xl font-extrabold">Nossos Planos</h1>
        <h2 className=" text-4xl font-bold text-azure">Azure</h2>

        <div className="gap-44 flex flex-wrap justify-center">
          <Planos
            title={"Azure Basic"}
            value={"R$45.00/ 7 dias"}
            cpu={"4 Núcleos"}
            gpu={"GPU Nvidia Tesla T4"}
            ram={" 28GB Memória RAM"}
            server={"Servidor Brasileiro"}
            save={"Salva os arquivos"}
            spot={"Contém Spot"}
          />
          <Planos
            title={"Azure Standard"}
            value={"R$65.00/ 15 dias"}
            cpu={"4 Núcleos"}
            gpu={"GPU Nvidia Tesla T4"}
            ram={" 28GB Memória RAM"}
            server={"Servidor Brasileiro"}
            save={"Salva os arquivos"}
            spot={"Contém Spot"}
          />
          <Planos
            title={"Azure Elite"}
            value={"R$85.00/ 30 dias"}
            cpu={"4 Núcleos"}
            gpu={"GPU Nvidia Tesla T4"}
            ram={" 28GB Memória RAM"}
            server={"Servidor Brasileiro"}
            save={"Salva os arquivos"}
            spot={"Contém Spot"}
          />
        </div>

        <h2 className=" text-4xl font-bold text-azure">AWS</h2>

        <div className="gap-44 flex flex-wrap justify-center">
          <Planos
            title={"AWS Basic"}
            value={"R$65.00/ 7 dias"}
            cpu={"8 Núcleos"}
            gpu={"GPU Nvidia Tesla T4"}
            ram={"32GB Memória RAM"}
            server={"Servidor Brasileiro"}
            save={"Salva os arquivos"}
            spot={"Contém Spot"}
          />
          <Planos
            title={"AWS Standard"}
            value={"R$95.00/ 15 dias"}
            cpu={"8 Núcleos"}
            gpu={"GPU Nvidia Tesla T4"}
            ram={" 32GB Memória RAM"}
            server={"Servidor Brasileiro"}
            save={"Salva os arquivos"}
            spot={"Contém Spot"}
          />
          <Planos
            title={"AWS Elite"}
            value={"R$125.00/ 30dias"}
            cpu={"8 Núcleos"}
            gpu={"GPU Nvidia Tesla T4"}
            ram={" 32GB Memória RAM"}
            server={"Servidor Brasileiro"}
            save={"Salva os arquivos"}
            spot={"Contém Spot"}
          />
          </div>
      </section>

      <Footer />
    </div>
  );
}
