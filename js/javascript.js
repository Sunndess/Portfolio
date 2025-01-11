document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');  // Añadir todas las secciones con la clase fade-in
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    fadeElements.forEach(element => observer.observe(element));  // Observar cada sección que tiene la clase fade-in
    // Detectar scroll
    window.addEventListener("scroll", handleScroll);

    // Verificar elementos visibles al cargar
    handleScroll();
});