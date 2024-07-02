'use client';

import { useEffect } from 'react';

const LoadUmamiScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cloud.umami.is/script.js';
    script.defer = true;
    script.dataset.websiteId = '37464e74-715f-4803-a106-582d95f4710b';
    document.body.appendChild(script);
  }, []);

  return null;
};

export default LoadUmamiScript;
