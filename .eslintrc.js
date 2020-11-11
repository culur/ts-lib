/* eslint-disable global-require */
const isDev = process.env.NODE_ENV === 'development';
const isWin = require('os').platform() === 'win32';

const devPlugins = isDev ? ['only-warn'] : [];

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        createDefaultProgram: true,
        project: './tsconfig.json',
    },
    extends: [
        'airbnb-typescript/base',

        'plugin:node/recommended',
        'plugin:prettier/recommended',

        'prettier/@typescript-eslint',
    ],
    plugins: [
        //
        'node',
        '@typescript-eslint',
        ...devPlugins,
    ],
    settings: {
        cache: true,
        'import/resolver': { typescript: {} },
    },
    rules: {
        'linebreak-style': ['error', isWin ? 'windows' : 'unix'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],

        'node/no-missing-import': 'off',
        'node/no-unsupported-features/es-syntax': [
            'error',
            { ignores: ['modules'] },
        ],

        'import/extensions': ['error', 'never', { json: 'always' }],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                alphabetize: { order: 'asc', caseInsensitive: true },
                'newlines-between': 'never',
            },
        ],
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    },
};
