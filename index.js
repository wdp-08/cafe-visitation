/**
 * Seseorang pengunjung bar direpresentasikan oleh JavaScript memiliki variable name, age, dan money.
 * Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:
 *
 * - Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai.
 *   Jika name tidak kosong, lanjut ke step ke 2.
 *
 * - Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice.
 *   Jika age 17 tahun keatas, ia hanya boleh memesan anggur.
 *
 * - Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000.
 *   Jika money/uang yang dimiliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.".
 *   Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]",
 *   dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.
 */

let nama = "Rifan"
let age = 21
let money = 2000000

function pemesanan(name, age, money){

    if(name == null || name == ' '){
        console.log('Anda tidak boleh masuk!');
        return 0;
    } 

    if(name !== null && age < 17){
        console.log('Anda hanya boleh memesan juice');
        const harga_juice = 50000;
        if(money < harga_juice){
            console.log("Uang tidak cukup. Anda harus pulang.");
        }else{
            console.log(`Anda bisa pesan minum. Sisa uang anda: Rp${money-harga_juice}`);
        }
    }else{
        console.log('Anda hanya boleh memesan anggur');
        const harga_anggur = 300000;
        if(money < harga_anggur){
            console.log("Uang tidak cukup. Anda harus pulang.");
        }else{
            console.log(`Anda bisa pesan minum. Sisa uang anda: Rp${money-harga_anggur}`);
        }
    }

}

pemesanan(nama, age, money)