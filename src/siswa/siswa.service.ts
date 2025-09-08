import { Injectable, NotFoundException } from '@nestjs/common';

export interface Siswa {
    nisn: string,
    nama: string,
    alamat: string,
    umur: number
}

@Injectable()
export class siswaService {
    private siswa: Siswa[] = [
        { nisn: "123", nama: "sulthan", alamat: "sukabumi", umur: 20 }

    ];

    findAll(): Siswa[] {
        return this.siswa;
    }


    findOne(nisn: string) {
        const siswa = this.siswa.find((item) => item.nisn == nisn);
        if (!siswa) throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
        return siswa;
    }

    create(s: Siswa) {
        this.siswa.push(s);
        return s;
    }

    update(nisn: string, s: Siswa) {
        const siswa = this.findOne(nisn);
        Object.assign(siswa, s)
        return siswa;
    }

    remove(nisn: string) {
        const index = this.siswa.findIndex((item) => item.nisn === nisn);
        if (index === -1) throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
        this.siswa.splice(index, 1);
    }
}
