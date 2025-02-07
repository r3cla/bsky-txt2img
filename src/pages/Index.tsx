
import { useState } from "react";
import { TextEditor } from "@/components/TextEditor";
import { Preview } from "@/components/Preview";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [previewProps, setPreviewProps] = useState({
    text: "",
    font: "",
    color: "",
    bgColor: "",
  });

  const handleGenerate = (text: string, font: string, color: string, bgColor: string) => {
    setPreviewProps({ text, font, color, bgColor });
  };

  return (
    <div className="min-h-screen flex flex-col" 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1536532184021-da5392b55da1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <main className="flex-1 py-12 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-display font-bold">Bsky txt2img</h1>
            <p className="text-muted-foreground">
              Create image posts for BlueSky from your text
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr,1fr]">
            <TextEditor onGenerate={handleGenerate} />
            <Preview {...previewProps} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
