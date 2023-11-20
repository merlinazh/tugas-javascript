// EXERCISE - FUNCTION
// Nomor 1
function tokoOnline(nama, produk){
    return 'Terima kasih ' + nama + ' telah membeli produk ' + produk; 
}
console.log(tokoOnline('Ani', 'buku'));

// Nomor 2
// Fahrenheit to celcius
function multipleByNineFifths (number){
    return number * (9/5);
}
function getFahrenheit(celcius){
    return multipleByNineFifths(celcius) + 32
}
console.log(getFahrenheit(20));
// celcius to fahrenheit
function minusThirtyTwo(angka){
    return angka - 32
}
function getCelcius(fahrenheit){
    return minusThirtyTwo(fahrenheit) * (5/9)
}
console.log(getCelcius(68));

// Nomor 3
const umurKucing = (umur) => {
    const kucingUmur = 24;
    if(umur == 1){
        return 15 + ' tahun'
    }else if(umur == 2){
        return kucingUmur + ' tahun'
    }else{
        return kucingUmur + ((umur - 2) * 4) + ' tahun'
    }
}
console.log(umurKucing(3));

// Nomor 4
// const hurufKecil = (String) =>{
//     return String.toLowerCase()
// }
// console.log(hurufKecil('AAA'));

const hurufKecil = (str) => {
    let input = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            input += String.fromCharCode(str.charCodeAt(i) + 32);
        }else{
            input += str[i];
        }
    }
    return input
}
console.log(hurufKecil('AAA'));
