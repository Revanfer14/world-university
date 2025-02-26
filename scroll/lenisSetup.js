import Lenis from "@studio-freight/lenis";

export function setupLenis() {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1, // Adjust for smoother scrolling
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
