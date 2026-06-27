export function renderProjects() {
  const projects = document.createElement("section");

  projects.id = "projects";
  projects.className = "py-24 px-6 md:px-3 animate-fade-up ";

  projects.innerHTML = `
    <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Featured Work</p>

    <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-2"> Things I've built</h2>

    <p class="text-muted mb-12 max-w-lg">Practical projects designed to solve real problems with clean code and scalable architecture.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 animate-fade-up-2">

        <!-- Card 1 -->
        <article class="reveal bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-accent transition-all duration-300">
        
            <div clas="border-b border-accent ">
            <img src='../src/assets/img/clientFlow1.png'>
            </div>

            <div class="p-6">
                <span class="text-xs font-semibold uppercase tracking-widest text-accent bg-sky-400/10 border border-sky-400/25 px-2 py-0.5 rounded "
                >SaaS Dashboard</span>

                <h3 class="text-base font-bold mt-3 mb-2">Client Flow</h3>


                <p class="text-muted text-sm leading-relaxed">
                A modern CRM dashboard built for freelancers and small teams. Complex data tables, drag‑and‑drop kanban, and smooth animated transitions throughout.
                <p>

                <div class="flex flex-wrap gap-1.5 mt-4">
                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">JavaScript ES6</span>

                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">Tailwind CSS</span>


                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">Charts.js</span>
                </div>

                <div class="flex gap-5 mt-5">
                    <a href="https://github.com/webwizsharmin/clientflow" target="_blank"
                    class="text-xs font-semibold text-accent flex items-center gap-1 hover:opacity-70 transition-opacity">
                    <i class='bx bx-link-external '></i>
                    Live demo
                    </a>
                    <a href="https://github.com/webwizsharmin/clientflow" target="_blank"
                    class="text-xs font-semibold text-accent flex items-center gap-1 hover:opacity-70 transition-opacity">
                    <i class='bx bxl-github'></i>
                    GitHub
                    </a>
                </div>


            </div>
        </article>

        <!-- Card 2 -->
        <article class="reveal bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-accent transition-all duration-300">
            
            <div>
                <img src='../src/assets/img/portfolio.png'>
            </div>

             <div class="p-6">
                <span class="text-xs font-semibold uppercase tracking-widest text-accent bg-sky-400/10 border border-sky-400/25 px-2 py-0.5 rounded "
                >Portfolio Website</span>

                <h3 class="text-base font-bold mt-3 mb-2">Personal portfolio</h3>


                <p class="text-muted text-sm leading-relaxed">
                Responsive portfolio site. Clean modular layout, smooth page transitions, and recruiter focused project showcase.
                <p>

                <div class="flex flex-wrap gap-1.5 mt-4">
                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">JavaScript ES6</span>

                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">Tailwind CSS</span>

                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">HTML</span>

                    
                </div>

                <div class="flex gap-5 mt-5">
                    <a href="https://github.com/webwizsharmin/portfolio" target="_blank"
                    class="text-xs font-semibold text-accent flex items-center gap-1 hover:opacity-70 transition-opacity">
                    <i class='bx bx-link-external '></i>
                    Live demo
                    </a>
                    <a href="https://github.com/webwizsharmin/portfolio" target="_blank"
                    class="text-xs font-semibold text-accent flex items-center gap-1 hover:opacity-70 transition-opacity">
                    <i class='bx bxl-github'></i>
                    GitHub
                    </a>
                </div>

            </div>
        </article>

        <!-- Card 3 -->
        <article class="reveal bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-accent transition-all duration-300">
            
            <div>
                <img src='../src/assets/img/landingPage.png'>
            </div>

             <div class="p-6">
                <span class="text-xs font-semibold uppercase tracking-widest text-accent bg-sky-400/10 border border-sky-400/25 px-2 py-0.5 rounded "
                >Landing Page</span>

                <h3 class="text-base font-bold mt-3 mb-2">Business Coach Landing</h3>


                <p class="text-muted text-sm leading-relaxed">
                Conversion focused landing page. Modern responsive design, optimized sections, and fast performance for client projects.
                <p>

                <div class="flex flex-wrap gap-1.5 mt-4">
                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">HTML</span>

                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">Tailwind CSS</span>

                    <span class="text-xs font-medium px-2 py-0.5 bg-surface2 border border-border rounded text-muted">JavaScript</span>

                </div>

                <div class="flex gap-5 mt-5">
                    <a href="https://webwizsharmin.github.io/business-coach-landing-page/" target="_blank"
                    class="text-xs font-semibold text-accent flex items-center gap-1 hover:opacity-70 transition-opacity">
                    <i class='bx bx-link-external '></i>
                    Live demo
                    </a>
                    <a href="https://github.com/webwizsharmin/business-coach-landing-page" target="_blank"
                    class="text-xs font-semibold text-accent flex items-center gap-1 hover:opacity-70 transition-opacity">
                    <i class='bx bxl-github'></i>
                    GitHub
                    </a>
                </div>

            </div>
        </article>
    </div>
    `;

  return projects;
}
