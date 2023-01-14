module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@types': './src/@types',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@routes': './src/routes',
          '@services': './src/services',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@views': './src/views',
          '@hooks': './src/hooks',
          '@images': './src/assets/images',
          '@mocks': './src/mocks',
        },
      },
    ],
  ],
}
