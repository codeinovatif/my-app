import type React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

interface SearchBarProps {
	value: string;
	onChangeText: (text: string) => void;
	onSubmit?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
	value,
	onChangeText,
	onSubmit,
}) => {
	return (
		<Searchbar
			placeholder="Cari alumni..."
			onChangeText={onChangeText}
			value={value}
			style={styles.searchBar}
			onSubmitEditing={onSubmit}
		/>
	);
};

const styles = StyleSheet.create({
	searchBar: {
		margin: 16,
		elevation: 4,
		borderRadius: 8,
	},
});
