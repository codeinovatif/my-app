import type React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, List, Menu } from "react-native-paper";

interface FilterOption {
	label: string;
	value: string | number;
}

interface FilterSectionProps {
	provinces: FilterOption[];
	occupations: FilterOption[];
	years: FilterOption[];
	studyPrograms: FilterOption[];
	onApplyFilters: (filters: {
		province?: string;
		occupation?: string;
		year?: string;
		program?: string;
	}) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
	provinces,
	occupations,
	years,
	studyPrograms,
	onApplyFilters,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [selectedProvince, setSelectedProvince] = useState("");
	const [selectedOccupation, setSelectedOccupation] = useState("");
	const [selectedYear, setSelectedYear] = useState("");
	const [selectedProgram, setSelectedProgram] = useState("");
	const [menuVisible, setMenuVisible] = useState({
		province: false,
		occupation: false,
		year: false,
		program: false,
	});

	const handleApply = () => {
		onApplyFilters({
			province: selectedProvince || undefined,
			occupation: selectedOccupation || undefined,
			year: selectedYear || undefined,
			program: selectedProgram || undefined,
		});
	};

	const handleReset = () => {
		setSelectedProvince("");
		setSelectedOccupation("");
		setSelectedYear("");
		setSelectedProgram("");
		onApplyFilters({});
	};

	const toggleMenu = (menu: keyof typeof menuVisible) => {
		setMenuVisible((prev) => ({
			...prev,
			[menu]: !prev[menu],
		}));
	};

	const getSelectedLabel = (options: FilterOption[], value: string) => {
		return (
			options.find((option) => String(option.value) === value)?.label ||
			"Pilih..."
		);
	};

	return (
		<Card style={styles.card}>
			<List.Accordion
				title="Filter"
				expanded={expanded}
				onPress={() => setExpanded(!expanded)}
			>
				<View style={styles.filterContainer}>
					<Menu
						visible={menuVisible.province}
						onDismiss={() => toggleMenu("province")}
						anchor={
							<List.Item
								title="Provinsi"
								description={getSelectedLabel(provinces, selectedProvince)}
								onPress={() => toggleMenu("province")}
							/>
						}
					>
						{provinces.map((option) => (
							<Menu.Item
								key={String(option.value)}
								onPress={() => {
									setSelectedProvince(String(option.value));
									toggleMenu("province");
								}}
								title={option.label}
							/>
						))}
					</Menu>

					<Menu
						visible={menuVisible.occupation}
						onDismiss={() => toggleMenu("occupation")}
						anchor={
							<List.Item
								title="Bidang Kerja"
								description={getSelectedLabel(occupations, selectedOccupation)}
								onPress={() => toggleMenu("occupation")}
							/>
						}
					>
						{occupations.map((option) => (
							<Menu.Item
								key={String(option.value)}
								onPress={() => {
									setSelectedOccupation(String(option.value));
									toggleMenu("occupation");
								}}
								title={option.label}
							/>
						))}
					</Menu>

					<Menu
						visible={menuVisible.year}
						onDismiss={() => toggleMenu("year")}
						anchor={
							<List.Item
								title="Angkatan"
								description={getSelectedLabel(years, selectedYear)}
								onPress={() => toggleMenu("year")}
							/>
						}
					>
						{years.map((option) => (
							<Menu.Item
								key={String(option.value)}
								onPress={() => {
									setSelectedYear(String(option.value));
									toggleMenu("year");
								}}
								title={option.label}
							/>
						))}
					</Menu>

					<Menu
						visible={menuVisible.program}
						onDismiss={() => toggleMenu("program")}
						anchor={
							<List.Item
								title="Program Studi"
								description={getSelectedLabel(studyPrograms, selectedProgram)}
								onPress={() => toggleMenu("program")}
							/>
						}
					>
						{studyPrograms.map((option) => (
							<Menu.Item
								key={String(option.value)}
								onPress={() => {
									setSelectedProgram(String(option.value));
									toggleMenu("program");
								}}
								title={option.label}
							/>
						))}
					</Menu>

					<View style={styles.buttonContainer}>
						<Button mode="outlined" onPress={handleReset}>
							Reset
						</Button>
						<Button mode="contained" onPress={handleApply}>
							Terapkan
						</Button>
					</View>
				</View>
			</List.Accordion>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		margin: 16,
		elevation: 4,
	},
	filterContainer: {
		padding: 16,
		gap: 16,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 16,
	},
});
