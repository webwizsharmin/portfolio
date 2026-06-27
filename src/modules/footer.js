export function renderFooter() {
  const currentYear = new Date().getFullYear();
  const footer = document.createElement("footer");
  footer.className =
    "px-6 md:px-12 py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 ";

  footer.innerHTML = `
        <p class="text-xs text-muted">
            &copy; ${currentYear} Sharmin Aktar. 
        </p>

        <div class="flex items-center gap-5">
            <a href="https://github.com/webwizsharmin"
          target="_blank"
          aria-label="GitHub"
          class="text-muted hover:text-accent transition-colors">
          <i class='bx bxl-github'></i>
          </a>
            <a href="https://www.linkedin.com/in/webwizsharmin/"
          target="_blank"
          aria-label="GitHub"
          class="text-muted hover:text-accent transition-colors">
          <i class='bx bxl-linkedin-square'></i>
          </a>
            <a href="#hero"
          
          class="text-xs text-muted  hover:text-slate-100 transition-colors">
          Back to top <i class='bx bx-up-arrow-alt'></i>
          </a>
        </div>
    `;
  return footer;
}
