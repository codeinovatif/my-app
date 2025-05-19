import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Card, Text } from "react-native-paper";
import { alumniService } from "../../src/services/alumniService";
import type { AlumniDetail } from "../../src/types/alumni";

export default function DetailScreen() {
	const { id } = useLocalSearchParams();
	const [alumni, setAlumni] = useState<AlumniDetail | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAlumniDetail = async () => {
			if (!id) {
				setError("ID Alumni tidak ditemukan");
				setLoading(false);
				return;
			}

			try {
				setLoading(true);
				setError(null);
				const response = await alumniService.getAlumniById(id as string);
				setAlumni(response);
			} catch (error) {
				console.error("Error fetching alumni detail:", error);
				setError("Gagal mengambil data alumni");
			} finally {
				setLoading(false);
			}
		};

		fetchAlumniDetail();
	}, [id]);

	if (loading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>{error}</Text>
			</View>
		);
	}

	if (!alumni) {
		return (
			<View style={styles.centered}>
				<Text>Data alumni tidak ditemukan</Text>
			</View>
		);
	}

	return (
		<ScrollView style={styles.container}>
			<Card style={styles.card}>
				<Card.Content>
					<Text variant="titleLarge">{alumni.alumni.nama}</Text>
					<Text variant="bodyMedium">Email: {alumni.alumni.email}</Text>
					<Text variant="bodyMedium">No. WhatsApp: {alumni.alumni.nowa}</Text>
					<Text variant="bodyMedium">No. Telepon: {alumni.alumni.notelp}</Text>
					<Text variant="bodyMedium">Alamat: {alumni.alumni.alamat}</Text>

					<View style={styles.section}>
						<Text variant="titleMedium">Informasi Pekerjaan</Text>
						<Text variant="bodyMedium">Jabatan: {alumni.alumni.jabatan}</Text>
						<Text variant="bodyMedium">Instansi: {alumni.alumni.instansi}</Text>
						<Text variant="bodyMedium">Provinsi: {alumni.alumni.propinsi}</Text>
					</View>

					<View style={styles.section}>
						<Text variant="titleMedium">Riwayat Pendidikan</Text>
						{alumni.S1 && (
							<View style={styles.education}>
								<Text variant="bodyMedium">S1</Text>
								<Text variant="bodyMedium">
									Universitas: {alumni.S1.universitas}
								</Text>
								<Text variant="bodyMedium">
									Program Studi: {alumni.S1.prodi}
								</Text>
								<Text variant="bodyMedium">
									Tahun Masuk: {alumni.S1.tmasuk}
								</Text>
								<Text variant="bodyMedium">
									Tahun Lulus: {alumni.S1.tlulus}
								</Text>
							</View>
						)}
						{alumni.S2 && (
							<View style={styles.education}>
								<Text variant="bodyMedium">S2</Text>
								<Text variant="bodyMedium">
									Universitas: {alumni.S2.universitas}
								</Text>
								<Text variant="bodyMedium">
									Program Studi: {alumni.S2.prodi}
								</Text>
								<Text variant="bodyMedium">
									Tahun Masuk: {alumni.S2.tmasuk}
								</Text>
								<Text variant="bodyMedium">
									Tahun Lulus: {alumni.S2.tlulus}
								</Text>
							</View>
						)}
						{alumni.S3 && (
							<View style={styles.education}>
								<Text variant="bodyMedium">S3</Text>
								<Text variant="bodyMedium">
									Universitas: {alumni.S3.universitas}
								</Text>
								<Text variant="bodyMedium">
									Program Studi: {alumni.S3.prodi}
								</Text>
								<Text variant="bodyMedium">
									Tahun Masuk: {alumni.S3.tmasuk}
								</Text>
								<Text variant="bodyMedium">
									Tahun Lulus: {alumni.S3.tlulus}
								</Text>
							</View>
						)}
					</View>
				</Card.Content>
			</Card>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		marginBottom: 16,
	},
	section: {
		marginTop: 16,
		gap: 8,
	},
	education: {
		marginTop: 8,
		paddingLeft: 16,
		gap: 4,
	},
});
