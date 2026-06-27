import "./style.css";
import { renderNavbar } from "./modules/navbar.js";
import { renderHero } from "./modules/hero.js";
import { renderProjects } from "./modules/projeccts.js";
import { renderSkills } from "./modules/skills.js";
import { renderProcess } from "./modules/process.js";
import { renderLearning } from "./modules/learning.js";
import { renderContact } from "./modules/contact.js";
import { renderFooter } from "./modules/footer.js";

const app = document.getElementById("app");
app.appendChild(renderNavbar());
app.appendChild(renderHero());
app.appendChild(renderProjects());
app.appendChild(renderSkills());
app.appendChild(renderProcess());
app.appendChild(renderLearning());
app.appendChild(renderContact());
app.appendChild(renderFooter());
