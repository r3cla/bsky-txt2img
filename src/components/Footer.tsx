
import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-center space-x-8">
        <p className="text-sm text-muted-foreground">No data is stored or collected from this application</p>

        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()}</p>
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
