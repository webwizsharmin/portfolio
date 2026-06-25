export function renderNavbar() {
  const nav = document.createElement("nav");
  nav.className =
    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[var(--spacing-container)] h-16 border-b border-border backdrop-blur-md";
  nav.innerHTML = `
    
      <a href="#hero" class="text-lg font-bold text-text"
        >Sharmin<span class="text-accent"> Aktar</span></a
      >
      <ul id="nav-links" class="hidden flex-col   md:flex gap-8 text-muted text-sm absolute top-16 left-0 right-0
           bg-surface p-6  
            md:flex-row md:static md:p-0 md:bg-transparent
      ">
        <li><a href="#projects" class="hover:text-text">Projects</a></li>
        <li><a href="#skills" class="hover:text-text">Skills</a></li>
        <li><a href="#process" class="hover:text-text">Process</a></li>
        <li><a href="#learning" class="hover:text-text">Learning</a></li>
        <li><a href="#contact" class="hover:text-text">Contact</a></li>
      </ul>
      <a id='hireBtn'
        href="#contact"
        class="hidden  md:inline-block px-4 py-1.5 bg-accent text-slate-900 font-semibold text-[.75rem] rounded-lg hover:opacity-85 transition"
        >Hire me</a
      >
     
      <button id="hamburger"   class="flex flex-col gap-1.5 md:hidden">
      <span class="w-6 h-0.5 bg-white rounded"></span>
      <span class="w-6 h-0.5 bg-white rounded"></span>
      <span class="w-6 h-0.5 bg-white rounded"></span>
      </button>
    
    `;

  // Hamburger functionality
  const hamburger = nav.querySelector("#hamburger");
  const navLinks = nav.querySelector("#nav-links");
  //   const hireBtn = nav.querySelector("#hireBtn");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    // hireBtn.classList.toggle("hidden");

    hamburger.classList.toggle("open");
  });

  return nav;
}
