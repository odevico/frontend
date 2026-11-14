import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: readonly string[], enabled: boolean) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const visible = new Set<string>();
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActiveId(sectionIds.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return enabled ? activeId : null;
};
