export function renderSkills() {
  const skills = document.createElement("section");

  skills.id = "skills";
  skills.className = "py-24 px-6 md:px-3 bg-gradient-to-b from-bg to-[#0c1527]";

  skills.innerHTML = `
    <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
    Toolbox
    </p>

    <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-2">
    What I work with</h2>

    <p class="text-muted mb-12 max-w-lg">Tools chosen for the job, not the résumé.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="reveal bg-surface border border-border rounded-2xl p-6 hover:border-sky-400/50 transition-colors">
            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-4">Core
            </p>

            <div class="flex flex-wrap gap-2">
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    HTML5
                </span>

                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    CSS3
                </span>
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    JavaScript
                </span>


            </div>
        </div>

        <div class="reveal bg-surface border border-border rounded-2xl p-6 hover:border-sky-400/50 transition-colors">
            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-4">Styling
            </p>

            <div class="flex flex-wrap gap-2">
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    TailwindCSS
                </span>

                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    Responsive Design
                </span>
                
            </div>
        </div>

        <div class="reveal bg-surface border border-border rounded-2xl p-6 hover:border-sky-400/50 transition-colors">
            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-4">Workflow
            </p>

            <div class="flex flex-wrap gap-2">
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    Git
                </span>

                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    GitHub
                </span>
               
            </div>
        </div>

        <div class="reveal bg-surface border border-border rounded-2xl p-6 hover:border-sky-400/50 transition-colors">
            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-4">Tooling
            </p>

            <div class="flex flex-wrap gap-2">
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    Vite
                </span>
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                    npm
                </span>



            </div>
        </div>
        <div class="reveal bg-surface border border-border rounded-2xl p-6 hover:border-sky-400/50 transition-colors">
            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-4">Learning
            </p>

            <div class="flex flex-wrap gap-2">
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                   React
                </span>
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                   Next.js
                </span>
                <span class="text-sm font-medium px-3 py-1 bg-surface2 border border-border rounded-lg text-slate-100">
                  Node.js
                </span>



            </div>
        </div>
    </div>
    `;

  return skills;
}
