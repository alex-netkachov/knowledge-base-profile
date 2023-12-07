const fs = require('fs'),
      path = require('path');
const extendedProfileFielPath = path.join(path.dirname(__dirname), 'Knowledge Base.json');
const content = fs.readFileSync(extendedProfileFielPath, { encoding : 'utf8' });
const profile = JSON.parse(content);

remove('settings.settings', key => key === 'git.autofetch');
remove('settings.settings', key => key === 'remote.SSH.remotePlatform');
delete profile.globalState;

fs.writeFileSync(extendedProfileFielPath, JSON.stringify(profile, null, 2), { encoding : 'utf8' });

function remove(path, criteria) {
  const parts = path.split('.');
  let value = profile;
  for (const part of parts) {
    value = value[part];
    if (!value) return;
    if (value.__expanded) value = value.__expanded;
  }
  if ('object' !== typeof value) return;
  for (const key of Object.keys(value)) {
    if (criteria(key))
      delete value[key];
  }
}
