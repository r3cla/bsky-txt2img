
export interface TextEditorProps {
  onGenerate: (text: string, font: string, color: string, bgColor: string) => void;
}

export interface ColorCombination {
  name: string;
  textColor: string;
  bgColor: string;
}

export interface Font {
  name: string;
  value: string;
}
