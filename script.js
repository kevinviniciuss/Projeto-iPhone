const botoes = document.querySelectorAll(".botaoInicial");
const lista = document.getElementById("lista");
const cards = document.querySelectorAll(".card");

botoes.forEach(botao => {
    botao.addEventListener("click", function(){
        const texto = botao.innerText;
        const card = document.getElementById(texto);
        if (card){
            lista.innerHTML = "";
            const clone = card.cloneNode(true);
            clone.style.display = "block" 
            lista.appendChild(clone);
        }
    })
})

const telas = document.querySelectorAll(".tela");

telas.forEach(tela => {
    const slides = tela.querySelector(".slides");
    const dots = tela.querySelectorAll(".dot");
    const slideWidth = tela.querySelector(".carrossel").offsetWidth;

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            slides.style.transform = `translateX(-${index * slideWidth}px)`;

            dots.forEach(d => d.classList.remove("active"));
            dot.classList.add("active");
        });
    });
});