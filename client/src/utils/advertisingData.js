import React from "react";
import { Translation } from "react-i18next";
import { AiOutlineShop } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { IoIosConstruct } from "react-icons/io";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdCamera } from "react-icons/md";

const TranslateContent = (contents) => {
  return <Translation>{(t) => <>{t(contents)}</>}</Translation>;
};

export const categoryAdversiting = [
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("real estate"),
    image: "/img/advertising/real_state.jpg",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("restaurant"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("vehicule"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("pharmacy"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("marketing"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("construction"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("construction"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    title: TranslateContent("construction"),
    image: "/img/advertising/exemple.jpg",
  },
];

export const companyProducts = [
  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("real estate"),
    image:
      "https://s.alicdn.com/@img/imgextra/i3/O1CN01gd8WK326Zeu7edoWh_!!6000000007676-2-tps-1920-320.png",
  },
  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("restaurant"),
    image:
      "https://s.alicdn.com/@img/imgextra/i1/O1CN01ItTPok1jI2WteG95T_!!6000000004524-0-tps-1920-220.jpg",
  },
  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("vehicule"),
    image:
      "https://s.alicdn.com/@img/imgextra/i2/O1CN01qtUVSy25n6wiofZFH_!!6000000007570-2-tps-1920-220.png",
  },
  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("pharmacy"),
    image:
      "https://s.alicdn.com/@img/imgextra/i4/O1CN01B6xQ7K1FUvBMS2Pe6_!!6000000000491-0-tps-5760-1455.jpg",
  },

  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("real estate"),
    image:
      "https://s.alicdn.com/@img/imgextra/i3/O1CN01gd8WK326Zeu7edoWh_!!6000000007676-2-tps-1920-320.png",
  },
  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("restaurant"),
    image:
      "https://s.alicdn.com/@img/imgextra/i1/O1CN01ItTPok1jI2WteG95T_!!6000000004524-0-tps-1920-220.jpg",
  },
  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("vehicule"),
    image:
      "https://s.alicdn.com/@img/imgextra/i2/O1CN01qtUVSy25n6wiofZFH_!!6000000007570-2-tps-1920-220.png",
  },
  {
    profileId: "616c2f5251ee99575c4a524e",
    title: TranslateContent("pharmacy"),
    image:
      "https://s.alicdn.com/@img/imgextra/i4/O1CN01B6xQ7K1FUvBMS2Pe6_!!6000000000491-0-tps-5760-1455.jpg",
  },
];

export const BusinessList = [
  {
    title: TranslateContent("restaurant"),
    value: "restaurant",
    icon: <IoRestaurantSharp />,
  },
  {
    title: TranslateContent("real estate"),
    value: "real estate",
    icon: <BiBuildingHouse />,
  },
  {
    title: TranslateContent("construction"),
    value: "construction",
    icon: <IoIosConstruct />,
  },
  {
    title: TranslateContent("marketing"),
    value: "marketing",
    icon: <AiOutlineShop />,
  },
  {
    title: TranslateContent("vehicule"),
    value: "vehicule",
    icon: <AiOutlineShop />,
  },
  {
    title: TranslateContent("pharmacy"),
    value: "pharmacy",
    icon: <AiOutlineShop />,
  },
  {
    title: TranslateContent("photography"),
    value: "photography",
    icon: <MdCamera />,
  },
  {
    title: TranslateContent("others"),
    value: "others",
    icon: <MdCamera />,
  },
];

export const listPartnerLogo = [
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "code loccol",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "Noon",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "au 79 code",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "tabalat",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "au 79 code",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "au 79 code",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "au 79 code",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "au 79 code",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "au 79 code",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    companyName: "au 79 code",
    logoUrl: "https://via.placeholder.com/150",
  },
];

