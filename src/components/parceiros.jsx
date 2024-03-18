import Image from "next/image"

export default function Parceiros({parceiro}) {
    return (
        <div className="flex w-32 h-32 rounded-lg bg-gradient-to-b from-cor2 from-60% to-cor1 items-center justify-center">
            <Image className="text-destaquesc2" src={parceiro} alt="parceiro" />
        </div>
    )
}