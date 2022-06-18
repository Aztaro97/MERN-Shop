import { DiBlackberry } from "react-icons/di";
import { GiClothes } from "react-icons/gi";

// const cloth = " https://via.placeholder.com/300.png/09f/fff";
import cloth from "./../img/icons/cloths.svg";
import camera from "./../img/icons/camera.svg";
import cosmetic from "./../img/icons/cosmetic.svg";
import jewelry from "./../img/icons/jewelry.svg";
import military from "./../img/icons/military-vehicle.svg";
import other from "./../img/icons/other.svg";
import beauty from "./../img/icons/beauty.svg";
import fourniture from "./../img/icons/fourniture.svg";
import handcraft from "./../img/icons/handcraft.svg";
import electronics from "./../img/icons/electronics.svg";

export const InputbrandList = [
  { title: "-- Select Brand --", value: null },
  { title: "Beauty", value: "Beauty" },
  { title: "Cloth", value: "cloth" },
  { title: "Cosmetic", value: "Cosmetic" },
  { title: "Electronic", value: "electronic" },
  { title: "Fourniture", value: "Fourniture" },
  { title: "Fruits", value: "Fruits" },
  { title: "Handcraft", value: "Handcraft" },
  { title: "Jewelry", value: "Jewelry" },
  // { title: "Painting", value: "Painting" },
  { title: "Photography", value: "Photography" },
  // { title: "Grocerie", value: "Grocerie" },
  { title: "Vehicle", value: "Vehicle" },
  { title: "Other", value: "Other" },
];

export const brandList = [
  { title: "Beauty", value: "Beauty", icon: beauty },
  { title: "Cloth", value: "cloth", icon: cloth },
  { title: "Cosmetic", value: "Cosmetic", icon: cosmetic },
  { title: "Electronic", value: "electronic", icon: electronics },
  { title: "Fourniture", value: "Fourniture", icon: fourniture },
  { title: "Fruits", value: "Fruits", icon: cloth },
  { title: "Handcraft", value: "Handcraft", icon: handcraft },
  { title: "Jewelry", value: "Jewelry", icon: jewelry },
  // { title: "Painting", value: "Painting", icon: cloth },
  { title: "Photography", value: "Photography", icon: camera },
  // { title: "Grocerie", value: "Grocerie", icon: cloth },
  { title: "Vehicle", value: "Vehicle", icon: military },
  { title: "Other", value: "Other", icon: other },
];

export const colorList = [
  { title: "-- Select color --", value: null },
  { title: "Red", value: "red" },
  { title: "Blue", value: "blue" },
  { title: "White", value: "white" },
  { title: "black", value: "black" },
  { title: "orange", value: "orange" },
];
export const sizeList = [
  { title: "-- Select size --", value: null },
  { title: "20", value: "20" },
  { title: "25", value: "25" },
  { title: "30", value: "30" },
  { title: "40", value: "40" },
];
