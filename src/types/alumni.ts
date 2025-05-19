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

export interface AlumniResponse {
    alumni: Alumni[];
} 