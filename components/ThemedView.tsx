import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

// Define the props for ThemedView, extending standard ViewProps and adding optional light/dark color overrides
export type ThemedViewProps = ViewProps & {
  lightColor?: string; // Optional background color for light mode
  darkColor?: string;  // Optional background color for dark mode
};

// ThemedView component applies a theme-aware background color to a View
export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  // Get the appropriate background color based on the current theme (light or dark)
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  // Render a View with the computed background color and any additional styles/props
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
