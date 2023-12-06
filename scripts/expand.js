const fs = require('fs');
const content = fs.readFileSync('../Knowledge Base.code-profile', { encoding : 'utf8' });
const profile = expand(JSON.parse(content));
fs.writeFileSync('../Knowledge Base.json', JSON.stringify(profile, null, 2), { encoding : 'utf8' });

function expand(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(expand);
  if ('object' === typeof value)
    return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, expand(val)]));
  if (('string' === typeof value) && /^[\[\{][\w\W]*[\]\}]$/.test(value))
    return { __expanded: expand(JSON.parse(value)) };
  return value;
}
