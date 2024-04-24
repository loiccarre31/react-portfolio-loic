import { CONTACT } from "../constants"
import Bouton from "./Bouton"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl font-[Cafe]">Un projet ? Une idée ?</h1>
        <h1 className="my-10 text-center text-2xl font-[Cafe] text-neutral-400">J'ai créer une application permettant de multiplier les inspirations</h1>
        <div className="text-center tracking-tighter">
            <Bouton text={"Lancer l'application"}/>
        </div>
    </div>
  )
}

export default Contact