const menu = [
    { title:"Home", href:"index.html" },
    { title:"Quem Somos", href:"sobre.html" },
    { title:"Venha ser Parceiro", href:"parceiro.html" },
    { title:"Compra de Dívidas", href:"compra-de-dividas.html" },
    { title:"Convênios", href:"convenios.html" }
];

class HeaderNav extends HTMLElement {
	fecharMenu() {
		mobileMenu.classList.remove('open');
		hamburger.classList.remove('open');
		hamburger.setAttribute('aria-expanded', 'false');
		document.body.style.overflow = '';
	}
	connectedCallback(){
		const current = location.pathname.split("/").pop() || "index.html";
		const mainmenu = menu.map(item => `
			<a href="${item.href}" class="nav-link ${item.href === current ? "active" : ""}">${item.title}</a>
			`).join("");
		const mainmenu_mobile = menu.map(item => `
			<a href="${item.href}" class="nav-link-mobile ${item.href === current ? "active" : ""}" onclick="fecharMenu()">${item.title}</a>
			`).join("");

		this.innerHTML = `
			<header>
				<a href="./index.html" class="logo" aria-label="Allcred Promotora — página inicial">
					<img src="./assets/images/logo_allcred_branco.png" alt="">
				</a>
				<nav class="nav" role="navigation" aria-label="Menu principal">
					${mainmenu}
				</nav>
				<div class="header-cta">
					<a href="https://wa.me/5516930307055" class="btn btn-green" target="_blank" rel="noopener noreferrer">
						<svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
						</svg>
						WhatsApp
					</a>
					<input type="checkbox" id="menu-toggle" class="menu-checkbox">
					<label for="menu-toggle" class="menu-icon">
						<span></span><span></span><span></span>
					</label>
					
					<nav class="mobile-menu" id="mobile-menu" aria-label="Menu mobile" role="navigation">
						${mainmenu_mobile}
					</nav>
				</div>
			</header>
			
		`;
	}
}

customElements.define("ac-header", HeaderNav);