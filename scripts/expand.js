const fs = require('fs'),
      path = require('path');
const profileFielPath = path.join(path.dirname(__dirname), 'Knowledge Base.code-profile');
const extendedProfileFielPath = path.join(path.dirname(__dirname), 'Knowledge Base.json');
const content = fs.readFileSync(profileFielPath, { encoding : 'utf8' });
const profile = expand(JSON.parse(content));
fs.writeFileSync(extendedProfileFielPath, JSON.stringify(profile, null, 2), { encoding : 'utf8' });

function expand(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(expand);
  if ('object' === typeof value)
    return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, expand(val)]));
  if (('string' === typeof value) && /^[\[\{][\w\W]*[\]\}]$/.test(value))
    return { __expanded: expand(JSON.parse(value)) };
  return value;
}
