// EXERCISE - JS DASAR
// Nomor 1 console log data diri
// nama
console.log('Nama = Marliana Azizah'); 
// asal daerah
console.log('Asal Daerah = Tanah Bumbu');
// tanggal lahir
console.log('Tanggal Lahir = 24 Januari 2002');
// umur
console.log('Umur = 21');
// pekerjaan
console.log('Posisi Pekerjaan = Mahasiswa');

// Nomor 2 membuat interaksi kepada user
/* 
membuat interaksi dengan user
menggunakan prompt, confirm, alert
*/
prompt('Nama User');
prompt('Asal Negara');
confirm('Apakah data sudah benar?');
alert('Terima kasih sudah mengisi form')

// Nomor 5 membuat variabel
const nama = 'Marliana Azizah'; 
const asal = 'Tanah Bumbu';
const tanggalLahir = '24 Januari 2002';
let umur = 21;
let pekerjaan = 'Mahasiswa';

console.log(nama, asal, tanggalLahir, umur, pekerjaan);

// Nomor 6 operasi matematika 
let jumlah = 25 + 10;
let kali = 100* 2;
let bagi = 99/2;
let modulus = 99%2; 

console.log(jumlah);
console.log(kali);
console.log(bagi);
console.log(modulus);

// EXERCISE - CONDITIONAL
// exercise no 1
let pekerjaanStartup = 'HR'
if(pekerjaanStartup == 'HR'){
    console.log('tugas saya melakukan rekrutmen calon pegawai baru')
}else if(pekerjaanStartup == 'web developer'){
    console.log('tugas saya ngoding')
}else if(pekerjaanStartup == 'marketing'){
    console.log('tugas saya mempromosikan produk');
}else{
    console.log('tugas tidak diketahui');
}

// exercise no 2
// const nilai = 80
// if(nilai > 70){
//     console.log('anda tidak remidial');
// }else if (nilai === 70){
//     console.log('nilai anda pas KKM');
// }else{
//     console.log('anda remidial');
// }

let a = 10;
let b = 5;
if(a > b){
    console.log(a + ' lebih besar dari ' + b);
}else if(a === b){
    console.log(a + ' sama dengan ' + b );
}else{
    console.log(a + ' lebih kecil dari ' +b);
}

// exercise no 3
let namaHari = 5;
switch (namaHari) {
    case 1: {console.log('Minggu');break;}
    case 2: {console.log('Senin');break;}
    case 3: {console.log('Selasa');break;}
    case 4: {console.log('Rabu');break;}
    case 5: {console.log('Kamis');break;}
    case 6: {console.log('Jumat');break;}
    case 7: {console.log('Sabtu');break;}
    default: {console.log('nama hari dari angka 1 sampai 7');}
}

// exercise no 4
let arahKarakter = 'UP';
switch (arahKarakter) {
    case 'UP': {console.log('Karakter berjalan ke atas');break;}
    case 'RIGHT': {console.log('Karakter berjalan ke kanan');break;}
    case 'BOTTOM': {console.log('Karakter berjalan ke bawah');break;}
    case 'LEFT': {console.log('Karakter berjalan ke kiri');break;}
    default: {console.log('Karakter tidak berjalan');}
}

// EXERCISE - LOOP
// exercise nomor 1
for(let angka = 1; angka <= 100; angka++){
    // document.write('user ke- ' + angka);
    console.log('user ke- ' + angka);
}

// exercise nomor 2
let nilaiAwal = 0
for(let i = 0; i < 10; i++){
    nilaiAwal += 2
    console.log(nilaiAwal);
}

// exercise nomor 3
for(let i = 0; i <=20; i++){
    if(i % 2 === 0){
        console.log(i, 'nilai genap');
    }else{
        console.log(i, 'nilai ganjil');
    }
}

// exercise nomor 5
let kuis = prompt('Sebutkan kepanjangan dari nama IB');
const jawaban = 'Impact Byte'
let isiPrompt = ''
while (isiPrompt !== jawaban){
    isiPrompt = prompt('Sebutkan kepanjangan dari nama IB');

    if(isiPrompt == jawaban){
        alert('selamat jawaban kamu benar')
    }
}
    
