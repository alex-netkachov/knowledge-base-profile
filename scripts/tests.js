test();

function test() {
  const value = { test : JSON.stringify({ a : 1, b : JSON.stringify({ c : 2 }) }) };
  const expanded = expand(value);
  if (expanded.test.__expanded.a !== 1)
    throw new Error('test failed');
  const collapsed = collapse(expanded);
  if (JSON.stringify(value) !== JSON.stringify(collapsed))
    throw new Error(`test failed: ${JSON.stringify(value)} !== ${JSON.stringify(collapsed)}`);
}

function collapse(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(collapse);
  if (typeof value === 'object') {
    return value.__expanded
      ? JSON.stringify(collapse(value.__expanded))
      : Object.fromEntries(Object.entries(value).map(([key, val]) => [key, collapse(val)]));
  }
  return value;
}

function expand(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(expand);
  if ('object' === typeof value)
    return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, expand(val)]));
  if (('string' === typeof value) && /^[\[\{][\w\W]*[\]\}]$/.test(value))
    return { __expanded: expand(JSON.parse(value)) };
  return value;
}
