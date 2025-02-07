
import { ColorCombination, Font } from "@/types/editor";

export const fonts: Font[] = [
  { name: "Arial", value: "Arial" },
  { name: "Times New Roman", value: "Times New Roman" },
  { name: "Verdana", value: "Verdana" },
  { name: "Comic Sans MS", value: "Comic Sans MS" },
  { name: "Impact", value: "Impact" },
  { name: "Calibri", value: "Calibri" },
];

export const colorCombinations: ColorCombination[] = [
  { 
    name: "Black on White",
    textColor: "text-[#000000]",
    bgColor: "bg-[#ffffff]"
  },
  { 
    name: "White on Black",
    textColor: "text-[#ffffff]",
    bgColor: "bg-[#000000]"
  },
  { 
    name: "Black on Blue",
    textColor: "text-[#000000]",
    bgColor: "bg-[#81c2ff]"
  },
  { 
    name: "Blue on Black",
    textColor: "text-[#81c2ff]",
    bgColor: "bg-[#000000]"
  },
  { 
    name: "Firefly",
    textColor: "text-[#ffc3ff]",
    bgColor: "bg-[#00292b]"
  },
  { 
    name: "Bumble",
    textColor: "text-[#222222]",
    bgColor: "bg-[#ffe66d]"
  },
];
