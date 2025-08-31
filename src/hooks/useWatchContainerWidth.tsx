import { useEffect, useRef, useState } from "react";

export default function useWatchContainerWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const updateWidth = () => {
      setContainerWidth(ref.current!.offsetWidth);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { containerWidth, ref };
}
