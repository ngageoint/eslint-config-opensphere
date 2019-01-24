"use strict";

module.exports = {
  "extends": "google",
  "plugins": [
    "google-camelcase",
    "opensphere"
  ],
  "env": {
    "browser": true
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
    // Custom rules from eslint-plugin-opensphere
    //

    // enforce rules for goog.provide and good.require statements
    "opensphere/provides-first": "error",
    "opensphere/provides-sorted": "error",
    "opensphere/requires-first": "error",
    "opensphere/requires-sorted": "error",
    "opensphere/no-duplicate-requires": "error",

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
      "MemberExpression": 2,
      "SwitchCase": 1,
      "VariableDeclarator": 2
    }],

    // allow a maximum line length of 120
    "max-len": [
      "error",
      120,
      4,
      {
        // ignore for comments, regular expressions, and url's
        "ignoreComments": true,
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
    "spaced-comment": ["error", "always", { "line": { "markers": ["/"]}, "block": { "balanced": true}}],

    // require the jsdocs to be valid
    "valid-jsdoc": ["error", {
      "requireParamDescription": false,
      "requireReturnDescription": false,

      // only require a return if there is one in the function
      "requireReturn": false,

      // use "return" instead of "returns"
      "prefer": {
        "returns": "return"
      },

      // use lower case primitive names
      "preferType": {
        "Boolean": "boolean",
        "Number": "number",
        "String": "string"
      }
    }]
  }
};
