import { useColorScheme } from "@/hooks/useColorScheme";
import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	MD3LightTheme as DefaultThemePaper,
	PaperProvider,
	adaptNavigationTheme,
} from "react-native-paper";
import "react-native-reanimated";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
	reactNavigationLight: NavigationDefaultTheme,
	reactNavigationDark: NavigationDarkTheme,
});

const paperTheme = {
	...DefaultThemePaper,
	colors: {
		...DefaultThemePaper.colors,
		primary: "#1e88e5",
		secondary: "#03a9f4",
	},
};

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const theme = colorScheme === "dark" ? DarkTheme : LightTheme;

	return (
		<PaperProvider theme={paperTheme}>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.colors.background,
					},
					headerTintColor: theme.colors.text,
					headerTitleStyle: {
						color: theme.colors.text,
					},
				}}
			>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
			<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
		</PaperProvider>
	);
}
