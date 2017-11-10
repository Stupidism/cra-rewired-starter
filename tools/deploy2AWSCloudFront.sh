#!/bin/bash
# Push only if it's not a pull request
if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  # Push only if we're testing the master branch
  # Only the release version of our app need building image
  if [ "$TRAVIS_BRANCH" == "$DEPLOY_BRANCH" ]; then
    npm run deploy:aws
  else
    echo "Skipping deploy because branch is not 'develop'"
  fi
else
  echo "Skipping deploy because it's a pull request"
fi
~
