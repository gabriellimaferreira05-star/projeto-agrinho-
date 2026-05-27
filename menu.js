const menuToggle = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');

  menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' na lista do menu
    navList.classList.toggle('active');
    
    // Opcional: Animação básica do botão (fica um 'X' se desejar customizar -)
    menuToggle.classList.toggle('is-active');
  });
