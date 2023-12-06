const fs = require('fs');
const content = fs.readFileSync('../Knowledge Base.json', { encoding : 'utf8' });
const profile = JSON.parse(content);

remove('settings.settings', key => key.startsWith('git.'));
remove('settings.settings', key => key === 'remote.SSH.remotePlatform');
remove('settings.settings', key => key.startsWith('javascript.updateImportsOnFileMove'));
delete profile.globalState;

fs.writeFileSync('../Knowledge Base.json', JSON.stringify(profile, null, 2), { encoding : 'utf8' });

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
