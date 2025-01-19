const eslintPluginPrettier = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['node_modules'], // Ignorar a pasta node_modules
  },
  {
    languageOptions: {
      ecmaVersion: 'latest', // Suporte à última versão do ECMAScript
      sourceType: 'module', // Habilitar módulos ES
    },
    plugins: {
      prettier: eslintPluginPrettier, // Adiciona o plugin Prettier
    },
    rules: {
      'prettier/prettier': 'error', // Configura a regra do Prettier
    },
  },
];
