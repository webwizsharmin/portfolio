export function renderProcess() {
  const process = document.createElement("section");

  process.id = "process";
  process.className =
    "py-24 px-6 mx:px-3 bg-gradient-to-b from-bg to-[#0a1120]";

  process.innerHTML = `
  
  <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
  How I work</p>

  <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-2">
    My development process
    </h2>

    <p class="text-muted mb-12 max-w-lg">
    From idea to production, deliberate at every step.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="reveal bg-surface border border-border rounded-2xl p-6">
            <div class="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-xl mb-5">
                <i class='bx bx-search-alt-2'></i>
            </div>

            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-1">
            Step 01
            </p>

            <h3 class="font-bold mb-2">Understand</h3>
            <p class="text-muted text-sm landing-relaxed">
                Start with the user, not the component. what do they need to do, and where does the current UI get in their way?
            </p>
        </div>

        <div class="reveal bg-surface border border-border rounded-2xl p-6">
            <div class="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-xl mb-5">
                <i class='bx bx-shape-triangle'></i>
            </div>

            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-1">
            Step 02
            </p>

            <h3 class="font-bold mb-2">Design</h3>
            <p class="text-muted text-sm landing-relaxed">
                Wireframes to Figma prototype. Layout and hierarchy resolved before writing any code.
            </p>
        </div>

        <div class="reveal bg-surface border border-border rounded-2xl p-6">
            <div class="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-xl mb-5">
                <i class='bx bx-cog' ></i>
            </div>

            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-1">
            Step 03
            </p>

            <h3 class="font-bold mb-2">Build</h3>
            <p class="text-muted text-sm landing-relaxed">
                Component first. Accessible markup, clean JavaScript, tests alongside the feature not as an afterthought.
            </p>
        </div>

        <div class="reveal bg-surface border border-border rounded-2xl p-6">
            <div class="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-xl mb-5">
                <i class='bx bx-rocket'></i>
            </div>

            <p class="text-xs font-bold uppercase tracking-widest text-accent mb-1">
            Step 04
            </p>

            <h3 class="font-bold mb-2">Ship &amp; polish</h3>
            <p class="text-muted text-sm landing-relaxed">
                Deploy, watch real usage, iterate. The first virsion is always a draft. The last one is what ships.
            </p>
        </div>
    </div>

  `;
  return process;
}