export const VideoData = [
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    videoUrl:
      "https://res.cloudinary.com/au79code/video/upload/v1642069265/videos%20ads/WhatsApp_Video_2021-12-16_at_13.05.05_eyeody.mp4",
    description:
      "Quisque velit nisi, pretium ut lacinia inQuisque velit nisi, pretium ut lacinia in Quisque velit nisi, pretium ut lacinia in ",
    publicId: "adv_jsjdaasadds",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    videoUrl:
      "https://res.cloudinary.com/au79code/video/upload/v1642069265/videos%20ads/WhatsApp_Video_2021-12-16_at_13.05.05_eyeody.mp4",
    description:
      "Quisque velit nisi, pretium ut lacinia inQuisque velit nisi, pretium ut lacinia in Quisque velit nisi, pretium ut lacinia in ",
    publicId: "adv_jsjdaasadds",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    videoUrl:
      "https://res.cloudinary.com/au79code/video/upload/v1642069265/videos%20ads/WhatsApp_Video_2021-12-16_at_13.05.05_eyeody.mp4",
    description:
      "Quisque velit nisi, pretium ut lacinia inQuisque velit nisi, pretium ut lacinia in Quisque velit nisi, pretium ut lacinia in ",
    publicId: "adv_jsjdaasadds",
  },
];

export const firstBannerData = [
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "./img/advertising/banner1.jpg",
    active: true,
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "./img/advertising/banner2.jpg",
    active: false,
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "./img/advertising/banner3.jpg",
    active: true,
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "./img/advertising/banner1.jpg",
    active: false,
  },
];

export const secondeBannerData = [
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8874465/%D8%AA%D8%B1%D8%A7%D9%8A%D9%86%D8%AC%D9%84-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-8874465-english_featured_image_mobile-1621170914.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/9063300/%D9%81%D8%A7%D9%86%D8%AA%D8%A7%D8%B2%D9%8A-%D8%A8%D8%B1%D9%8A%D9%85%D9%8A%D9%8A%D8%B1-%D9%84%D9%8A%D8%AC-9063300-english_featured_image_mobile-1630224811.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8736764/%D8%AC%D8%A7%D9%83%D9%84%D9%8A%D9%86-%D9%84%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81-8736764-english_featured_image_mobile-1614506174.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8961842/%D8%B4%D9%87%D8%AF-%D8%A7%D9%84%D8%A7%D8%B5%D9%8A%D9%84-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%A7%D8%AB%D8%A7%D8%AB-8961842-english_featured_image_mobile-1624714329.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Abu-Dhabi/banners/7903041/%D9%84%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AD%D9%87-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9-7903041-english_featured_image_mobile-1608209412.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl: "/img/advertising/bg-images.jpg",
  },
];

export const ThirdBannerData = [
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8874465/%D8%AA%D8%B1%D8%A7%D9%8A%D9%86%D8%AC%D9%84-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-8874465-english_featured_image_mobile-1621170914.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/9063300/%D9%81%D8%A7%D9%86%D8%AA%D8%A7%D8%B2%D9%8A-%D8%A8%D8%B1%D9%8A%D9%85%D9%8A%D9%8A%D8%B1-%D9%84%D9%8A%D8%AC-9063300-english_featured_image_mobile-1630224811.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8736764/%D8%AC%D8%A7%D9%83%D9%84%D9%8A%D9%86-%D9%84%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81-8736764-english_featured_image_mobile-1614506174.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8961842/%D8%B4%D9%87%D8%AF-%D8%A7%D9%84%D8%A7%D8%B5%D9%8A%D9%84-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%A7%D8%AB%D8%A7%D8%AB-8961842-english_featured_image_mobile-1624714329.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Abu-Dhabi/banners/7903041/%D9%84%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AD%D9%87-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9-7903041-english_featured_image_mobile-1608209412.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl: "/img/advertising/bg-images.jpg",
  },
];

export const servicePicture = [
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    profileId: "61efef99ad6d2f0016acf9eb",
    imgUrl: "https://via.placeholder.com/150",
  },
];
