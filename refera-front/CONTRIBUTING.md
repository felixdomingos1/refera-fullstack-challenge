## Contributing

When contributing to this repository, please first make sure there is an issue in Notion.

## Branch Format

When creating a branch you must define the name of the branch following the pattern below.

- feature/: Feature branches are used for specific feature work or improvements. They branch from, and merge back into, the `trunk/xxx` branch, by means of pull requests.
- hotfix/: Hotfix branches are used to quickly fix the `master` branch without interrupting changes in the `staging` branch.
- bugfix/: Bugfix branches are typically used to fix release branches.

The branch name needs to begin with the prefix described above and be followed by the Notion issue key and a short description of the task. Example: `feature/BD-12-add-new-user`.

## Commit Message Format

We're using the [Conventional Commits](https://www.conventionalcommits.org/) for the commits message specification. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]
```

### Body

The subject contains a succinct description of the change:

use the imperative, present tense: "change" not "changed" nor "changes"
don't capitalize the first letter
no dot (.) at the end

### Type

Must be one of the following:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

Example:

```
feat: allow provided config object to extend other configs
```

## Getting Started

- Create a local branch from where you want to base your work.
- Make commits of logical units.
- Check for unnecessary whitespace with git diff --check before committing.
- Make sure you have added the necessary tests for your changes.
- Run all the tests to assure nothing else was accidentally broken.
- Ensure that documentation has been updated if necessary.

## Submitting a Pull Request (PR)

- Push your changes to remote repository.
- Submit a Pull Request.
- Assigne some reviewer (at least one) to the Pull Request.
- Update your NOTION issue to mark that you have submitted code and it's ready to be reviewed (Status: Revisão).
- At this moment you are waiting somebody review the Pull Request. The reviewer may suggest some changes or improvements or alternatives.

## Merge Format

- The merge message must follow the **Commit Message Format** and provide the NOTION issue as scope:

  ```
  feat(NOTION-123): allow provided config object to extend other configs

  * COMMIT A
  * COMMIT B
  * COMMIT C
  ```
