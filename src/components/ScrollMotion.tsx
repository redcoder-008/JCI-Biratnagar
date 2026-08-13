import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollMotion = () => {
  const location = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const selectors = [
      'header',
      'main > div > section:not(.hero-shell)',
      'main > div > div',
      'main > article',
      'main .card',
      'footer',
    ];
    const targets = [...new Set(
      selectors.flatMap((selector) => [...document.querySelectorAll<HTMLElement>(selector)])
        .filter((element) => !element.closest('.hero-shell')),
    )];

    targets.forEach((element, index) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--motion-delay', `${Math.min((index % 4) * 80, 240)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -44px' },
    );

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default ScrollMotion;
