const fs = require('fs'),
      path = require('path');
const extendedProfileFielPath = path.join(path.dirname(__dirname), 'Knowledge Base.json');
const profileFielPath = path.join(path.dirname(__dirname), 'Knowledge Base.code-profile');
const content = fs.readFileSync(extendedProfileFielPath, { encoding : 'utf8' });
const profile = collapse(JSON.parse(content));

// reformat settings because they are available for review at the Profile creation dialog
const obj = JSON.parse(profile.settings);
obj.settings = JSON.stringify(JSON.parse(obj.settings), null, 2);
profile.settings = JSON.stringify(obj);

fs.writeFileSync(profileFielPath, JSON.stringify(profile, null, 2), { encoding : 'utf8' });

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
