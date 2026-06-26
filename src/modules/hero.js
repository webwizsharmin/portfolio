export function renderHero() {
  const hero = document.createElement("section");
  hero.id = "hero";
  hero.className =
    "min-h-screen flex items-start pt-24 pb-20 px-6 md:px-3 relative overflow-hidden border-0";
  hero.innerHTML = `
<!-- ambient glow -->
  <div class="absolute top-0 right-0 w-150 h-150 rounded-full pointer-events-none"
  style="
  background: radial-gradient(
  circle,
   rgba(56, 189, 284, 0.1) 0%, transparent 70%
  );
  "></div>

    <div class="max-w-2xl animate-fade-up "> 

        <p 
        class="text-accent text-sm font-semibold tracking-widest uppercase mb-5 ">
        Frontend Developer
        </p>

        <h1 class="text-5xl  md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6  ">
        I craft interfaces <br>
        <span class="text-accent"> people love</span>
        <span id="cursor" class="text-accent animate-blink">|</span>
        </h1>

        <p class="text-lg text-muted max-w-xl mb-10 leading-relaxed animate-fade-up-2">
        Turning Figma files and raw ideas into pixel-perfect, fast, accessible
          web experiences. JavaScript, TailwindCSS, and a deep care for the details.
        </p>

        <div class="flex flex-wrap gap-4 animate-fade-up-3 mt-6">
            <a href="#projects" class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
              See my work<i class=' font-bold bx bx-right-arrow-alt'></i>
            </a>

            <a 
            href="https://github.com/webwizsharmin"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 border border-border text-slate-100 font-semibold text-sm rounded-xl hover:border-accent hover:text-accent transition-colors"
            >
            <i class='bx bxl-github text-lg'></i> 
            GitHub
            </a>
            <a 
            href="https://www.linkedin.com/in/webwizsharmin/"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 border border-border text-slate-100 font-semibold text-sm rounded-xl hover:border-accent hover:text-accent transition-colors"
            >
            <i class='bx bxl-linkedin-square text-lg'></i> 
            LinkedIn
            </a>

        </div>

        
    </div>

    `;
  return hero;
}
