module.exports = api => {
  api.cache(true);
  return {
    plugins: ['relay'],
    presets: ['module:metro-react-native-babel-preset'],
  };
};
