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

let name = "alwi";
let age = 21;
let money = 2000000;

function pesanMinum(name, age, money) {
    if (name === "") {
      console.log("Anda tidak boleh masuk!");
    } else if (age < 17) {
      // jika umur kurang dari 17 tahun
      console.log("Anda hanya boleh memesan juice.");
      if (money < 50000) {
        console.log("Uang tidak cukup. Anda harus pulang.");
      } else {
        money -= 50000;
        console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
      }
    } else {
      // jika umur 17 tahun ke atas
      console.log("Anda hanya boleh memesan anggur.");
      if (money < 300000) {
        console.log("Uang tidak cukup. Anda harus pulang.");
      } else {
        money -= 300000; 
        console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
      }
    }
  }

pesanMinum(name, age, money);
