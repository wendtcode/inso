export default function inso(obj?: Record<string, unknown>, ...searches: Array<string>) {
  if (!obj || !searches.length) {
    return void 0;
  }

  let match: unknown;

  const objKeys = Object.keys(obj);
  const lowerObjKeys = objKeys.map(objKey => objKey.toLowerCase());
  const fuzzyKeyIndex = lowerObjKeys.findIndex(lowerObjKey =>
    searches.some(search => search.toLowerCase() === lowerObjKey)
  );

  const fuzzyKey = fuzzyKeyIndex > -1 && objKeys[fuzzyKeyIndex];
  if (fuzzyKey) {
    match = obj[fuzzyKey];
  }

  const exactKey = searches.filter(search => obj[search])[0];
  if (exactKey) {
    match = obj[exactKey];
  }

  return match;
}
