import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ***REMOVED*** ignores: ['dist'] ***REMOVED***,
  ***REMOVED***
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.***REMOVED***ts,tsx***REMOVED***'],
    languageOptions: ***REMOVED***
      ecmaVersion: 2020,
      globals: globals.browser,
    ***REMOVED***,
    plugins: ***REMOVED***
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    ***REMOVED***,
    rules: ***REMOVED***
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        ***REMOVED*** allowConstantExport: true ***REMOVED***,
      ],
    ***REMOVED***,
  ***REMOVED***,
)
