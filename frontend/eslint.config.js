const eslintPluginPrettier = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['node_modules'], // Ignorar a pasta node_modules
  },
  {
    languageOptions: {
      ecmaVersion: 'latest', // Suporte à última versão do ECMAScript
      sourceType: 'module', // Habilitar módulos ES
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Habilitar JSX
        },
      },
    },
    plugins: {
      prettier: eslintPluginPrettier, // Adicionar o plugin Prettier
      react: require('eslint-plugin-react'), // Adicionar o plugin React
    },
    settings: {
      react: {
        version: 'detect', // Detectar automaticamente a versão do React
      },
    },
    rules: {
      'prettier/prettier': 'error', // Configura a regra do Prettier
      'react/jsx-uses-react': 'error', // Evitar remoção incorreta de imports React
      'react/jsx-uses-vars': 'error', // Garantir que variáveis JSX são usadas
    },
  },
];
