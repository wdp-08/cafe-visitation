// let name = "Mewah"
// let age = 20
// let money = 10000000

function bar(name, age, money) {
  let hargaJuice = 50000;
  let hargaAnggur = 300000;
  let sisaUang;

  if (name === "" || name === undefined) {
    return "Anda tidak boleh masuk!";
  } else {
    if (age < 17) {
      // return "umur dibawah 17 th";
      if (money < hargaJuice) {
        return "Uang tidak cukup. Anda harus pulang";
      } else {
        sisaUang = money - hargaJuice;
        return `Atas nama ${name}, Anda bisa pesan minum juice. Sisa uang anda : ` + sisaUang;
      }
    } else {
      // return "umur diatas 17 th";
      if (money < hargaAnggur) {
        return "Uang tidak cukup. Anda harus pulang";
      } else {
        sisaUang = money - hargaAnggur;
        return `Atas nama ${name}, Anda bisa pesan minum anggur. Sisa uang anda : ` + sisaUang;
      }
    }
  }
}

console.log(bar("Mewah", 16, 80000));
