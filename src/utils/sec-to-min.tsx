export function getTimeString(timestamp: number) {
  const zeroPad = (num:number, places:number) => String(num).padStart(places, '0')

  const min = zeroPad(Math.floor(timestamp / 60), 2);
  const sec = zeroPad(timestamp % 60, 2);


  return `${min}:${sec}`;
}
