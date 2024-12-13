type Value = {
  publishedAt: string;
};

export default function sortByPublishedDate(a: Value, b: Value) {
  return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
}
