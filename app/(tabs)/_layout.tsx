import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#1e88e5",
				headerShown: true,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="sarjana"
				options={{
					title: "Alumni Sarjana",
					tabBarLabel: "Sarjana",
				}}
			/>
			<Tabs.Screen
				name="detail"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	);
}
