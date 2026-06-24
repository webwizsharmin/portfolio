import "./style.css";
import { renderNavbar } from "./modules/navbar.js";

const app = document.getElementById("app");
app.appendChild(renderNavbar());
