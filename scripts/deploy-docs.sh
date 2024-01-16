#!/bin/bash

# Step 1: Copy documentation to gh-pages folder
cp -r documentation/* gh-pages

# # Step 2: Create or switch to gh-pages branch
# git checkout --orphan gh-pages

# # Step 3: Add files to the staging area
# git --work-tree=gh-pages add --all

# # Step 4: Commit changes
# git --work-tree=gh-pages commit -m "Deploy documentation to GitHub Pages"

# # Step 5: Force push to gh-pages branch
# git push origin HEAD:gh-pages --force

# echo "Documentation deployed to GitHub Pages."
