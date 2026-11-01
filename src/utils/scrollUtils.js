// -------------------------------------------------------------
// ⚙️ CINEMATIC SMOOTH SCROLL ENGINE
// -------------------------------------------------------------
export const SCROLL_DURATION = 1400;

let activeScrollRaf = null;

export function smoothScrollTo(targetPosition, duration = SCROLL_DURATION) {
  // 1. Instantly cancel any currently running scroll animation to prevent fighting
  if (activeScrollRaf) {
    cancelAnimationFrame(activeScrollRaf);
    activeScrollRaf = null;
  }

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetPosition - startPosition;

  // Don't scroll if already at target position
  if (Math.abs(distance) < 2) return;

  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Quintic Ease-Out: Instant start, fluid glide, feather-soft stop
    const easeOutQuint = 1 - Math.pow(1 - progress, 5);

    window.scrollTo(0, startPosition + distance * easeOutQuint);

    if (timeElapsed < duration) {
      activeScrollRaf = requestAnimationFrame(animation);
    } else {
      activeScrollRaf = null;
    }
  }

  activeScrollRaf = requestAnimationFrame(animation);
}