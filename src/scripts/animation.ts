const wrappers = document.querySelectorAll<HTMLElement>(".fade-wrapper");

wrappers.forEach((element: HTMLElement) => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          element.classList.remove("hidden");
        } else {
          element.classList.remove("visible");
          element.classList.add("hidden");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
});