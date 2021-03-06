# [5.0.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v4.1.0...v5.0.0) (2021-05-10)


### Features

* **ecma:** change ecmaVersion to 2020 to match compiler ([4101159](https://github.com/ngageoint/eslint-config-opensphere/commit/41011598befd880e07cdd68dc388d889b06c2470))
* **eslint:** upgrade eslint/configs/plugins to latest ([f950be5](https://github.com/ngageoint/eslint-config-opensphere/commit/f950be5ff86ce6e7bdb2e5d6e20ad121e3ae7d5f))


### BREAKING CHANGES

* **eslint:** This may result in new lint errors in projects. The most common
error introduced was with the operator-linebreak rule, which now more accurately
detects issues. These errors can be fixed via eslint --fix.

# [4.1.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v4.0.0...v4.1.0) (2020-09-23)


### Features

* **es6:** use sourceType module to allow ES6 modules ([422ba3f](https://github.com/ngageoint/eslint-config-opensphere/commit/422ba3f5a526121808bbe9e1a44d55b0721af508))

# [4.0.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v3.4.1...v4.0.0) (2020-02-18)


### Features

* **jsdoc:** update eslint-config-jsdoc to latest, replace require-jsdoc ([04fc12e](https://github.com/ngageoint/eslint-config-opensphere/commit/04fc12e0bc061199d42c5d2a5573fd25401df9d3))


### BREAKING CHANGES

* **jsdoc:** The update to eslint-config-jsdoc may find rule violations
that were previously missed. The most common occurrence seems to be with
check-alignment, which can be resolved by --fix.

## [3.4.1](https://github.com/ngageoint/eslint-config-opensphere/compare/v3.4.0...v3.4.1) (2020-01-28)


### Bug Fixes

* disable prefer-promise-reject-errors to allow shadowing Promise ([08b53ff](https://github.com/ngageoint/eslint-config-opensphere/commit/08b53ff289d3efe09fae7e90c051235b9ff05539))

# [3.4.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v3.3.0...v3.4.0) (2020-01-02)


### Features

* **jsdoc:** remove valid-jsdoc and allow [@type](https://github.com/type) on functions ([9932934](https://github.com/ngageoint/eslint-config-opensphere/commit/9932934ee85ceb4fe42f6eaa596d4cb436384789))

# [3.3.0](https://github.com/ngageoint/eslint-config-opensphere/compare/v3.2.0...v3.3.0) (2019-12-10)


### Features

* use no-unused-vars override to allow goog.requireType ([d1c9b09](https://github.com/ngageoint/eslint-config-opensphere/commit/d1c9b09af7f3d46d2be21508e4f45cf16007acd8))

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
