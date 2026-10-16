# Agent instructions

## Project

Personal site for Elizabeth Bell Books. Create React App, JavaScript, Yarn.

**Layout:**

- `src/components/` — one folder per section (About, Bookstore, Buttons, Contact, Gallery, HeadFoot, Home)
- `src/App.js` — root component
- `src/index.js` — entry
- `src/images/` — image assets
- `public/` — static files

## How to change code

Make the smallest change that fully solves the request. No drive-by refactors, renames, or reformatting. Prefer editing an existing component over adding a new file. Match the style of the file you're in.

Leave touched code compliant: fix a violation inside a hunk you are already editing, and leave the rest of the file alone.

Leave every change uncommitted when the work is done. Lauren reviews the diff locally first. Once she has reviewed and says to go ahead, commit, push, and deploy.

## Commit messages

Keep the commit messages very short and to the point.
Example:

```
feat: add new feature
```

```
fix: fix bug
```

```
chore: update dependencies
```
