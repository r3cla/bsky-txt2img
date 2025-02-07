
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import html2canvas from "html2canvas";
import { toast } from "sonner";

interface PreviewProps {
  text: string;
  font: string;
  color: string;
  bgColor: string;
}

const HTML2CANVAS_OPTIONS = {
  backgroundColor: "#ffffff",
  scale: 2,
} as const;

const getFontSize = (length: number): string => {
  if (length <= 50) return "text-5xl md:text-6xl lg:text-7xl";
  if (length <= 100) return "text-4xl md:text-5xl lg:text-6xl";
  if (length <= 150) return "text-3xl md:text-4xl lg:text-5xl";
  if (length <= 200) return "text-2xl md:text-3xl lg:text-4xl";
  return "text-xl md:text-2xl lg:text-3xl";
};

export const Preview = ({ text, font, color, bgColor }: PreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, HTML2CANVAS_OPTIONS);
      
      const link = document.createElement("a");
      link.download = "image-post.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      
      toast.success("Image downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download image");
    }
  };

  const copyImage = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, HTML2CANVAS_OPTIONS);
      
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob!);
        }, 'image/png');
      });
      
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      
      toast.success("Image copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy image");
    }
  };

  if (!text) return null;

  return (
    <div className="space-y-4 animate-fadeIn">
      <Card 
        className={`p-8 max-w-xl mx-auto aspect-[3/4] flex items-center justify-center ${bgColor}`} 
        ref={previewRef}
      >
        <p 
          style={{ fontFamily: font }} 
          className={`${getFontSize(text.length)} font-bold text-center leading-tight break-words ${color}`}
        >
          {text}
        </p>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          className="gap-2"
          onClick={copyImage}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
        <Button
          variant="outline"
          className="gap-2"
          onClick={downloadImage}
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
};
