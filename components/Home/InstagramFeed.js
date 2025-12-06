import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const InstagramFeed = () => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView && !loaded) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [inView, loaded]);

  return (
    <div ref={ref} className="elfsight-app-9ac39fd0-32ea-40e3-8d12-61179548167d" data-elfsight-app-lazy></div>
  );
};

export default InstagramFeed;
