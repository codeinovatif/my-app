import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AlumniList } from "../../src/components/AlumniList";
import { alumniService } from "../../src/services/alumniService";
import type { Alumni } from "../../src/types/alumni";

export default function SarjanaTab() {
	const [alumni, setAlumni] = useState<Alumni[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchAlumni();
	}, []);

	const fetchAlumni = async () => {
		try {
			const response = await alumniService.getSarjanaAlumni();
			setAlumni(response.alumni || []);
		} catch (error) {
			console.error("Error fetching sarjana alumni:", error);
			setAlumni([]);
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
}

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
