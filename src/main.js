import "./style.css";
import { renderNavbar } from "./modules/navbar.js";
import { renderHero } from "./modules/hero.js";
import { renderProjects } from "./modules/projeccts.js";
import { renderSkills } from "./modules/skills.js";

const app = document.getElementById("app");
app.appendChild(renderNavbar());
app.appendChild(renderHero());
app.appendChild(renderProjects());
app.appendChild(renderSkills());
