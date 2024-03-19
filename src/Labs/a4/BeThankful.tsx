import { useSelector } from "react-redux";
import { LabState } from "./store";

function BeThankFul(){
    const { message } = useSelector((state: LabState) => state.helloReducer);
    const { count } = useSelector((state: LabState) => state.counterReducer);
    return(
        <div>
            <h1>Be thankful for {message}{count}</h1>
        </div>
    );
}

export default BeThankFul;