export function getDateTime(): string {

   const now = new Date();

  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0].replace(/:/g, '-');

  return `${date}_${time}`;
}