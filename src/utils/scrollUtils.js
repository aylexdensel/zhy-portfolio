// -------------------------------------------------------------
// ⚙️ CINEMATIC SLOW SCROLL DURATION (in milliseconds)
// 1800 = 1.8 seconds (Ultra-smooth, slow cinematic glide)
// -------------------------------------------------------------
export const SCROLL_DURATION = 1800;

export function smoothScrollTo(targetPosition, duration = SCROLL_DURATION) {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetPosition - startPosition;

  // Don't scroll if already at target
  if (Math.abs(distance) < 5) return;

  let startTime = null;

  // Bypasses browser CSS scroll-behavior queueing for 0ms instant response
  const html = document.documentElement;
  const originalScrollBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Quintic Ease-Out: Starts instantly, then coast-glides into a feather-soft stop
    const easeOutQuint = 1 - Math.pow(1 - progress, 5);

    window.scrollTo(0, startPosition + distance * easeOutQuint);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Restore original CSS scroll behavior when finished
      html.style.scrollBehavior = originalScrollBehavior;
    }
  }

  requestAnimationFrame(animation);
}