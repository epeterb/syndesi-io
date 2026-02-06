import { APP_LOGO } from "@/const";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={APP_LOGO} alt="Syndesi" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              We build AI revenue businesses inside your company. You identify the opportunity. We execute. We share the upside.
            </p>
          </div>

          {/* Portfolio */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Portfolio</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://localanswer.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LocalAnswer.io
                </a>
              </li>
              <li>
                <a href="https://partnermind.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  PartnerMind.ai
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  EduScraper
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#model" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  The Model
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Proof of Work
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get Started</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Submit Your Opportunity
                </a>
              </li>
              <li>
                <a href="#fit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Who We Work With
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Syndesi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
