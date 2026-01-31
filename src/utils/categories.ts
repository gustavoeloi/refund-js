import foodSvg from "../assets/food.svg";
import otherSvg from "../assets/others.svg";
import servicesSvg from "../assets/services.svg";
import transportSvg from "../assets/transport.svg";
import accommodationSvg from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Food",
    icon: foodSvg,
  },
  other: {
    name: "Others",
    icon: otherSvg,
  },
  services: {
    name: "Services",
    icon: servicesSvg,
  },
  transport: {
    name: "Transports",
    icon: transportSvg,
  },
  accommodation: {
    name: "Accomodation",
    icon: accommodationSvg,
  },
};

export const CATEGORY_KEYS = Object.keys(CATEGORIES);
