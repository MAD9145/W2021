(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{220:function(e,t,i){"use strict";i.r(t);var r=i(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("This guide is for anyone in the organization looking to improve developer workflow and productivity, as well as code quality and security.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("The use of a revision control system like Git is an important skill that should be sorted out before the start of the project. This is a major pain point in graduate projects. Try to follow the guidelines:")]),e._v(" "),i("ul",[i("li",[e._v("Create good commits:")]),e._v(" "),i("li",[e._v("Don’t use git as a backup tool")]),e._v(" "),i("li",[e._v("Don’t combine unrelated code changes in a single commit.")]),e._v(" "),i("li",[e._v("Keep commits small")]),e._v(" "),i("li",[e._v("Each commit should contain only logically related changes")]),e._v(" "),i("li",[e._v("Use branches for developing a new feature")]),e._v(" "),i("li",[e._v("Dont mix different features in a single branch")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://chris.beams.io/posts/git-commit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Follow commit message guidelines"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("Write commit messages that make sense when reading commit logs")])]),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("Regardless if you use Gitflow or any other git branching model, it is always a good idea to turn on git branch protection to prevent direct commits and ensure your main branch code is deployable at all times. All commits should be pushed to master through pull requests.")]),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("Sometimes you commit code using the wrong email address, and as a result GitHub shows that your commit has an unrecognized author. Having commits with unrecognized authors makes it more difficult to track who wrote which part of the code.")]),e._v(" "),i("p",[e._v("Ensure your Git client is configured with the correct email address and linked to your GitHub user. Check your pull requests during code reviews for unrecognized commits.")]),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("Secrets, or secret keys or secret credentials, include things like account passwords, API keys, private tokens, and SSH keys. You should not check them into your source code.")]),e._v(" "),i("p",[e._v("Instead, we recommend you inject secrets as environment variables or config file, and later add them in your .gitignore file to hide the credentials. "),i("a",{attrs:{href:"https://gist.github.com/derzorngottes/3b57edc1f996dddcab25",target:"_blank",rel:"noopener noreferrer"}},[e._v("Look here for more information"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("Pushing dependencies into your remote origin will increase repository size. Remove any projects dependencies included in your repositories and let your package manager download them in each build.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),i("p",[e._v("Adopting a consistent branch naming convention is essential to keeping your repository organized as your team grows in size. An efficient naming convention will allow you to keep merge conflicts at a minimum while ensuring your developers are as productive as possible.")]),e._v(" "),i("p",[e._v("While there are many branch naming conventions, one of the most popular ones is known as "),i("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git flow"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(12),e._v(" "),i("p",[e._v("Every time one branch is merged into another, the branch that is merged in becomes stale, assuming further work isn’t being done in it.")]),e._v(" "),i("p",[e._v("While it may seem useful or even necessary to keep the extra data on hand, the reality is that stale branches are abandoned 98% of the time and simply clutter up your project.")]),e._v(" "),i("p",[e._v("Even if you delete a branch when you shouldn’t have, you can restore it - and if you don’t trust GitHub’s restore feature,  chances are it’s safe on somebody’s computer, thanks to the magic of distributed versioning.")]),e._v(" "),i("p",[e._v("Don’t be a branch hoarder: delete your stale branches.")]),e._v(" "),e._m(13),e._v(" "),i("p",[e._v("Developers spend a lot of time working with git and GitHub, so investing in improving your GitHub practices makes a lot of sense.  Implementing best practices in this guide could help the team improve developer productivity and reduce security risks.")]),e._v(" "),e._m(14),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://acompiler.com/git-best-practices/#tve-jump-1773889db88",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Best Practices For Small Teams"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://acompiler.com/git-best-practices/#tve-jump-17738882369",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Commit Best Practices"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://acompiler.com/git-best-practices/#tve-jump-177388926bc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Workflow Best Practices"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://acompiler.com/git-best-practices/#tve-jump-17738897abf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Pull Request Best Practices"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://acompiler.com/git-best-practices/#tve-jump-177388a567a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Branches Best Practices"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://acompiler.com/git-best-practices/#tve-jump-177388ab463",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Branch Naming Convention"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://acompiler.com/wp-content/uploads/2020/07/AFTER-technique-Git-Best-Practices-721x1024.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("AFTER Technique Image"),i("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"github-best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-best-practices","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub Best Practices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("Reading time 3 minutes. 😁")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"code-comments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-comments","aria-hidden":"true"}},[this._v("#")]),this._v(" Code comments")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Code must be commented")]),this._v(" "),t("li",[this._v("Explain functions of logical blocks of code")]),this._v(" "),t("li",[this._v("Add links to code snippets. Eg: Stack overflow links, tech blog pages")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-revision-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-revision-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Using revision control")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"don’t-git-push-straight-to-master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#don’t-git-push-straight-to-master","aria-hidden":"true"}},[this._v("#")]),this._v(" Don’t git push straight to master")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"don’t-commit-code-as-an-unrecognized-author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#don’t-commit-code-as-an-unrecognized-author","aria-hidden":"true"}},[this._v("#")]),this._v(" Don’t commit code as an unrecognized author")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"don’t-leak-secrets-into-source-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#don’t-leak-secrets-into-source-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Don’t leak secrets into source control")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"don’t-commit-dependencies-into-source-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#don’t-commit-dependencies-into-source-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Don’t commit dependencies into source control")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-a-meaningful-git-ignore-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-meaningful-git-ignore-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a meaningful git ignore file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A .gitignore file is a must in each repository to ignore predefined files and directories. It will help you to prevent secret keys, dependencies and many other possible discrepancies in your code. You can choose a relevant template from "),t("a",{attrs:{href:"Gitignore.io"}},[this._v("Gitignore.io")]),this._v(" to get started quickly.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use-a-branch-naming-convention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-a-branch-naming-convention","aria-hidden":"true"}},[this._v("#")]),this._v(" Use a branch naming convention")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"delete-stale-branches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-stale-branches","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete stale branches")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"final-thoughts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final-thoughts","aria-hidden":"true"}},[this._v("#")]),this._v(" Final Thoughts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references-and-more-learning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references-and-more-learning","aria-hidden":"true"}},[this._v("#")]),this._v(" References and More learning:")])}],!1,null,null,null);n.options.__file="github.md";t.default=n.exports}}]);