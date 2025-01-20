import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['.nuxt/**']
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      vue: eslintPluginVue
    },
    rules: {
      ...eslintPluginTs.configs['recommended'].rules,
      ...eslintPluginVue.configs['recommended'].rules,
      ...eslintPluginVue.configs['strongly-recommended'].rules,
      ...eslintPluginVue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue']
      }
    }
  },
  eslintConfigPrettier
];
