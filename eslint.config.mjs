import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default [
  ...nextCoreWebVitals,
  {
    ignores: [
      '.open-next/**',
      '.wrangler/**',
    ],
  },
  {
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
      'semi': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': ['error'],
    },
  },
]
