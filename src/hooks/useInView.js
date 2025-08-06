import { useEffect, useRef, useState } from 'react';
export const useInView = (options = {}) => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                // observer.disconnect(); // remove this if you want it to re-trigger
            }
        }, { threshold: 0.1, ...options });
        if (ref.current)
            observer.observe(ref.current);
        return () => {
            if (ref.current)
                observer.unobserve(ref.current);
        };
    }, []);
    return [ref, isIntersecting];
};
