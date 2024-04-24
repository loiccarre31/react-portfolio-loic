const Bouton = ({ text, link}) => {
    return (
        <button className="
            h-10
            font-[Cafe]
            bg-white/10
            backdrop-blur-sm
            border
            border-gray-200
            text-white
            py-2
            px-4
            rounded-lg
            shadow-lg
            hover:bg-white/20
            transition
            duration-300
            ease-in-out
        ">
            <a target="_blank" href={link}>{text}</a>  {/* Utilisation du texte passé en tant que prop */}
        </button>
    );
}

export default Bouton;