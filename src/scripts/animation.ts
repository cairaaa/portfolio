const wrappers = document.querySelectorAll<HTMLElement>(".fade-wrapper");

wrappers.forEach((element: HTMLElement) => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          element.classList.remove("hidden");
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(element);
});