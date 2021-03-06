/**
 * @fileoverview Defines environment settings and globals.
 * @author Elan Shanker
 * @copyright 2014 Elan Shanker. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var globals = require("globals");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    builtin: globals.builtin,
    browser: {
        globals: globals.browser
    },
    node: {
        globals: globals.node,
        ecmaFeatures: {
            globalReturn: true
        }
    },
    worker: {
        globals: globals.worker
    },
    amd: {
        globals: globals.amd
    },
    mocha: {
        globals: globals.mocha
    },
    jasmine: {
        globals: globals.jasmine
    },
    jest: {
        globals: globals.jest
    },
    phantomjs: {
        globals: globals.phantomjs
    },
    jquery: {
        globals: globals.jquery
    },
    qunit: {
        globals: globals.qunit
    },
    prototypejs: {
        globals: globals.prototypejs
    },
    shelljs: {
        globals: globals.shelljs
    },
    meteor: {
        globals: globals.meteor
    },
    mongo: {
        globals: globals.mongo
    },
    applescript: {
        globals: globals.applescript
    },
    serviceworker: {
        globals: globals.serviceworker
    },
    embertest: {
        globals: globals.embertest
    },
    es6: {
        ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            regexUFlag: true,
            regexYFlag: true,
            templateStrings: true,
            binaryLiterals: true,
            octalLiterals: true,
            unicodeCodePointEscapes: true,
            superInFunctions: true,
            defaultParams: true,
            restParams: true,
            forOf: true,
            objectLiteralComputedProperties: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            objectLiteralDuplicateProperties: true,
            generators: true,
            destructuring: true,
            classes: true
        }
    }
};
