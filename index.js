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
 *   Jika uang cukup, tampilkan "Anda bisa pesan [...]. Sisa uang anda: [...]",
 *   dan ganti [...] dengan nama minuman yang bisa dipesan dan sisa uang yang telah dikurangi oleh harga minuman.
 */

 name = "candra";
 age  = 16;
 money = 60000;
 
 function DrinkCafe(name, age, money) {
     if (name === "") {
         console.log("Anda tidak boleh masuk!");
         return;
     }
 
     if (age < 17) {
         drink = { 
         product: "juice", 
         price: 50000 };
     } else {
         drink = { 
         product: "anggur",
         price: 300000 };
     }
 
     if (money < drink.price) {
         console.log("Uang tidak cukup. Anda harus pulang.");
     } else {
         let change = money - drink.price;
         console.log("Anda bisa pesan " + drink.product + ". Sisa uang Anda: " + change);
     }
 }
 
 DrinkCafe(name, age, money);
