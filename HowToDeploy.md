# How to Deploy

For this application we have 2 environments

- [production](https://richardhpa.github.io/Battleships/) which is hosted via github pages
- [staging](https://dazzling-lollipop-428ab6.netlify.app/) which is hosted by [Netlify](https://www.netlify.com/)

## Deploying to Production

The production environment is attached to the `main` branch on github. Any merges into master will result in a deploy being triggered to production.

All merges must be done via a Pull Request and have any comments or issues resolved.

### Steps

- Create a new branch off main (you may need to pull first to make sure your main is up to date with remote). Naming the branch matter but it should ideally be related to the story you are working on.
- Once you have completed your story, (or you want a review) push your changes to your remote branch and create a Pull Request into `main`.
- Wait for a reviewer to have looked over your code.
- Once your PR has been reviewed either resolve the changes requested, or complete your PR my merging it into `main`

- After completing your PR you should then merge `main` into `dev` (our staging branch, read below) and push so that our staging environment is up to date with `main`.

Try keep your branch as up to date with `main` as possible by doing regular merges of `main` into your own branch. This will help with any possible conflicts that may arise. Remember any conflicts coming from merging `main` into your own branch is code that is currently in production. So make sure that you are double checking the code before resolving the conflicts as it might break existing functionality.

## Deploying to Staging

The Staging environment is to test our code in a environment as close to production as possible. Occasionally things can behave differently from our local machine and a live environment.

We want to always check our code on staging before we merge into `main` as this _should_ have other team members code on their too so we can make sure we aren't working on conflicting code and can resolve any issues before going into production.

Just like production, staging automatically gets deployed when pushing to a specific branch. This branch is called `dev`.
You **do not** need to make a Pull Request into `dev`. Just checkout the `dev` branch, merge your code into it and push.

### Steps

Before you deploy to staging you should have a PR to `main` up and attach the label `on staging` to it. This is just incase something goes wrong with staging and we have to reset it and the admins know what has to go onto staging.

- check out the dev branch by `git checkout dev`. (once again you might want to do a pull `main` to make sure its up to date).
- merge your branch into `dev`
- resolve any conflicts
- push `dev` to origin

It is recommenced to then switch back to `main` or your own branch and then delete your local `dev` branch. This is so you can always make sure your `dev` branch is up to date as you will be checking it out again before your next staging push.

Other than resolving merge conflicts you **shouldn't** be working directly on `dev`. Always work on your own branch and merge it in.
