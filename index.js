"use strict";

module.exports = {
  "extends": [
    "google",
    "plugin:import/recommended"
  ],
  "plugins": [
    "google-camelcase",
    "import",
    "jsdoc",
    "opensphere"
  ],
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    //
    // Rules from the eslint:recommend rule set, not defined by eslint-config-google
    //
    "no-cond-assign": "error",
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    //
    // TODO: this rule applies only in strict mode, which is implied with "sourceType": "module". it should be enabled
    // as a breaking change, as it will likely cause additional lint findings.
    //
    // https://eslint.org/docs/rules/no-invalid-this
    //
    "no-invalid-this": "off",

    // if this is enabled, all global namespaces (goog, ol, os, etc) must be defined in the config
    "no-undef": "off",

    // TODO: upgrade openlayers to not use console.asserts, then uncomment and fix these
    // "no-console": "error",

    // TODO: fix empty catch blocks, or add a comment if they're needed and intentionally empty
    // "no-empty": "error",

    // TODO: both of these require defining reused loop vars at the highest level shared block
    // "block-scoped-var": "error",
    // "no-redeclare": "error",

    //
    // Allow rejecting promises with a string error message.
    //
    // Note: This was specifically disabled to allow shadowing the native Promise with:
    //    const Promise = goog.require('goog.Promise');
    //
    "prefer-promise-reject-errors": "off",

    //
    // Custom rules from eslint-plugin-import
    //

    // Explicitly allow relative parent imports to avoid the need for aliases in webpack, eslint, etc outside of
    // Yarn workspaces.
    "import/no-relative-parent-imports": "off",

    // Warn when importing something marked as @deprecated
    "import/no-deprecated": "warn",

    // Do not allow importing using an absolute path (ie, '/some/path')
    "import/no-absolute-path": "error",
    // Do not allow relative paths to sibling projects (ie, '../some-project/src/index.js')
    "import/no-relative-packages": "error",
    // Do not allow a module to import itself
    "import/no-self-import": "error",

    //
    // Enforce ordering of imports:
    //  - Use default groups (["builtin", "external", "internal", "parent", "sibling", "index", "object"]).
    //  - Unassigned imports are ignored, as their order may be important.
    //  - Alphabetize within each group.
    //
    // Docs: https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md
    //
    "import/order": ["error", {
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],

    //
    // Custom rules from eslint-plugin-opensphere
    //

    // enforce rules for goog.provide and good.require statements
    "opensphere/modules-first": "error",
    "opensphere/no-duplicate-requires": "error",
    "opensphere/provides-first": "error",
    "opensphere/provides-sorted": "error",
    "opensphere/requires-first": "error",
    "opensphere/requires-sorted": "error",
    "opensphere/single-module": "error",

    // replace ESLint rule with opensphere's to ignore goog.requireType vars
    "no-unused-vars": "off",
    "opensphere/no-unused-vars": ["error", { "args": "none" }],

    // TODO: fix/remove checkTypes and uncomment this
    // "opensphere/no-suppress": ["error", ["checkTypes"]],


    //
    // Additional ESLint rules to enforce opensphere's style guide
    //

    // allow optional params in the form of opt_someParam
    "camelcase": "off",
    "google-camelcase/google-camelcase": "error",

    // trailing commas can cause problems with older browsers
    "comma-dangle": ["error", "never"],

    // always require curly braces around blocks
    "curly": "error",

    // always require a default case in switch statements
    "default-case": "error",

    // advanced compilation often requires bracket notation unless you want to
    // write a custom externs file for everything
    "dot-notation": "off",
    "quote-props": "off",

    // not concerned about using for-in on objects without checking
    // hasOwnProperty
    "guard-for-in": "off",

    // indentation rules: 2 spaces, 4 for multi-line
    //  - if a statement spans lines due to both CallExpression and
    //    MemberExpression, ESLint will probably fail/complain
    "indent": ["error", 2, {
      "CallExpression": {
        "arguments": 2
      },
      "FunctionDeclaration": {
        "parameters": 2
      },
      "FunctionExpression": {
        "parameters": 2
      },
      "MemberExpression": 2,
      "SwitchCase": 1,
      "VariableDeclarator": 2,
      // allow ternary operators to be formatted at the developer's discretion
      "ignoredNodes": ["ConditionalExpression"]
    }],

    // allow a maximum line length of 120
    "max-len": [
      "error",
      120,
      4,
      {
        // ignore for comments, import statements, regular expressions, and url's
        "ignoreComments": true,
        "ignorePattern": "^import ",
        "ignoreRegExpLiterals": true,
        "ignoreUrls": true
      }
    ],

    "new-cap": ["error", {
      // `new` may be used with a constructor in an enum/map, which will fail
      // this rule
      //
      // alternatively, we could reserve the name/pattern "clazz" for this case
      "newIsCap": false,

      // a constant (all caps) can be a function, so allow it to be called
      "capIsNew": false
    }],

    // disallow if statements as the only statement in else blocks
    "no-lonely-if": "error",

    // TODO: use commented line and --fix
    // only allow 2 consecutive empty lines, 1 at the beginning/end of the file
    // "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 1, "maxEOF": 1 }],
    "no-multiple-empty-lines": ["error", { "max": 3 }],

    // const/let aren't available in older browsers
    "no-var": "off",

    // rest params (...args) and spread are not supported by ES5
    "prefer-rest-params": "off",
    "prefer-spread": "off",

    // enforce consistent spacing before and after keywords
    "keyword-spacing": "error",

    // enforce consistent spacing inside parentheses
    "space-in-parens": "error",

    // require spacing around infix operators
    "space-infix-ops": "error",

    // enforce consistent spacing before or after unary operators
    "space-unary-ops": "error",

    // enforce consistent spacing after the // or /* in a comment, and before the */
    "spaced-comment": ["error", "always", { "line": { "markers": ["/"] }, "block": { "balanced": true } }],

    // disable old, deprecated jsdoc rules
    "require-jsdoc": "off",
    "valid-jsdoc": "off",

    // Rules from jsdoc plugin
    "jsdoc/check-alignment": "error", // Recommended
    "jsdoc/check-examples": "off",
    "jsdoc/check-indentation": "off",
    "jsdoc/check-param-names": "error", // Recommended
    "jsdoc/check-syntax": "off",
    "jsdoc/check-tag-names": "error", // Recommended
    "jsdoc/check-types": "error", // Recommended
    "jsdoc/implements-on-classes": "error", // Recommended
    "jsdoc/match-description": "off",
    "jsdoc/newline-after-description": "off", // Recommended
    "jsdoc/no-types": "off",
    // if this is enabled, all global namespaces (goog, ol, os, etc) must be defined in the config
    "jsdoc/no-undefined-types": "off", // Recommended
    "jsdoc/require-description": "off",
    "jsdoc/require-description-complete-sentence": "off",
    "jsdoc/require-example": "off",
    "jsdoc/require-hyphen-before-param-description": "off",
    "jsdoc/require-jsdoc": ["error", { // Recommended
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
      },
    }],
    "jsdoc/require-param": ["error", {"exemptedBy": ["inheritDoc", "type"]}], // Recommended
    "jsdoc/require-param-description": "off", // Recommended
    "jsdoc/require-param-name": ["error"], // Recommended
    "jsdoc/require-param-type": ["error"], // Recommended
    "jsdoc/require-returns": ["error", {"exemptedBy": ["inheritDoc", "type"]}], // Recommended
    "jsdoc/require-returns-check": ["error"], // Recommended
    "jsdoc/require-returns-description": "off", // Recommended
    "jsdoc/require-returns-type": ["error"], // Recommended
    "jsdoc/valid-types": "off" // Recommended
  },
  "settings": {
    "jsdoc": {
      "additionalTagNames": {
        "customTags": ["export", "final", "inheritDoc", "ngInject", "struct", "suppress"]
      },
      "mode": "closure",
      "tagNamePreference": {
        "augments": "extends",
        "class": "constructor",
        "constant": "const",
        "file": "fileoverview",
        "returns": "return"
      },
      "preferredTypes": {
        "Boolean": "boolean",
        "Number": "number",
        "String": "string",
        "object": "Object"
      }
    }
  }
};
