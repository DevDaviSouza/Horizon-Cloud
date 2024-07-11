import Header from "@/components/header"
import atirador from "../../assets/images/atirador.png"
import money from '../../assets/images/money.svg'
import servidor from '../../assets/images/servidor.svg'
import phone from '../../assets/images/phone.svg'
import business from '../../assets/images/busines.jpg'
import Button from "@/components/buttons"
import Image from "next/image"
import Destaques from "@/components/destquesAbout"
import Planos from "@/components/planos"
import Footer from '@/components/footer'

export default function Sobre() {
  return (
    <div className="m-0 bg-fundo h-vh justify-center">
      <Header />

      <section className="flex flex-col  items-center justify-center mt-28">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="font-extrabold text-5xl sm:text-3xl max-w-128 mb-5"> Nosso propósito</div>
          <div className="flex flex-col  text-2xl sm:text-xl text-center items-center justify-center"> A Horizon surgiu para fornecer aos clientes o melhor Serviço de Cloud Games do Brasil.</div>

          <div className="flex gap-12 mt-8">
            <Button title="Cadastrar-se" />
          </div>
        </div>
      </section>

      <div className="flex justify-center font-extrabold text-3xl mb-5 mt-56 text-center">Nossos diferenciais:</div>
      <section className="flex flex-row lg:flex-col justify-evenly items-center mt-10 md:pt-12">
        
            <Destaques
              image={money}
              title="Preço Acessível"
              text="Nosso Serviço disponibiliza Maquinas Super Potentes por um valor super acessível."
            />

            <Destaques
              image={servidor}
              title="Hardware"
              text="Nossos servidores possuem um hardware de ponta-à-ponta, garantindo assim uma jogabilidade em alta performance."
            />

            <Destaques
              image={phone}
              title="Suporte eficiente"
              text="Temos uma equipe composta por diversos especialistas que estão preparados para atendê- lo de forma eficiente e rápidal."
            />
      </section>

      <section className="flex flex-row justify-evenly items-center mt-56 lg:flex-col">
      <div className= "flex flex-col">   
            <Image className=" ml-2 lg:ml-0 w-124 rounded-md sticky left-130" src={business} alt="atirador" />
          </div>
          <div className="flex flex-col lg:text-center">
            <div className="font-extrabold text-5xl max-w-128 mb-5 lg:text-4xl lg:mt-14"> Porque escolher a <b className="text-cor1">Horizon Cloud</b> ?</div>
            <div className=" max-w-124 text-lg lg:mx-5"> Na Horizon Cloud buscamos por soluções confiáveis e sem preocupações, a nossa empresa tem como missão oferecer o melhor serviço de cloud games para os seus clientes. Com uma equipe altamente capacitada e especializada, garantimos atendimento eficiente.</div>
        </div>
      </section>

      <section className="mt-40">
        <div className="flex flex-col min-h-98 gap-12 justify-center text-center items-center p-10 mb-40">
          <div className="flex flex-col gap-5 my-9">
            <h1 className="text-5xl font-bold">Pronto para começar?</h1>
            <h2 className="text-2xl font-semibold">Selecione o plano que se encaixa com o seu orçamento e adquira agora!
              Ou entre em contato com nossa equipe para obter uma solução exclusiva para você.</h2>
            <div className="flex gap-12 mt-8 items-center justify-center">
              <Button title="Escolher plano" />
              <Button title="Contato" />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
