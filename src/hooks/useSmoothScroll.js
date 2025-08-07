import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    const smoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for navbar
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add scroll event listener for momentum scrolling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add momentum effect
          document.body.style.setProperty('--scroll-momentum', window.scrollY * 0.1);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.setProperty('--scroll-reveal', '1');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Add event listeners
    document.addEventListener('click', smoothScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', smoothScroll);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
};

export default useSmoothScroll;
