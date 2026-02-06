import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function Ventures() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Ventures</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Each venture represents a validated market opportunity, built on the Syndesi model of connecting deep insights to scalable AI solutions.
            </p>
          </div>
        </section>

        {/* PartnerMind.ai */}
        <section className="container py-12">
          <Card className="shadow-xl max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl font-bold">PartnerMind.ai</h2>
                      <a href="https://partnermind.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground">A Syndesi Venture • Platform / Network Model</p>
                  </div>

                  <p className="text-lg text-muted-foreground">
                    B2B partnership monetization platform that helps software companies unlock additional revenue streams through strategic affiliate partnerships.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">The Problem We Solved</h3>
                    <p className="text-muted-foreground">
                      B2B SaaS companies struggle to monetize freemium users who don't convert. These non-converting users represent lost opportunity and wasted acquisition costs.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Our Solution</h3>
                    <p className="text-muted-foreground">
                      PartnerMind.ai provides a turnkey revenue solution with instant access to a roster of B2B software offers. Companies can monetize churned customers, reward existing users, and distribute their own offers through our growing network.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/case-study/partnermind">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        Read Case Study
                      </Button>
                    </Link>
                    <a href="https://partnermind.ai" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full sm:w-auto">
                        Visit PartnerMind.ai
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold">Key Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-bold text-2xl text-primary">Significant Revenue</div>
                          <p className="text-sm text-muted-foreground">New monthly revenue stream per client</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-bold text-2xl">2,100+</div>
                          <p className="text-sm text-muted-foreground">B2B software offers across 10+ categories</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-bold text-2xl">Platform</div>
                          <p className="text-sm text-muted-foreground">Two-sided marketplace with network effects</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Target Market</h3>
                    <p className="text-sm text-muted-foreground">
                      B2B SaaS companies with freemium models looking to monetize non-converting users and create additional revenue streams.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Offer Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {["CRM & Sales", "Marketing", "Web Hosting", "E-Commerce", "Accounting", "SEO & Analytics", "AI Tools", "Communication", "Support", "Project Management"].map((category) => (
                        <span key={category} className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* LocalAnswer.io */}
        <section className="container py-12">
          <Card className="shadow-xl max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl font-bold">LocalAnswer.io</h2>
                      <a href="https://localanswer.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground">A Syndesi Venture • Vertical SaaS Model</p>
                  </div>

                  <p className="text-lg text-muted-foreground">
                    Answer Engine Optimization (AEO) platform specifically built for HVAC and home service businesses to dominate AI-powered search engines.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">The Problem We Solved</h3>
                    <p className="text-muted-foreground">
                      Traditional SEO is dying. 40% of customers now use ChatGPT, Perplexity, and Google AI Overviews instead of clicking through search results. These AI engines show one answer, not ten blue links. If you're not that answer, you don't exist.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Our Solution</h3>
                    <p className="text-muted-foreground">
                      LocalAnswer.io provides a proprietary database of 2,112 HVAC-specific questions that represent real customer searches. Our platform analyzes content structure, schema markup, and authority signals to help businesses become the answer AI engines quote.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/case-study/localanswer">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        Read Case Study
                      </Button>
                    </Link>
                    <a href="https://localanswer.io" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full sm:w-auto">
                        Visit LocalAnswer.io
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold">Key Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-bold text-2xl text-primary">Subscription Model</div>
                          <p className="text-sm text-muted-foreground">Flexible monthly plans available</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-bold text-2xl">2,112</div>
                          <p className="text-sm text-muted-foreground">Proprietary HVAC-specific questions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-bold text-2xl">+35%</div>
                          <p className="text-sm text-muted-foreground">Potential traffic increase</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Target Market</h3>
                    <p className="text-sm text-muted-foreground">
                      HVAC and home service businesses, from single-location companies to multi-state franchises with 10+ locations.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Flexible Plans</h3>
                    <p className="text-sm text-muted-foreground">
                      Multiple service tiers available from single-location businesses to enterprise franchises. Contact us to discuss your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Ventures */}
        <section className="container py-12">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Additional <span className="text-primary">Ventures</span></h2>
            <p className="text-lg text-muted-foreground">
              Building the future of AI-powered solutions across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* LinkedIn Weekly Digest */}
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">My Weekly Digest</h3>
                  <p className="text-sm text-muted-foreground">A Syndesi Venture • Content Platform</p>
                </div>
                <p className="text-muted-foreground">
                  AI-powered LinkedIn newsletter that curates personalized weekly digests of trending articles and insights for professionals.
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm font-medium">Status</p>
                  <p className="text-xs text-muted-foreground mt-1">In Development</p>
                </div>
              </CardContent>
            </Card>

            {/* Plantswap.life */}
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">Plantswap.life</h3>
                    <a href="https://plantswap.life" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">A Syndesi Venture • Community Platform</p>
                </div>
                <p className="text-muted-foreground">
                  Community-driven platform connecting plant enthusiasts for local plant swaps, trades, and horticultural knowledge sharing.
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm font-medium">Status</p>
                  <p className="text-xs text-muted-foreground mt-1">In Development</p>
                </div>
              </CardContent>
            </Card>

            {/* weparkchicago.net */}
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">WeParkChicago.net</h3>
                    <a href="https://weparkchicago.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">Build-to-Suit Client Project</p>
                </div>
                <p className="text-muted-foreground">
                  Custom parking management platform connecting Chicago property owners with parking space seekers, featuring real-time availability and automated booking.
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm font-medium">Status</p>
                  <p className="text-xs text-muted-foreground mt-1">Client Engagement</p>
                </div>
              </CardContent>
            </Card>

            {/* Cringe.agency */}
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">Cringe.agency</h3>
                    <a href="https://cringe.agency" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">A Syndesi Venture • TBD</p>
                </div>
                <p className="text-muted-foreground">
                  Exploring opportunities in the creative and marketing space. Business model and positioning currently under development.
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm font-medium">Status</p>
                  <p className="text-xs text-muted-foreground mt-1">Concept Phase</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Next Venture</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're constantly identifying new market opportunities through our advisory practice. Have domain expertise? Join us as a co-founder.
            </p>
            <a href="/for-founders">
              <Button size="lg">
                Become a Co-Founder
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
