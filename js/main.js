document.addEventListener('DOMContentLoaded', function() {
    // Función para el menú móvil
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if(mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('mobile-menu-active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Cerrar menú móvil cuando se hace clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if(navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('mobile-menu-active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Efecto de scroll para el header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if(window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90, // Ajuste para compensar el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación del slideshow
    const slideshow = document.querySelector('.slideshow');
    if(slideshow) {
        let slides = document.querySelectorAll('.slides img');
        let currentSlide = 0;
        
        // Si quieres controlar manualmente el slideshow en lugar de usar CSS
        /*
        function nextSlide() {
            slides[currentSlide].style.opacity = '0';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = '1';
        }
        
        setInterval(nextSlide, 5000);
        */
    }
    
    // Animación de aparición al hacer scroll
    const animateOnScroll = function() {
        const elementsToAnimate = document.querySelectorAll('.destination-card, .benefit-item, .testimonial');
        
        elementsToAnimate.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Aplicar estilos iniciales para la animación
    const elementsToAnimate = document.querySelectorAll('.destination-card, .benefit-item, .testimonial');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Ejecutar la animación al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});