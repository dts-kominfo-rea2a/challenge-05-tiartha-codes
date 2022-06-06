const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arrName, funcSort) => {

  dataSort = funcSort(arrName);

  let newNameArray = [];
  for (let counter = 0; counter < dataSort.length; counter++) {
    let iteLoop = ''
    iteLoop += counter + 1 + '. ' + dataSort[counter];
    newNameArray.push(iteLoop);
  }
  return dataSort;
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrName) => {
  let dataSort = arrName.sort()
  return dataSort;
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrName) => {
  let dataSort = arrName.sort().reverse();
  return dataSort;
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
