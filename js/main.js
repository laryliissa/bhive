document.addEventListener('DOMContentLoaded', function () {

    // ========================================================================= //
    //  Mobile Menu Toggle
    // ========================================================================= //
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // A função abaixo foi removida pois o envio do formulário será gerenciado pelo Formspree.
    // window.handleSubmit = function(event) {
    //     event.preventDefault();
    //
    //     const formData = new FormData(event.target);
    //     const data = Object.fromEntries(formData.entries());
    //     console.log('Form Data:', data);
    //
    //     alert('Obrigada pela sua mensagem! Entraremos em contato em breve. 💜');
    //
    //     event.target.reset();
    // }

    // ========================================================================= //
    //  Add scroll effect to header
    // ========================================================================= //
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });

    // ========================================================================= //
    //  Animate elements on scroll
    // ========================================================================= //
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once visible
            }
        });
    }, observerOptions);

    // Observe all elements with the .scroll-reveal class
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
});