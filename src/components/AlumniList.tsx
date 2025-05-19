import type React from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Card, Paragraph, Title, useTheme } from "react-native-paper";
import type { Alumni } from "../types/alumni";

interface AlumniListProps {
	data: Alumni[];
	loading?: boolean;
	onAlumniPress?: (alumni: Alumni) => void;
}

export const AlumniList: React.FC<AlumniListProps> = ({
	data,
	loading,
	onAlumniPress,
}) => {
	const theme = useTheme();

	const renderItem = ({ item }: { item: Alumni }) => (
		<Pressable onPress={() => onAlumniPress?.(item)}>
			<Card style={styles.card}>
				<Card.Content>
					<Title>{item.nama}</Title>
					<Paragraph>Program Studi: {item.prodi}</Paragraph>
					<Paragraph>Tahun Masuk: {item.tmasuk}</Paragraph>
					<Paragraph>Tahun Lulus: {item.tlulus}</Paragraph>
					<View style={styles.divider} />
					<Paragraph>Jabatan: {item.jabatan}</Paragraph>
					<Paragraph>Instansi: {item.instansi}</Paragraph>
				</Card.Content>
			</Card>
		</Pressable>
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
	divider: {
		height: 1,
		backgroundColor: "#e0e0e0",
		marginVertical: 8,
	},
});
