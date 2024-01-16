@echo off

REM Step 1: Copy documentation to gh-pages folder
xcopy /s /i /e documentation\* gh-pages\

@REM REM Step 2: Create or switch to gh-pages branch
@REM git checkout --orphan gh-pages

@REM REM Step 3: Add files to the staging area
@REM git --work-tree=gh-pages add --all

@REM REM Step 4: Commit changes
@REM git --work-tree=gh-pages commit -m "Deploy documentation to GitHub Pages"

@REM REM Step 5: Force push to gh-pages branch
@REM git push origin HEAD:gh-pages --force

@REM echo Documentation deployed to GitHub Pages.