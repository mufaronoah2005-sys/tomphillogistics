const fs = require('fs');
const http = require('isomorphic-git/http/node');
const git = require('isomorphic-git');

async function main() {
  const token = process.env.GITHUB_TOKEN || process.argv[2];
  if (!token) {
    console.error('ERROR: No GitHub Personal Access Token provided.');
    console.error('Usage: node push-to-github.cjs <GITHUB_PAT_TOKEN>');
    console.error('Or set environment variable: ="your_pat_token"');
    process.exit(1);
  }

  const dir = process.cwd();
  console.log('Pushing main branch to https://github.com/mufaronoah2005-sys/tomphillogistics.git ...');

  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true,
    onAuth: () => ({
      username: token,
      password: '',
    }),
  });

  console.log('✅ Push successful!');
  console.log(JSON.stringify(pushResult, null, 2));
}

main().catch(err => {
  console.error('❌ Push failed:', err.message);
  if (err.data) console.error(JSON.stringify(err.data, null, 2));
  process.exit(1);
});
