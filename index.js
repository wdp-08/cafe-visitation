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

 // definisikan variabel
let name = "John";
let age = 20;
let money = 400000;

// cek apakah name kosong
if (!name) {
  console.log("Anda tidak boleh masuk!");
} else {
  // cek apakah age dibawah 17 tahun
  if (age < 17) {
    // hanya bisa memesan juice
    if (money >= 50000) {
      // uang cukup untuk memesan juice
      money -= 50000;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    } else {
      // uang tidak cukup untuk memesan juice
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else {
    // hanya bisa memesan anggur
    if (money >= 300000) {
      // uang cukup untuk memesan anggur
      money -= 300000;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    } else {
      // uang tidak cukup untuk memesan anggur
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  }
}
