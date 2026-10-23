import js from '@eslint/js'
import tsPlugin from 'typescript-eslint'
import globals from 'globals'

export default tsPlugin.config(
  {
    ignores: [
      'dist/**',
      'public/**',
      'assets/**',
      'scripts/**',
      '*.legacy.html',
      '*.html',
      '*.js',
      'src/routeTree.gen.ts',
    ],
  },
  js.configs.recommended,
  ...tsPlugin.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  }
)
