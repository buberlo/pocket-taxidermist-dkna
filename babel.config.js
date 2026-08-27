// Babel configuration for the Expo app.
//
// Uses the standard Expo preset so JSX, Flow, and modern JavaScript
// syntax are transpiled correctly for React Native.
module.exports = function (api) {
  // Cache the configuration so Babel does not re-evaluate it on every file.
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
  };
};