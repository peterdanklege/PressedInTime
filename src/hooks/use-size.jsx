import { useLayoutEffect, useState } from 'react';

export function useSize(ref) {
  const [size, setSize] = useState(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    setSize({
      width: element.getBoundingClientRect().width,
      height: element.getBoundingClientRect().height,
    });

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
