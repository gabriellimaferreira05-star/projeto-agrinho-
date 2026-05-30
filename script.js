// Mensagem exibida ao clicar no botão "Saiba Mais"
function mostrarMensagem(){
  alert(
    "A energia solar é uma fonte de energia limpa e renovável que contribui para a redução dos custos no agronegócio e para a preservação do meio ambiente."
  );
}

// Ativa e desativa o modo escuro da página
function modoEscuro(){
  document.body.classList.toggle("dark-mode");
}

// Mensagem de boas-vindas ao carregar o site
window.onload = function(){
  alert(
    "Seja bem-vindo ao Projeto Energia Solar no Agronegócio! Conheça como a tecnologia solar está transformando o campo com sustentabilidade e inovação."
  );
}

// =======================
// GALERIA DE IMAGENS
// =======================

const imagens = [

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRphJltdCWmzu8Q4cqO2b_KT71BFFVXbrg_UQ&s",
    titulo: "Painéis Solares em Área Rural"
  },

  {
    url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    titulo: "Agronegócio Sustentável"
  },

  {
    url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    titulo: "Produção Agrícola Moderna"
  },

  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
    titulo: "Tecnologia Aplicada ao Campo"
  },

  {
    url: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1200&auto=format&fit=crop",
    titulo: "Energia Limpa e Renovável"
  },

  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    titulo: "Sustentabilidade no Agronegócio"
  }

];