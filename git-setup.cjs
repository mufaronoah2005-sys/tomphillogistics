const fs = require('fs');
const path = require('path');
const git = require('isomorphic-git');

async function main() {
  const dir = process.cwd();
  console.log('Initializing git in:', dir);
  await git.init({ fs, dir, defaultBranch: 'main' });
  console.log('Git repo initialized.');

  // List all files recursively
  function getFiles(currentDir, fileList = []) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
      if (file === 'node_modules' || file === 'dist' || file === '.git' || file === '.system_generated') continue;
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        getFiles(filePath, fileList);
      } else {
        const relPath = path.relative(dir, filePath).replace(/\\/g, '/');
        fileList.push(relPath);
      }
    }
    return fileList;
  }

  const filesToAdd = getFiles(dir);
  console.log('Files to add:', filesToAdd.length);

  for (const filepath of filesToAdd) {
    await git.add({ fs, dir, filepath });
  }
  console.log('All files staged.');

  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'mufaronoah2005-sys',
      email: 'mufaronoah2005@users.noreply.github.com',
    },
    message: 'Initial commit: Complete Tomphil Logistics corporate website with multi-page routing, Zimbabwe duty calculator, and natural vehicle motion hero',
  });
  console.log('Committed:', sha);

  // Set remote
  const remotes = await git.listRemotes({ fs, dir });
  const hasOrigin = remotes.some(r => r.remote === 'origin');
  if (hasOrigin) {
    await git.deleteRemote({ fs, dir, remote: 'origin' });
  }
  await git.addRemote({
    fs,
    dir,
    remote: 'origin',
    url: 'https://github.com/mufaronoah2005-sys/tomphillogistics.git'
  });
  console.log('Remote origin set to https://github.com/mufaronoah2005-sys/tomphillogistics.git');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
