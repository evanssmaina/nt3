import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set the initial value
    setMatches(media.matches);
    
    // Create event listener
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    
    // Add event listener
    media.addEventListener('change', listener);
    
    // Clean up
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
