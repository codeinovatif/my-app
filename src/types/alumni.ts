export interface Alumni {
    id: string;
    nama: string;
    email: string;
    nowa: string;
    notelp: string;
    alamat: string;
    prop_id: string;
    jabatan: string;
    instansi: string;
    occupation_id: string;
    photo: string;
    twisuda: string | null;
    blnwisuda: string | null;
    jenjang: string;
    universitas: string;
    departemen: string;
    tmasuk: string;
    tlulus: string;
    prodi: string;
    propinsi_id: string | null;
    propinsi: string | null;
    occupation: string | null;
}

export interface Pager {
    currentPage: number;
    pageCount: number;
    perPage: number;
    total: number;
}

export interface AlumniResponse {
    alumni: Alumni[];
    pager?: Pager;
}

export interface AlumniDetail {
    alumni: Alumni;
    S1?: {
        universitas: string;
        tmasuk: string;
        tlulus: string;
        prodi: string;
    };
    S2?: {
        universitas: string;
        tmasuk: string;
        tlulus: string;
        prodi: string;
    };
    S3?: {
        universitas: string;
        tmasuk: string;
        tlulus: string;
        prodi: string;
    };
}

export interface FilterOption {
    label: string;
    value: string | number;
}

export interface FiltersResponse {
    provinces: FilterOption[];
    prodis: FilterOption[];
    angkatan: FilterOption[];
    occupations: FilterOption[];
} 