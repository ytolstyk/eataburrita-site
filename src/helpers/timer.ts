const oneDayInMilliseconds = 86400000;

export function initialTime() {
  const today = Date.now();

  return today - (Math.random() * oneDayInMilliseconds * 14);
}

export const timeHelper = {
  count(stamp: number) {
    let elapsed = Date.now() - stamp;

    if (elapsed < 0) {
      elapsed = 0;
    }

    let tenthSeconds = Math.floor(elapsed % (1000) / 100)
    let seconds = timeHelper.alwaysTwoDigits(Math.floor((elapsed % (1000 * 60)) / 1000));
    let minutes = timeHelper.alwaysTwoDigits(Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)));
    let hours = timeHelper.alwaysTwoDigits(Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    const dayOrDays = days === 1 ? 'day' : 'days';

    return `${days} ${dayOrDays}, ${hours}:${minutes}:${seconds}.${tenthSeconds}`;
  },

  alwaysTwoDigits(num: number) {
    return num < 10 ? `0${num}` : String(num);
  },
};
