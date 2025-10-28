import localforage from "localforage";

localforage.config({
  name: "MyNextApp",
  storeName: "userData",
  description: "Store user input data locally",
});

export default localforage;
