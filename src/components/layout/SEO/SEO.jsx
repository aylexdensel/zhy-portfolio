import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function SEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    // Dynamic page title per route
    const defaultTitle = 'ZHY | Frontend Developer & UI/UX Designer';
    document.title = title ? `${title} | ZHY Portfolio` : defaultTitle;

    // Dynamic meta description
    const defaultDesc = 'Portfolio of ZHY — Frontend Developer & UI/UX Designer based in Sampaloc, Manila. Specialized in building thoughtful web experiences and full-stack web applications.';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDesc);
    }
  }, [location, title, description]);

  return null;
}