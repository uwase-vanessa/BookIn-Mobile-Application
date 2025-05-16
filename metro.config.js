// Import the default Metro configuration for Expo projects
const { getDefaultConfig } = require("expo/metro-config");
// Import the NativeWind Metro plugin for styling support
const { withNativeWind } = require('nativewind/metro');

// Get the default Metro bundler configuration
const config = getDefaultConfig(__dirname)

// Export the configuration, enhanced with NativeWind support and global CSS input
module.exports = withNativeWind(config, { input: './global.css' })