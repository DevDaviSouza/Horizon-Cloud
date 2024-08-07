

export default function Button({ title, url }) {

    return (
        <button className="w-44 h-10 bg-botoes text-lg font-extrabold rounded-lg shadow-md shadow-shadow sm:w-32">
            <a href={url}> {title} </a>
        </button>
    )
}