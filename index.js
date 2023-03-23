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

 let nama = 'Ahmad'
 let age = 17
 let money = 2000000

 let hargaJuice = 50000;
 let hargaAnggur = 300000;

 function pemesanan(nama, age, money) {
    if (nama == null || nama == '') {
        console.log("Anda tidak boleh masuk!");
    } else {
        if (age < 17 && money >= hargaJuice) {
            console.log(`Anda bisa memesan juice. Sisa uang anda: Rp${money-hargaJuice}`);
        } else if (age >= 17 && money >= hargaAnggur) {
            console.log(`Anda bisa memesan anggur. Sisa uang anda: Rp${money-hargaAnggur}`);
        } else {
          console.log("Maaf uang anda tidak cukup, Anda harus pulang");  
        }
    }
 }

 pemesanan(nama, age, money)
