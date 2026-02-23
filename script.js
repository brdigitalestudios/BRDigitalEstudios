function sendMessage() {
    const input = document.getElementById("input");
    }
function sendInstagram() {
    const input = document.getElementById("input");
    
    if (input.value.trim() !== "") {
        let usuario = input.value.replace("@", "");
        window.open("https://instagram.com/brenogt1/" + usuario, "_blank");
        input.value = "";
    }
}
function sendhomepage() {
    const input = document.getElementById("input");
    if (input.value.trim() !== "") {
        let usuario = input.value.replace("@", "");
        window.open("https://brdigitalestudio.com/" + usuario, "_blank");
        input.value = "";
    }}

function mostrarBotao(elemento) {
    const botao = elemento.querySelector('.botao-comprar');
    // Se tem a classe 'escondido', remove (mostra). Se não tem, adiciona (esconde).
    botao.classList.toggle('escondido');
}
function mostrarBotaoPersonalizado(elemento) {
    const botao = elemento.querySelector('.botao-comprar');

    botao.classList.toggle('escondido');
}

function enviarEmail() {
    const email = "brdigitalestudios@gmail.com";
    window.location.href = `mailto:${email}?subject=Orçamento de Site&body=Olá Breno, gostaria de saber mais sobre seu trabalho.`;
}
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});