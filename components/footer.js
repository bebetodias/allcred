class Footer extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
			<footer class="footer blue-bg">
				<div class="container">
					<div class="footer-top">
						<!-- Brand Column -->
						<div class="footer-brand">
							<div class="footer-logo">
								<img src="./assets/images/logo_allcred_branco.png" alt="Allcred Logo" width="186" height="129">
							</div>
							<p class="footer-brand-desc">
								Correspondente Bancário há mais de 15 Anos para o Sul, Sudeste e todo Brasil
							</p>
							<div class="footer-legal-info">
								<p>CNPJ: 08.768.992/0002-94</p>
								<p>Rua Major Mendonça, 1369 — Vila Santo Antônio<br>Franca, SP · CEP 14401-161</p>
							</div>
						</div>

						<!-- Column: Produtos -->
						<div class="footer-col">
							<h4 class="footer-col-title">CONVÊNIOS</h4>
							<div class="footer-links-list">
								<a href="#">Prefeitura de São Paulo</a>
								<a href="#">Governo de São Paulo</a>
								<a href="#">Prefeitura de Curitiba</a>
								<a href="#">Governo do Paraná</a>
								<a href="#">Prefeitura de São Luis</a>
								<a href="#">Governo do Maranhão</a>
								<a href="#">Prefeitura de Porto Alegre</a>
							</div>
						</div>

						<!-- Column: Empresa -->
						<div class="footer-col">
							<h4 class="footer-col-title">EMPRESA</h4>
							<div class="footer-links-list">
								<a href="./sobre.html">Sobre a Allcred</a>
								<a href="./parceiro.html">Seja um parceiro</a>
								<a href="#">Fale conosco</a>
							</div>
						</div>

						<!-- Column: Atendimento -->
						<div class="footer-col">
							<h4 class="footer-col-title">ATENDIMENTO</h4>
							<div class="footer-links-list">
								<a href="tel:1630307055">(16) 3030-7055</a>
								<a href="https://wa.me/">WhatsApp</a>
								<a href="mailto:sac@allcredpromotora.com.br">sac@allcredpromotora.com.br</a>
								<p style="margin-top: 8px;">Seg–Sex: 8h às 18h<br>Sábado: 9h às 13h</p>
							</div>
						</div>
					</div>

					<div class="footer-bottom">
						<p>© 2025 Allcred Promotora de Crédito. Todos os direitos reservados.</p>
						<div class="footer-legal-links">
							<a href="#">Política de Privacidade</a>
						</div>
					</div>
				</div>
			</footer>
		`;
	}
}

customElements.define("ac-footer", Footer);