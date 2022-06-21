import "../styles/PersonItem.css";
import {AiOutlineRight} from "react-icons/ai";
function PersonItem() {
    return (
        <div className="box-item">
            <div className="text">
                <div className="title">Luke Skywalker</div>
                <div className="sub-title">Human from Tatooine</div>
            </div>
            <AiOutlineRight className="arrow"/>
        </div>
        );
}

export default PersonItem;