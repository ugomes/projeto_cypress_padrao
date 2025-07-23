const cypress = require('eslint-plugin-cypress');

module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {

                // Browser globals
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',

                // Node globals
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
                global: 'readonly',

                // Cypress globals
                cy: 'readonly',
                Cypress: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                before: 'readonly',
                after: 'readonly',
                context: 'readonly',
                expect: 'readonly',
                assert: 'readonly'
            }
        },
        plugins: {
            cypress: cypress
        },
        rules: {

            // ESLint recommended rules
            ...require('@eslint/js').configs.recommended.rules,

            // Cypress recommended rules
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-unnecessary-waiting': 'error',
            'cypress/assertion-before-screenshot': 'warn',
            'cypress/no-force': 'warn',
            'cypress/no-async-tests': 'error',
            'cypress/no-pause': 'error',

            // Custom rules as specified
            'camelcase': 'error',
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
            'operator-assignment': ['error', 'always'],
            'space-infix-ops': 'error',
            'space-before-blocks': 'error',
            'space-in-parens': 'error',
            'keyword-spacing': 'error',
            'lines-around-comment': ['error', { 'beforeBlockComment': true, 'beforeLineComment': true, 'allowBlockStart': true }],
            'spaced-comment': 'error',
            'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 3 }],
            'quotes': ['error', 'single'],
            'newline-after-var': 'error',
            'arrow-spacing': 'error'
        }
    }
];
