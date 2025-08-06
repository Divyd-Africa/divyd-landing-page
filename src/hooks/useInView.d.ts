import { type RefObject } from 'react';
export declare const useInView: <T extends HTMLElement>(options?: IntersectionObserverInit) => [RefObject<T | null>, boolean];
