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
    <div className="m-0 bg-fundo h-vh">
        <Header />

      <section className="flex flex-row justify-evenly items-center my-28">
            <div className="">
              <div className="font-extrabold text-5xl max-w-128 mb-5"> Nosso propósito</div>
              <div className=" max-w-124 text-2xl"> A Horizon surgiu para fornecer aos clientes o melhor Serviço de Cloud Games do Brasil.</div>

              <div className="flex gap-12 mt-8">
                <Button title="Nossos Planos" />
                <Button title="Cadastrar-se" />
              </div>
            </div>

            <div className= "flex flex-col   ">
            <div className= "w-80 h-80 bg-gradient-to-b from-circulo1 to-circulo2 rounded-full items-center justify-center ">
                <Image className=" ml-2 h-80 left-130" src={atirador} alt="atirador" />
              </div>
            </div>
      </section>
      
      <section className="justify-evenly items-center my-28 flex flex-col">
        <div className=" justify-center">
          <div className="font-extrabold text-3xl max-w-128 mb-5 ">Nossos diferenciais:</div>

          <div className="flex gap-12 mt-8">
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
          </div>
        </div>
          
        
          

        
      </section>
      
      <section className="flex flex-row justify-evenly items-center my-28">
      <div className= "flex flex-col   ">
                <Image className=" ml-2 w-124 rounded-md sticky left-130" src={business} alt="atirador" />
            </div>
            <div className="">
              <div className="font-extrabold text-5xl max-w-128 mb-5"> Porque escolher a <b className="text-cor1">Horizon Cloud</b> ?</div>
              <div className=" max-w-124 text-lg"> Na Horizon Cloud buscamos por soluções confiáveis e sem preocupações, a nossa empresa tem como missão oferecer o melhor serviço de cloud games para os seus clientes. Com uma equipe altamente capacitada e especializada, garantimos atendimento eficiente.</div>
            </div>
      </section>
      
      <section>
        <div className="flex flex-col min-h-98 gap-12 bg-gradient-to-t from-footer2 to-footer1 p-10 mb-72">
            <div className="flex flex-col gap-5 my-9">
                <h1 className="text-5xl font-bold">Pronto para começar?</h1>
                <h2 className="text-3xl font-semibold">Selecione o plano que se encaixa com o seu orçamento e adquira agora!
Ou entre em contato com nossa equipe para obter uma solução exclusiva para você.</h2>
                <div className="flex gap-12 mt-8">
                  <Button title="Escolher plano" />
                  <Button title="Entrar em contato" />
                </div>
            </div>
            
        </div>
      </section>

      <Footer />
    </div>
  );
}
