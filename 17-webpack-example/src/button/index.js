import htmlToElement from "../../utils/htmlToElement";
import ButtonHTML from "./index.html";
import "./index.scss";

const button = ({ onClick, title, className }) => {
    const buttonElement = htmlToElement(ButtonHTML);
    buttonElement.innerHTML = title;
    buttonElement.classList.add(className);
    buttonElement.addEventListener("click", onClick);
    return buttonElement;
};

export default button;