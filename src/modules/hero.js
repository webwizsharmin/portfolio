export function renderHero() {
  const hero = document.createElement("section");
  hero.id = "hero";
  hero.className =
    "min-h-screen flex items-start pt-24 pb-20 px-6 md:px-12 relative overflow-hidden border-0";
  hero.innerHTML = `

  <div class="absolute top-0 right-0 w-150 h-150 rounded-full pointer-events-none"
  style="
  background: radial-gradient(
  circle,
   rgba(56, 189, 284, 0.1) 0%, transparent 70%
  );
  "></div>
    <div class="max-w-2xl animated-fade-up"> 
        <p 
        class="text-accent text-sm font-semibold tracking-widest uppercase mb-5">
        Frontend Developer
        </p>
        <h1 class="text-5xl  md:text-7xl font-extrabold leading-[1.05] tracking-tight  mb-6">
        I craft interfaces <br>
        <span class="text-accent"> people love</span>
        <span id="cursor" class="text-accent animate-blink">|</span>
        </h1>
        <p class="text-lg mx-auto text-muted max-w-xl mb-10">
        Focused on clean UI, scalable architecture, and maintainable code.
        </p>

        <div class="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#projects" class="px-6 py-3 bg-accent text-slate-900 font-bold text-sm rounded-lg hover:opacity-85 transition">See my work</a>
            
        </div>

        <div class="flex gap-4 mt-6">
            <a href="#github" class="text-muted text-2xl hover:text-accent transition"><i class='bx bxl-github'></i></a>
            <a href="#linkedIn" class="text-muted text-2xl hover:text-accent transition"><i class='bx bxl-linkedin-square'></i></a>

        </div>
    </div>

    `;
  return hero;
}
