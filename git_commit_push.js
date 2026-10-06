const { execSync } = require('child_process');

try {
  console.log('Staging files...');
  execSync('git add .', { stdio: 'inherit' });

  console.log('Committing changes...');
  execSync('git commit -m "feat: deploy all 10 HTML and React projects in single index page suite with live interactive studio and github pages"', { stdio: 'inherit' });

  console.log('Pushing to GitHub (origin main)...');
  const pushOutput = execSync('git push origin main', { stdio: 'pipe', encoding: 'utf-8' });
  console.log('Push successful!');
  console.log(pushOutput);
} catch (err) {
  console.error('Git action message:', err.message);
  if (err.stdout) console.log('stdout:', err.stdout.toString());
  if (err.stderr) console.error('stderr:', err.stderr.toString());
}
