import htmlToElement from "../../utils/htmlToElement";
import Header from "./index.html";
import Button from "../button";
import "./index.scss";

const header = htmlToElement(Header);
const customButton = Button({
    onClick: () => console.log("Click from header"),
    title: "headerButton",
    className: "header__btn",
});
header.appendChild(customButton);

export default header;