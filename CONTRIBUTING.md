# Submitting an issue
If you have any problem or idea, please open an issue.
Use Feature Request template to submit an idea for new feature and use Bug Report template for bug reports (some functionality doesn't work as expected).
If your issue is not related either to a bug report or a feature request, open a regular issue.

# Opening the pull request (PR)
If you want to contribute, feel free to fork this repository, create a new branch, make your changes and open the PR.
Please use the template for your PR. If you're adding a new feature, make sure you have added tests and docs for it.

## Note:
1. 📦 We use _[yarn](https://yarnpkg.com/en/)_ rather then _[npm](https://www.npmjs.com/)_ as a package managing. Please **do not** use `npm` as it may cause unwanted changes.
2. 📝 We use the [conventional commit message](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional) format and enforce it using [commitlint](https://marionebl.github.io/commitlint/#/). We recommend utilizing [commitizen](http://commitizen.github.io/cz-cli/) through the `$ yarn commit` or `$ yarn commit -S` command.
3. ✅ We use [Jest](https://jestjs.io/) for testing. Don't forget to add tests for new features and make sure that all tests are passing.
4. 👕 We lint TypeScript code using ESLint. You can lint your code with `$ yarn test` command and automatically fix any issues using `$ yarn fix`.
5. 📖 Don't forget to add or update documentation in `docs/` when you add or change a feature. We use [VuePress](https://vuepress.vuejs.org/) to automatically generate web-based documentation from this.
