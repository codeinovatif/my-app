import type React from "react";
import { FlatList, Linking, StyleSheet, View } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import type { Alumni } from "../types/alumni";

interface AlumniListProps {
	data: Alumni[];
	loading?: boolean;
}

export const AlumniList: React.FC<AlumniListProps> = ({ data, loading }) => {
	const handleCallPress = (phone: string) => {
		Linking.openURL(`tel:${phone}`);
	};

	const handleEmailPress = (email: string) => {
		Linking.openURL(`mailto:${email}`);
	};

	const renderItem = ({ item }: { item: Alumni }) => (
		<Card style={styles.card}>
			<Card.Content>
				<Title>{item.nama}</Title>
				<Paragraph>Program Studi: {item.prodi}</Paragraph>
				<Paragraph>Departemen: {item.departemen}</Paragraph>
				<Paragraph>Tahun Masuk: {item.tmasuk}</Paragraph>
				<Paragraph>Tahun Lulus: {item.tlulus}</Paragraph>
				<Paragraph>Jabatan: {item.jabatan}</Paragraph>
				<Paragraph>Instansi: {item.instansi}</Paragraph>
				<Paragraph>Alamat: {item.alamat}</Paragraph>
			</Card.Content>
			<Card.Actions>
				{item.nowa && (
					<Button onPress={() => handleCallPress(item.nowa)}>Telepon</Button>
				)}
				{item.email && (
					<Button onPress={() => handleEmailPress(item.email)}>Email</Button>
				)}
			</Card.Actions>
		</Card>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.listContent}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		margin: 8,
		elevation: 4,
	},
	listContent: {
		paddingBottom: 16,
	},
});
