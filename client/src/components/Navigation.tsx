import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={APP_LOGO} alt="Syndesi" className="h-20 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#model" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              The Model
            </a>
            <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a href="#contact">
              <Button>Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
