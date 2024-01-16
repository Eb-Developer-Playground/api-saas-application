@echo off

REM Step 1: Save the current state of main branch to a temporary branch
git checkout -b temp-main
git add -A
git commit -m "Save current state of main branch"

REM Step 2: Copy documentation to gh-pages folder
xcopy /s /i /e documentation\* gh-pages\

REM Check if gh-pages branch exists
git show-ref --verify --quiet refs/heads/gh-pages

IF %ERRORLEVEL% NEQ 0 (
  REM Step 3: Create gh-pages branch if it doesn't exist
  git checkout -b gh-pages
) ELSE (
  REM Step 3: Switch to existing gh-pages branch with allow-unrelated-histories
  git checkout --allow-unrelated-histories gh-pages
  git pull origin gh-pages
)

REM Step 4: Add files to the staging area
git --work-tree=gh-pages add --all

REM Step 5: Commit changes
git --work-tree=gh-pages commit -m "Deploy documentation to GitHub Pages"

REM Step 6: Force push to gh-pages branch
git push origin HEAD:gh-pages --force

REM Step 7: Switch back to the temporary main branch
git checkout temp-main

REM Step 8: Restore the main branch to its original state
git reset --hard HEAD

REM Step 9: Delete the temporary main branch
git branch -D temp-main

echo Documentation deployed to GitHub Pages without affecting main branch.
