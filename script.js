function abrirCarta() {
  document.getElementById("inicio").style.display = "none";

  let animacao = document.getElementById("animacao");
  animacao.classList.remove("hidden");

  setTimeout(() => {
    animacao.style.display = "none";

    let conteudo = document.getElementById("conteudo");
    conteudo.classList.remove("hidden");

    let musica = document.getElementById("musica");
    musica.play();
  }, 2000); // ajusta pro tempo do gif da carta abrindo
}
