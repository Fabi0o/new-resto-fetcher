import data from "./Aktywni przedsiębiorcy po kodzie PKD.json" assert { type: "json" };

console.log(
  data.tblBusinessEntityStats.Detail_Collection.filter(
    (resto) =>
      resto["DataRozpoczęciaDziałalności "].substring(0, 7) == "2023-12"
  )
);
