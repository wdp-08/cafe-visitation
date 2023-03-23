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

function bar(name, age, money) {
    let uangSisa;
    let juice = 50000;
    let anggur = 300000;

    if (name === "") {
        return "Anda tidak boleh masuk!";
    } else {
        if (age >= 17) {
            // umur diatas 17 th
            if (money >= anggur) {
                uangSisa = money - anggur;
                return "Anda bisa pesan minum.\nSisa uang anda : "+uangSisa
            } else {
                return "Uang tidak cukup. Anda harus pulang"
            }
        } else {
            // umur dibawah 17 th
            if (money >= juice) {
                uangSisa = money - juice;
                return "Anda bisa pesan minum.\nSisa uang anda : "+uangSisa
            } else {
                return "Uang tidak cukup. Anda harus pulang"
            }
        }
    }
}

let custSatu = bar("Intan", 20, 600000)
console.log(custSatu);
