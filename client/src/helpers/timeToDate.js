let options = { weekday: 'short' , year: 'numeric', month: 'short', day: 'numeric' };
// console.log(date.toLocaleString('de-DE', options));
export const timeToDate = (date) => new Date(Number(date)).toLocaleString('en-US', options)