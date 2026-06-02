// Mensagem exibida ao clicar no botão "Saiba Mais"
function exibirMensagem(texto){

  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = texto;
  mensagem.classList.add("mostrar");

  setTimeout(() => {
    mensagem.classList.remove("mostrar");
  }, 4000);

}

// Botão Saiba Mais
function mostrarMensagem(){

  exibirMensagem(
    "A energia solar reduz custos, aumenta a sustentabilidade e contribui para um agronegócio mais eficiente."
  );

}

// Mensagem inicial
window.onload = function(){

  exibirMensagem(
    "Bem-vindo ao Projeto Energia Solar no Agronegócio!"
  );
  carregarGaleria();

}
// Ativa e desativa o modo escuro da página
function modoEscuro(){
  document.body.classList.toggle("dark-mode");
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

function carregarGaleria(){
  const container = document.getElementById("galeria-container");
  if (!container) return;

  imagens.forEach((imagem) => {
    const item = document.createElement("div");
    item.className = "galeria-item";

    const img = document.createElement("img");
    img.src = imagem.url;
    img.alt = imagem.titulo;

    const caption = document.createElement("p");
    caption.textContent = imagem.titulo;
    caption.style.padding = "15px";
    caption.style.margin = "0";
    caption.style.background = "rgba(255,255,255,0.9)";
    caption.style.color = "#333";
    caption.style.fontWeight = "700";

    item.appendChild(img);
    item.appendChild(caption);
    container.appendChild(item);
  });
}
