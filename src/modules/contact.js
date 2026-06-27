export function renderContact() {
  const contact = document.createElement("section");

  contact.id = "contact";
  contact.className = "py-24 px-6 md:px-3";

  contact.innerHTML = `
    
    <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-3"
    >Get in touch</p>

    <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-2">
        Let's build something
    </h2>

    <p class="text-muted mb-12 max-w-lg">
        Have a project, a role, or just want to say hi? I read every message.
    </p>

    <div class="reveal max-w-lg bg-surface border border-border rounded-2xl p-7">
        <div class="mb-5">
            <label class="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wide">
            Your name</label>

            <input type="text" placeholder="Jane Smith"
            class="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-muted outline-none focus:border-accent transition-colors" >
        </div>
        <div class="mb-5">
            <label class="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wide">
            Email address</label>

            <input type="email" placeholder="jane@company.com"
            class="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-muted outline-none focus:border-accent transition-colors" >
        </div>

        <div class="mb-6">
            <label class="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wide">
            Message</label>

            <textarea rows="5"
                placeholder="Tell me about your project..."
                class="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-muted outline-none focus:border-accent transition-colors resize-y"
            ></textarea>
        </div>

        <button class="w-full py-3 bg-accent text-bg font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Send message →</button>

        <div class="flex gap-5 mt-6 pt-6 border-t border-border">

            <a href="https://github.com/webwizsharmin" target="_blank" class="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-medium">
            <i class='bx bxl-github'></i>
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/webwizsharmin/" target="_blank" class="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-medium">
            <i class='bx bxl-linkedin-square'></i>
              LinkedIn
            </a>

            <a href="mailto:webwizsharmin@gmail.com"  class="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-medium">
            <i class='bx bx-envelope'></i>
              Email
            </a>

           
        </div>

        
    </div>
  `;

  return contact;
}
