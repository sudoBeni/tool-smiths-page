export const hapticTick = (durationMs = 12) => {
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(durationMs);
    }
  } catch (err) {
    // noop
  }
};


