document.addEventListener("DOMContentLoaded", () => {
    // Animação de surgimento suave ao rolar a página
    const scrollElements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 }); // Ativa quando 10% do elemento está visível

    scrollElements.forEach((el) => observer.observe(el));

    // Remova a classe 'visible' de todos os elementos inicialmente
    scrollElements.forEach((el) => el.classList.remove("visible"));

    // Animação de sumir e aparecer imagens
    const images = document.querySelectorAll(".imgRedes, .imgRedes2, .imgRedes3");
    let toggle = true;

    setInterval(() => {
        images.forEach((img) => {
            img.classList.toggle("fade-out", toggle);
            img.classList.toggle("fade-in", !toggle);
        });
        toggle = !toggle;
    }, 3000); // Alterna a cada 3 segundos

    // Comportamento de rolagem suave para âncoras
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
