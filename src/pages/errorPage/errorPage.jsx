import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function ErrorPage() {
  // const {errorMessage} = useParams()
  const location = useLocation();
  console.log(location.state);
  const errorMessage = location.state?.message;

  return (
    <div>
      <p>{errorMessage}</p>
    </div>
  );
}
