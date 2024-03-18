
export default function Footer() {
    return (
        <footer className="flex flex-col items-center text-center gap-12 bg-gradient-to-t from-footer2 to-footer1 p-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl font-bold">Horizon Cloud</h1>
                <h2 className="text-3xl font-semibold">O seu Super PC na Nuvem</h2>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold">Contato - Suporte</h2>
                <p className=" font-semibold">email da empresa</p>
                <p className=" font-semibold">numero de celular</p>
            </div>

            <p className="font-light"> Copyright 2023 © Horizon Cloud Games </p>
        </footer>
    )
}