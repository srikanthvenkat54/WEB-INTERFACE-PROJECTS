const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projects = [
  { id: 'pro-03', name: 'pro 3/project 03' },
  { id: 'pro-04', name: 'pro 4/project 04' },
  { id: 'pro-05', name: 'pro 5/Project 05' },
  { id: 'pro-06', name: 'pro 6/Project 06' },
  { id: 'pro-07', name: 'pro 7/project 07' },
  { id: 'pro-08', name: 'pro 8/project 08' },
  { id: 'pro-09', name: 'pro 9/project 09' },
  { id: 'pro-10', name: 'pro 10/project 10' },
];

const rootDir = __dirname;
console.log('Starting build of React projects...');

for (const proj of projects) {
  const projDir = path.join(rootDir, proj.name);
  console.log(`\n========================================`);
  console.log(`Building ${proj.id}: ${proj.name}`);
  console.log(`Directory: ${projDir}`);
  
  const viteBin = path.join(projDir, 'node_modules', 'vite', 'bin', 'vite.js');
  if (!fs.existsSync(viteBin)) {
    console.error(`ERROR: vite binary not found at ${viteBin}`);
    continue;
  }
  
  try {
    const output = execSync(`node "${viteBin}" build`, {
      cwd: projDir,
      stdio: 'pipe',
      encoding: 'utf-8',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    console.log(`✓ Successfully built ${proj.id}`);
    console.log(output);
  } catch (err) {
    console.error(`✗ Error building ${proj.id}:`, err.message);
    if (err.stdout) console.log('stdout:', err.stdout);
    if (err.stderr) console.error('stderr:', err.stderr);
  }
}

console.log('\nAll React projects build process completed!');
