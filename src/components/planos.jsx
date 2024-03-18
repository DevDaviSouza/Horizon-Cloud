import Button from "./buttons"

export default function Planos({ title, value, cpu, gpu, ram, server, save, spot }) {
    return (
        <div className="flex flex-col bg-gradient-to-t from-planos2 to-planos1 items-center justify-center w-64 h-98 rounded-lg gap-5">
            <h2 className="flex bg-gradient-to-t from-btplanos2 to-btplanos rounded-md w-44 h-8 items-center text-center justify-center">{title}</h2>
            <span>{value}</span>
            <div className=" w-44 h-0.4 bg-white"></div>

            <ul className="flex flex-col gap-2">
                <li className="list-disc">{cpu}</li>
                <li className="list-disc">{gpu}</li>
                <li className="list-disc">{ram}</li>
                <li className="list-disc">{server}</li>
                <li className="list-disc">{save}</li>
                <li className="list-disc">{spot}</li>
            </ul>

            <Button title={"Adquirir plano"} />
        </div>
    )
}