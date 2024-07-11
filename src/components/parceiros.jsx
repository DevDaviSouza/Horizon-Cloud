import Image from "next/image"

export default function Parceiros({ parceiro }) {
    return (
        <div className="flex w-32 h-32 rounded-lg bg-gradient-to-t from-footer2 to-footer1 items-center justify-center md:w-16 md:h-16">
            <Image className="text-destaquesc2 md:w-12" src={parceiro} alt="parceiro" />
        </div>
    )
}