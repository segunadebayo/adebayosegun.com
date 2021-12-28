export default function formatDate(dateString: string) {
  const date = new Date(dateString);
  const localeString = date.toLocaleString('default', { month: 'long' });
  return {
    iso: date.toISOString(),
    pretty: `${localeString} ${date.getDate()}, ${date.getFullYear()}`,
  };
}
