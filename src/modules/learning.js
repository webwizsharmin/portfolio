export function renderLearning() {
  const learning = document.createElement("section");

  learning.id = "learning";
  learning.className =
    "py-24 px-6 md:px-3 bg-gradient-to-b from-bg to-[#0a1120]";

  learning.innerHTML = `
    <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
    Growth
    </p>

    <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-2">
    Learning journey
    </h2>

    <p class="text-muted mb-12 max-w-lg">
        Deliberate practice, not just passive exposure.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
    <!-- Currently studying -->
    <div class="reveal bg-surface border border-border rounded-2xl p-6">
          <h3 class="font-bold mb-5 text-base">Currently studying</h3>

          <div class="space-y-5">
            <div>
              <div class="flex justify-between mb-1.5">
                <span class="text-sm font-semibold"
                  >React Fundamentals & Hooks</span
                >
                <span class="text-xs text-muted">70%</span>
              </div>
              <div class="text-xs text-muted mb-2">
                Building reusable components and managing state
              </div>
              <div class="h-1 bg-surface2 rounded-full">
                <div
                  class="h-1 bg-accent rounded-full"
                  style="width: 70%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1.5">
                <span class="text-sm font-semibold"
                  >Next.js Basics</span
                >
                <span class="text-xs text-muted">55%</span>
              </div>
              <div class="text-xs text-muted mb-2">
                Routing, SSR, and API routes
              </div>
              <div class="h-1 bg-surface2 rounded-full">
                <div
                  class="h-1 bg-accent rounded-full"
                  style="width: 55%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1.5">
                <span class="text-sm font-semibold"
                  >Node.js & Express </span
                >
                <span class="text-xs text-muted">30%</span>
              </div>
              <div class="text-xs text-muted mb-2">
               Backend fundamentals and REST APIs
              </div>
              <div class="h-1 bg-surface2 rounded-full">
                <div
                  class="h-1 bg-accent rounded-full"
                  style="width: 30%"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Milestones -->
        <div class="reveal bg-surface border border-border rounded-2xl p-6">
          <h3 class="font-bold mb-5 text-base">Milestones reached</h3>

          <div class="space-y-0 divide-y divide-border">
            <div class="flex gap-3 py-3.5">
              <span
                class="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5"
              ></span>
              <div>
                <p class="text-sm font-semibold">Built ClientFlow SaaS Dashboard</p>
                <p class="text-xs text-muted mt-0.5">Modular JS, TailwindCSS, Charts, CRUD system</p>
              </div>
            </div>

            <div class="flex gap-3 py-3.5">
              <span
                class="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5"
              ></span>
              <div>
                <p class="text-sm font-semibold">
                  Developed Portfolio Website
                </p>
                <p class="text-xs text-muted mt-0.5">
                  Responsive Design, recruiter focused showcase
                </p>
              </div>
            </div>

            <div class="flex gap-3 py-3.5">
              <span
                class="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5"
              ></span>
              <div>
                <p class="text-sm font-semibold">
                  Created Landing Page Project
                </p>
                <p class="text-xs text-muted mt-0.5">
                Conversion focused, mobile optimized
                </p>
              </div>
            </div>

            <div class="flex gap-3 py-3.5 border-b-0">
              <span
                class="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5"
              ></span>
              <div>
                <p class="text-sm font-semibold">
                  Consistent GitHub contributions
                </p>
                <p class="text-xs text-muted mt-0.5">
                  350+ commits, deployed projects on Netlify/Vercel
                </p>
              </div>
            </div>
          </div>
        </div>
    
    </div>
    `;

  return learning;
}
