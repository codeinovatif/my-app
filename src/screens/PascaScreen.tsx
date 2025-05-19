import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AlumniList } from "../components/AlumniList";
import { alumniService } from "../services/alumniService";
import type { Alumni } from "../types/alumni";

export const PascaScreen = () => {
	const [alumni, setAlumni] = useState<Alumni[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchAlumni();
	}, []);

	const fetchAlumni = async () => {
		try {
			const response = await alumniService.getPascaAlumni();
			setAlumni(response.data);
		} catch (error) {
			console.error("Error fetching pasca alumni:", error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return <AlumniList data={alumni} />;
};

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
