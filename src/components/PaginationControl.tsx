import type React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

interface PaginationControlProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const PaginationControl: React.FC<PaginationControlProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	return (
		<View style={styles.container}>
			<Button
				mode="outlined"
				onPress={() => onPageChange(currentPage - 1)}
				disabled={currentPage <= 1}
			>
				Sebelumnya
			</Button>
			<Text style={styles.pageInfo}>
				Halaman {currentPage} dari {totalPages}
			</Text>
			<Button
				mode="outlined"
				onPress={() => onPageChange(currentPage + 1)}
				disabled={currentPage >= totalPages}
			>
				Selanjutnya
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		borderTopWidth: 1,
		borderTopColor: "#e0e0e0",
	},
	pageInfo: {
		textAlign: "center",
	},
});
