export function getTimeString(timestamp: number) {
  const min = Math.floor(timestamp / 60);
  const sec = timestamp % 60;

  return `${min}:${sec}`;
}
