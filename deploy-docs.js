const { execSync } = require('child_process');

// Step 1: Copy documentation to gh-pages folder
execSync('cp -r documentation/* gh-pages', { stdio: 'inherit' });

// Step 2: Create or switch to gh-pages branch
execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });

// Step 3: Add files to the staging area
execSync('git --work-tree=gh-pages add --all', { stdio: 'inherit' });

// Step 4: Commit changes
execSync('git --work-tree=gh-pages commit -m "Deploy documentation to GitHub Pages"', { stdio: 'inherit' });

// Step 5: Force push to gh-pages branch
execSync('git push origin HEAD:gh-pages --force', { stdio: 'inherit' });

console.log('Documentation deployed to GitHub Pages.');