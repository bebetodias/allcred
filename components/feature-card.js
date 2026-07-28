const icons = {
	shield_off: `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
			fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
			class="lucide lucide-shield-off-icon lucide-shield-off">
			<path d="m2 2 20 20" />
			<path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
			<path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
		</svg>
	`,
	building: `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
			fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
			class="lucide lucide-building-icon lucide-building">
			<path d="M12 10h.01"/><path d="M12 14h.01"/>
			<path d="M12 6h.01"/>
			<path d="M16 10h.01"/>
			<path d="M16 14h.01"/>
			<path d="M16 6h.01"/>
			<path d="M8 10h.01"/>
			<path d="M8 14h.01"/>
			<path d="M8 6h.01"/>
			<path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
			<rect x="4" y="2" width="16" height="20" rx="2"/>
		</svg>
	`,
	badge_check: `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
			fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
			class="lucide lucide-badge-check-icon lucide-badge-check">
			<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
			<path d="m9 12 2 2 4-4"/>
		</svg>
	`,
	briefcase: `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
			fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
			class="lucide lucide-briefcase-business-icon lucide-briefcase-business">
			<path d="M12 12h.01"/>
			<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
			<path d="M22 13a18.15 18.15 0 0 1-20 0"/>
			<rect width="20" height="14" x="2" y="6" rx="2"/>
		</svg>
	`,
	handshake: `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
			fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
			class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/>
			<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
			<path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
			<path d="M3 4h8"/>
		</svg>
	`,
	headset: `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
			fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
			class="lucide lucide-headset-icon lucide-headset">
			<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
			<path d="M21 16v2a4 4 0 0 1-4 4h-5"/>
		</svg>
	`,
	trending_up: `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
			fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
			class="lucide lucide-trending-up-icon lucide-trending-up">
			<path d="M16 7h6v6"/>
			<path d="m22 7-8.5 8.5-5-5L2 17"/>
		</svg>
	`,
};

class FeatureCard extends HTMLElement {
	connectedCallback(){
		const icon = this.getAttribute("icon");
		const title = this.getAttribute("title");
		const text = this.getAttribute("text");

		this.innerHTML = `
			<div class="card">
				<div class="card-icon">
					${icons[icon]}
				</div>
				<h3 class="blue">${title}</h3>
				<p class="service-desc muted">${text}</p>
			</div>
		`;
	}
}

customElements.define("feature-card", FeatureCard);