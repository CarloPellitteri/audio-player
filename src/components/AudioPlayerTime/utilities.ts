export const addZeros = (num: number) => {
  return `${num}`.padStart(2, '0');
};

export const getMinutesFromSeconds = (time: number) => {
  let minutes = Math.trunc(time / 60);
  let seconds = Math.trunc(time - 60 * minutes);

  return `${addZeros(minutes)}:${addZeros(seconds)}`;
};
