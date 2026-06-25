export function renderHero() {
  const hero = document.createElement("section");
  hero.id = "hero";
  hero.className =
    "min-h-screen flex items-center pt-24 relative overflow-hidden";
  hero.innerHTML = `
    <div class="max-w-3xl"> 
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">Frontend Developer <br> Building Modular <span class="text-accent">JavaScript Application</span>
        </h1>
        <p class="text-lg text-muted max-w-xl mb-10">
        Building maintainable, modern frontend projects with clean UI design and scalable architecture
        </p>

        <div class="flex flex-wrap gap-4 mb-8">
            <a href="#projects" class="px-6 py-3 bg-accent text-slate-900 font-bold text-sm rounded-lg hover:opacity-85 transition">See my work</a>
            <a href="#contact" class="px-6 py-3 border border-border text-text font-semibold text-sm rounded-lg hover:border-accent hover:text-accent transition">Let's talk</a>
        </div>

        <div class="flex gap-4 mt-6">
            <a href="#github" class="text-muted text-2xl hover:text-accent transition"><i class='bx bxl-github'></i></a>
            <a href="#linkedIn" class="text-muted text-2xl hover:text-accent transition"><i class='bx bxl-linkedin-square'></i></a>

        </div>


    `;
  return hero;
}
