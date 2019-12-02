# [3.2.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v3.1.0...v3.2.0) (2019-12-02)


### Features

* **goog:** enable goog.module rules ([b8e856b](https://github.com/ngageoint/eslint-config-opensphere/commit/b8e856bfbd3b9df0f3d19fb19f9d9ffead9e465d))

# [3.1.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v3.0.0...v3.1.0) (2019-10-04)


### Features

* allow es6 syntax ([cbd14c3](https://github.com/ngageoint/eslint-config-opensphere/commit/cbd14c3))

# [3.0.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v2.0.1...v3.0.0) (2019-07-08)


### Bug Fixes

* **indent:** Restore function param indent behavior. ([10cf3aa](https://github.com/ngageoint/eslint-config-opensphere/commit/10cf3aa))
* **jsdoc:** Prefer const over constant. ([2adfabd](https://github.com/ngageoint/eslint-config-opensphere/commit/2adfabd))


### Features

* **jsdoc:** Don't require a newline after the description. ([e05e3ee](https://github.com/ngageoint/eslint-config-opensphere/commit/e05e3ee))


### BREAKING CHANGES

* **indent:** Function parameters previously used the default of 1 indentation level, and now require 2. This was the pre-ESLint 6 behavior and should only require changes for projects that have already upgraded.

## [2.0.1](https://github.com/ngageoint/eslint-config-opensphere/compare/v2.0.0...v2.0.1) (2019-07-08)


### Bug Fixes

* **deps:** Upgrade peer dependencies ([ca0900b](https://github.com/ngageoint/eslint-config-opensphere/commit/ca0900b))

# [2.0.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v1.1.3...v2.0.0) (2019-07-05)


### Features

* Upgrade of eslint to 6.0.0 ([fb5688a](https://github.com/ngageoint/eslint-config-opensphere/commit/fb5688a))


### BREAKING CHANGES

* Changes to eslint javadoc checks may cause `yarn lint` errors.

## [1.1.3](https://github.com/ngageoint/eslint-config-opensphere/compare/v1.1.2...v1.1.3) (2019-01-31)


### Bug Fixes

* **package:** update semantic release config ([f2cf436](https://github.com/ngageoint/eslint-config-opensphere/commit/f2cf436))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v1.0.1...v1.1.0) (2017-12-26)


### Features

* **ci:** add travis build with semantic-release ([3fa696c](https://github.com/ngageoint/eslint-config-opensphere/commit/3fa696c))
