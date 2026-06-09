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
window.addEventListener("DOMContentLoaded", function(){
  exibirMensagem(
    "Bem-vindo ao Projeto Energia Solar no Agronegócio!"
  );
  carregarGaleria();
});

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
    url: "https://oregional.net/wp-content/uploads/2024/08/unnamed-1024x682.webp",
    titulo: "Agronegócio Sustentável"
  },

  {
    url: "https://aegro.com.br/images/blog/geradas/proirriga-como-funciona-o-financiamento-para-irrigacao-no-plano-safra.webp",
    titulo: "Produção Agrícola Moderna"
  },

  {
    url: "https://www.pantanalnews.com.br/wp-content/uploads/2023/03/shutterstock_1450758134.jpg",
    titulo: "Tecnologia Aplicada ao Campo"
  },

  {
    url: "https://mercadoeconsumo.com.br/wp-content/uploads/2023/05/ENERGIA_LIMPA_SHUTTER.jpg",
    titulo: "Energia Limpa e Renovável"
  },

  {
    url: "https://sna.agr.br/wp-content/uploads/2020/08/sustentavel-1.jpg",
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
