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

 let nama = "Ahmad"
 let age = 17
 let money = 2000000
function cafe(name, age, money) {
    if (name !== "") {
        if (age < 17) {
            if (money < 50000) {
                return "UANG_KURANG"
            }
            money-= 50000
        } else {
            if (money < 300000) {
                return "UANG_KURANG"
            }
            money-= 300000
        }
        return ["SUKSES",money]
    } else {
        return "DILARANG_MASUK"
    }
}
let result = cafe(nama,age,money)
if (result != undefined){
    if (result == "DILARANG_MASUK") {
        console.log("Anda tidak boleh masuk!");
    } else if (result == "UANG_KURANG") {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else{
        console.log("Anda bisa pesan minum. Sisa Uang Anda : " +result[1]);
    }
}
