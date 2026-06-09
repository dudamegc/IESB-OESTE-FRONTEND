let timeoutId = -1;
let active = false;

self.onmessage = function (event) {
  const message = event.data;

  if (message === 'STOP') {
    active = false;
    if (timeoutId !== -1) {
      clearTimeout(timeoutId);
      timeoutId = -1;
    }
    return;
  }

  if (!message || message.type !== 'START') {
    return;
  }

  const { activeTask, secondsRemaining } = message;
  if (!activeTask || typeof secondsRemaining !== 'number') {
    return;
  }

  active = true;
  if (timeoutId !== -1) {
    clearTimeout(timeoutId);
    timeoutId = -1;
  }

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  function tick() {
    if (!active) return;

    const now = Date.now();
    const countDownSeconds = Math.max(0, Math.ceil((endDate - now) / 1000));

    self.postMessage(countDownSeconds);

    if (countDownSeconds <= 0) {
      active = false;
      timeoutId = -1;
      return;
    }

    timeoutId = setTimeout(tick, 1000);
  }

  tick();
};
