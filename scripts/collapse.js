const fs = require('fs');
const content = fs.readFileSync('../Knowledge Base.json', { encoding : 'utf8' });
const profile = collapse(JSON.parse(content));
fs.writeFileSync('../Knowledge Base.code-profile', JSON.stringify(profile, null, 2), { encoding : 'utf8' });

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
