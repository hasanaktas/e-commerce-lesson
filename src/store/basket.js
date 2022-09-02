import { atom } from "recoil";

const basket = atom({
  key: "basket", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

// const a=[{
//     product:{
//         name: "Casper Excalibur G770",
//         image:
//           "https://productimages.hepsiburada.net/s/241/550/110000225490826.jpg/format:webp",
//         price: 15999,
//     },
//     amount:0
// }]
