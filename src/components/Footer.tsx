import { Code } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-center space-x-8">
        <p className="text-sm text-muted-foreground">No data is stored or collected from this application</p>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()}</p>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <a href="https://github.com/r3cla/bsky-txt2img" target="_blank" rel="noopener noreferrer">
                <Code className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};