
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";
import { toast } from "sonner";
import { fonts, colorCombinations } from "@/constants/editor";
import { TextEditorProps, ColorCombination } from "@/types/editor";

export const TextEditor = ({ onGenerate }: TextEditorProps) => {
  const [text, setText] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);
  const [selectedColorCombo, setSelectedColorCombo] = useState(colorCombinations[0]);

  const handleGenerate = () => {
    if (!text.trim()) {
      toast.error("Please enter some text first");
      return;
    }
    onGenerate(text, selectedFont, selectedColorCombo.textColor, selectedColorCombo.bgColor);
  };

  return (
    <Card className="w-full max-w-lg p-4 space-y-4 animate-fadeIn backdrop-blur-sm bg-white/80">
      <div className="space-y-2">
        <h2 className="text-2xl font-display font-semibold">Create Your Post</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Textarea
            placeholder="Enter your text here..."
            className="min-h-[80px] resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={280}
          />
          <p className="text-sm text-muted-foreground text-right">
            {text.length}/280 characters
          </p>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Font</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {fonts.map((font) => (
                <Button
                  key={font.value}
                  variant={selectedFont === font.value ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedFont(font.value)}
                  style={{ fontFamily: font.value }}
                >
                  {font.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Color Theme</label>
            <div className="grid grid-cols-2 gap-2">
              {colorCombinations.map((combo) => (
                <Button
                  key={combo.name}
                  variant={selectedColorCombo.name === combo.name ? "default" : "outline"}
                  className="w-full justify-start gap-2"
                  onClick={() => setSelectedColorCombo(combo)}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center ${combo.bgColor} border border-gray-200`}>
                    <div className={`w-3 h-3 ${combo.textColor}`}>
                      <span className="block w-full h-full bg-current"></span>
                    </div>
                  </div>
                  <span className="truncate">{combo.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Button
          className="w-full gap-2"
          size="lg"
          onClick={handleGenerate}
        >
          <Image className="w-4 h-4" />
          Generate Image
        </Button>
      </div>
    </Card>
  );
};
