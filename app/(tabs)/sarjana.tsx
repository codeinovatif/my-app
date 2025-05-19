import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AlumniList } from "../../src/components/AlumniList";
import { FilterSection } from "../../src/components/FilterSection";
import { PaginationControl } from "../../src/components/PaginationControl";
import { SearchBar } from "../../src/components/SearchBar";
import { alumniService } from "../../src/services/alumniService";
import type { Alumni, FilterOption } from "../../src/types/alumni";

export default function SarjanaTab() {
	const [alumni, setAlumni] = useState<Alumni[]>([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [filters, setFilters] = useState({
		province: "",
		occupation: "",
		year: "",
		program: "",
	});

	// State untuk opsi filter
	const [filterOptions, setFilterOptions] = useState({
		provinces: [] as FilterOption[],
		occupations: [] as FilterOption[],
		years: [] as FilterOption[],
		studyPrograms: [] as FilterOption[],
	});

	const fetchFilters = useCallback(async () => {
		try {
			const response = await alumniService.getFilters();
			setFilterOptions({
				provinces: response.provinces,
				occupations: response.occupations,
				years: response.angkatan,
				studyPrograms: response.prodis,
			});
		} catch (error) {
			console.error("Error fetching filters:", error);
		}
	}, []);

	const fetchAlumni = useCallback(async () => {
		try {
			setLoading(true);
			const response = await alumniService.getSarjanaAlumni({
				page: currentPage,
				search: searchQuery,
				prop_id: filters.province || undefined,
				occupation_id: filters.occupation || undefined,
				angkatan: filters.year || undefined,
				prodi: filters.program || undefined,
			});
			setAlumni(response.alumni || []);
			if (response.pager) {
				setTotalPages(response.pager.pageCount);
			}
		} catch (error) {
			console.error("Error fetching sarjana alumni:", error);
			setAlumni([]);
		} finally {
			setLoading(false);
		}
	}, [currentPage, searchQuery, filters]);

	useEffect(() => {
		fetchAlumni();
	}, [fetchAlumni]);

	useEffect(() => {
		fetchFilters();
	}, [fetchFilters]);

	const handleSearch = () => {
		setCurrentPage(1);
		fetchAlumni();
	};

	const handleFilter = (newFilters: {
		province?: string;
		occupation?: string;
		year?: string;
		program?: string;
	}) => {
		const updatedFilters = {
			province: newFilters.province ?? "",
			occupation: newFilters.occupation ?? "",
			year: newFilters.year ?? "",
			program: newFilters.program ?? "",
		};
		setFilters(updatedFilters);
		setCurrentPage(1);
	};

	const handleAlumniPress = (alumni: Alumni) => {
		router.push(`/(tabs)/detail?id=${alumni.id}`);
	};

	if (loading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<SearchBar
				value={searchQuery}
				onChangeText={setSearchQuery}
				onSubmit={handleSearch}
			/>
			<FilterSection
				provinces={filterOptions.provinces}
				occupations={filterOptions.occupations}
				years={filterOptions.years}
				studyPrograms={filterOptions.studyPrograms}
				onApplyFilters={handleFilter}
			/>
			<AlumniList data={alumni} onAlumniPress={handleAlumniPress} />
			<PaginationControl
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
