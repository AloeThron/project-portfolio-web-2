import React, { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          Number(((currentProgress / scrollHeight) * 100).toFixed(2))
        );
      }
    }

    // event
    window.addEventListener("scroll", updateScrollCompletion);

    // clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  
  return completion;
}
