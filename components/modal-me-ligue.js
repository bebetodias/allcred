export function initModalMeLigue() {
  const modal = document.getElementById('modal-me-ligue');
  if (!modal) return;

  const closeBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('#btn-me-ligue, [href="#modal-me-ligue"], .btn-me-ligue');
  const form = document.getElementById('form-me-ligue');
  const feedback = document.getElementById('form-feedback');

  const inputPhone = document.getElementById('input-telefone');
  const inputDia = document.getElementById('input-dia');
  const inputHorario = document.getElementById('input-horario');

  // Open modal
  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  };

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => btn.addEventListener('click', openModal));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Masking functions
  if (inputPhone) {
    inputPhone.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length <= 2) {
        e.target.value = v.length ? `(${v}` : '';
      } else if (v.length <= 6) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
      } else if (v.length <= 10) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
      } else {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
      }
    });
  }

  if (inputDia) {
    inputDia.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 8);
      if (v.length <= 2) {
        e.target.value = v;
      } else if (v.length <= 4) {
        e.target.value = `${v.slice(0, 2)}/${v.slice(2)}`;
      } else {
        e.target.value = `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
      }
    });
  }

  if (inputHorario) {
    inputHorario.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 4);
      if (v.length <= 2) {
        e.target.value = v;
      } else {
        let hours = parseInt(v.slice(0, 2), 10);
        if (hours > 23) hours = 23;
        let formattedHours = v.length >= 2 ? String(hours).padStart(2, '0') : v;
        e.target.value = `${formattedHours}:${v.slice(2)}`;
      }
    });
  }

  // Handle Form Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('input-nome').value.trim();
      const telefone = inputPhone ? inputPhone.value.trim() : '';
      const melhorDia = inputDia ? inputDia.value.trim() : '';
      const melhorHorario = inputHorario ? inputHorario.value.trim() : '';

      if (!nome || !telefone || !melhorDia || !melhorHorario) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Por favor, preencha todos os campos corretamente.';
          feedback.style.display = 'block';
        }
        return;
      }

      // Open mailto link formatted for sac@allcred.com.br
      const subject = encodeURIComponent('Solicitação de Contato - Me Ligue (Allcred)');
      const body = encodeURIComponent(
        `Olá equipe Allcred,\n\n` +
        `Nova solicitação de contato enviada pelo site:\n\n` +
        `• Nome: ${nome}\n` +
        `• Telefone: ${telefone}\n` +
        `• Melhor dia: ${melhorDia}\n` +
        `• Melhor horário: ${melhorHorario}\n\n` +
        `Por favor, me liguem!`
      );

      const mailtoUrl = `mailto:sac@allcred.com.br?subject=${subject}&body=${body}`;
      
      // Trigger default mail client
      window.location.href = mailtoUrl;

      // Also post to FormSubmit in background if endpoint active
      const formData = new FormData(form);
      fetch('https://formsubmit.co/ajax/sac@allcred.com.br', {
        method: 'POST',
        body: formData
      }).catch(() => {});

      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = '✓ Solicitação enviada! Entraremos em contato no dia e horário informados.';
        feedback.style.display = 'block';
      }

      setTimeout(() => {
        form.reset();
        if (feedback) feedback.style.display = 'none';
        closeModal();
      }, 3500);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModalMeLigue);
} else {
  initModalMeLigue();
}