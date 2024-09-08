import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function ErrorPage () {
    // const {errorMessage} = useParams()
    const location = useLocation()
    const errorMessage = location.state?.errorMessage

    return(
        <div>
            <p>{errorMessage}</p>
        </div>
    )
}