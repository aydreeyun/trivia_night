export const shuffle = arr => {
  for (let i = 0; i < arr.length; i++) {
    const randIdx = Math.floor(Math.random() * arr.length);
    [arr[i], arr[randIdx]] = [arr[randIdx], arr[i]];
  }
};