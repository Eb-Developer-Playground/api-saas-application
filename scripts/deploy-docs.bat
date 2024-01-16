@REM @echo off

@REM REM Step 1: Copy documentation to gh-pages folder
@REM xcopy /s /i /e documentation\* gh-pages\

@REM @REM REM Step 2: Create or switch to gh-pages branch
@REM @REM git checkout --orphan gh-pages

@REM @REM REM Step 3: Add files to the staging area
@REM @REM git --work-tree=gh-pages add --all

@REM @REM REM Step 4: Commit changes
@REM @REM git --work-tree=gh-pages commit -m "Deploy documentation to GitHub Pages"

@REM @REM REM Step 5: Force push to gh-pages branch
@REM @REM git push origin HEAD:gh-pages --force

@REM @REM echo Documentation deployed to GitHub Pages.