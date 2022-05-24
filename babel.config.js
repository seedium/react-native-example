module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api-client': './packages/@api-client',
          '@chat-types': './packages/@chat-types',
          '@server': './packages/@server',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};
