const menu = [
    { title:"Home", href:"index.html" },
    { title:"Quem Somos", href:"sobre.html" },
    { title:"Venha ser Parceiro", href:"parceiro.html" },
    { title:"Compra de Dívidas", href:"compra-de-dividas.html" },
    { title:"Convênios", href:"convenios.html" }
];

class HeaderNav extends HTMLElement {
	connectedCallback(){
		const current = location.pathname.split("/").pop() || "index.html";
		const mainmenu = menu.map(item => `
			<li><a href="${item.href}" class="${item.href === current ? "active" : ""}">${item.title}</a></li>
			`).join("");

		this.innerHTML = `
			<header>
				<a href="#" class="logo">
					<img src="./assets/images/logo_allcred_branco.png" alt="">
				</a>
				<a href="#main-menu" id="main-menu-toggle" class="menu-toggle" aria-label="Open main menu">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						stroke="#F5F2ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="lucide lucide-menu-icon lucide-menu">
						<path d="M4 5h16" />
						<path d="M4 12h16" />
						<path d="M4 19h16" />
					</svg>
				</a>
				<nav id="main-menu" class="main-menu" aria-label="Main menu">
					<a href="#main-menu-toggle" id="main-menu-close" class="menu-close" aria-label="Close main menu">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="#F5F2ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</a>
					<ul id="main-menu" class="nav-links">
						${mainmenu}
					</ul>
				</nav>
				<a href="#main-menu-toggle" class="backdrop" tabindex="-1" aria-hidden="true" hidden></a>
			</header>
		`;
	}
}

customElements.define("header-nav", HeaderNav);