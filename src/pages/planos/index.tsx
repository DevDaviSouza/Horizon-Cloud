import Header from "@/components/header"
import Button from "@/components/buttons"
import Planos from "@/components/planos"
import Footer from '@/components/footer'

export default function Dashboard() {
  return (
    <div className="m-0 bg-fundo h-vh">
      <Header />

      <section className="flex flex-col lg:flex-col justify-evenly items-center my-28 lg:justify-center lg:text-center">
        <div className="flex flex-col lg:items-center sm:mx-5 items-center justify-center text-center">
          <div className="font-extrabold text-5xl sm:text-3xl max-w-128 mb-7 "> Desfrute do nosso Serviço</div>
          <div className="flex flex-col  text-2xl sm:text-xl text-center items-center justify-center"> Descubra ainda hoje o poder das nossas Maquinas Virtuais e adquire agora mesmo uma.</div>

          <div className="flex gap-12 mt-8 lg:mb-20 items-center justify-center">
            <Button title="Cadastrar-se" url="cadastrar" />

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
