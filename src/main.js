import "./style.css";
import { renderNavbar } from "./modules/navbar.js";
import { renderHero } from "./modules/hero.js";
import { renderProjects } from "./modules/projeccts.js";

const app = document.getElementById("app");
app.appendChild(renderNavbar());
app.appendChild(renderHero());
app.appendChild(renderProjects());
