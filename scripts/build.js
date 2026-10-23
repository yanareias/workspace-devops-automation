const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public');
const outputFile = path.join(outputDir, 'build-info.json');

fs.mkdirSync(outputDir, { recursive: true });

const buildInfo = {
  name: 'workspace-devops-automation',
  version: require('../package.json').version,
  builtAt: new Date().toISOString()
};

fs.writeFileSync(outputFile, JSON.stringify(buildInfo, null, 2));

console.log('Build concluído: public/build-info.json');