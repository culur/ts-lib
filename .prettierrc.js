var isWin = require('os').platform() === 'win32';

module.exports = {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'avoid',
    htmlWhitespaceSensitivity: 'ignore',
    printWidth: 80,
    endOfLine: isWin ? 'crlf' : 'lf',
    overrides: [
        {
            files: [
                // alphabetical order
                '.babelrc',
                '.czrc',
                '.releaserc',
                '*.code-workspace',
            ],
            options: { parser: 'json' },
        },
        {
            files: ['package.json', '*.yml'],
            options: { tabWidth: 2 },
        },
    ],
};
