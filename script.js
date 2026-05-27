// Mensagem ao clicar no botão
function mostrarMensagem(){
  alert("A energia solar ajuda o agro e protege o meio ambiente!");
}

// Modo escuro
function modoEscuro(){
  document.body.classList.toggle("dark-mode");
}

// Mensagem inicial
window.onload = function(){
  alert("Bem-vindo ao Projeto Energia Solar no Agro!");
}

// =======================
// GALERIA DE IMAGENS
// =======================

const imagens = [

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRphJltdCWmzu8Q4cqO2b_KT71BFFVXbrg_UQ&s",
    titulo: "Placas Solares no Campo"
  },

  {
    url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    titulo: "Agronegócio Sustentável"
  },

  {
    url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    titulo: "Plantação Moderna"
  },

  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
    titulo: "Tecnologia no Agro"
  },

  {
    url: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1200&auto=format&fit=crop",
    titulo: "Energia Renovável"
  },

  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    titulo: "Campo e Sustentabilidade"
  }

];

// Container da galeria
const galeria = document.getElementById("galeria-container");

// Criando imagens dinamicamente
imagens.forEach(function(imagem){

  // Criar card
  const card = document.createElement("div");
  card.classList.add("galeria-item");

  // Criar imagem
  const img = document.createElement("img");
  img.src = imagem.url;

  // Criar título
  const titulo = document.createElement("p");
  titulo.textContent = imagem.titulo;

  // Adicionar elementos
  card.appendChild(img);
  card.appendChild(titulo);

  galeria.appendChild(card);

});