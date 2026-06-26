export function renderProjects() {
  const projects = document.createElement("section");

  projects.id = "projects";
  projects.className = "py-24 px-6 md:px-3";

  projects.innerHTML = `
    <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Featured Work</p>

    <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-2"> Things I've built</h2>
    `;

  return projects;
}
