import { Link } from "react-router-dom"
import Errorbro from "../assets/404 Error-bro.png"

export default function ErrorElement() {
    return (

        <div className="mt-20 caret-transparent text-center">
            <div className="mx-auto w-96">
                <img src={Errorbro} alt="Error_img" className="w-full object-cover" />
            </div>
            <Link to={`/Home`} className="rounded-2xl inline-block bg-green-300 py-2 px-5">Go Back</Link>
        </div>

    )
}