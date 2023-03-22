import Spinner from "react-bootstrap/Spinner";

export default function Loader({ show }) {
    return show ? <Spinner/> : null;
}