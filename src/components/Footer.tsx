import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 h-14">
        <div className="h-full flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            No data is stored or collected from this application
          </p>
          
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}
            </p>
            <p className="text-sm text-muted-foreground">
              This project is open-source under MIT License.
            </p>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <a 
                href="https://github.com/r3cla/bsky-txt2img" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};