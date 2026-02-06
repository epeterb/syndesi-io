import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, TrendingUp, Users, DollarSign, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyPartnerMind() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20">
          <Link href="/ventures">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Ventures
            </Button>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold">PartnerMind.ai</h1>
              <a href="https://partnermind.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                <ExternalLink className="h-8 w-8" />
              </a>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              A Syndesi Venture • Platform / Network Model
            </p>
            <p className="text-2xl font-medium">
              Turning non-converting freemium users into a $50K-$200K monthly revenue stream through strategic affiliate partnerships.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                The <span className="text-primary">Problem</span>
              </h2>
              
              <Card className="shadow-lg">
                <CardContent className="p-10 space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Through our advisory work with B2B SaaS companies, we identified a recurring, high-value problem: **freemium users who don't convert represent massive lost opportunity.**
                  </p>
                  
                  <p className="text-lg text-muted-foreground">
                    These companies were spending significant resources acquiring users through ads, content marketing, and partnerships. Many users would sign up for free trials or freemium plans, engage with the product, but ultimately not convert to paid plans.
                  </p>

                  <div className="bg-accent/50 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-lg">The Hidden Cost</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Wasted Acquisition Costs:</strong> Companies paid $50-$200 per user to acquire them, only to see 70-90% never convert.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Zero Monetization:</strong> Non-converting users generated no revenue, turning a potential asset into a liability.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Missed Opportunity:</strong> These users still had needs and budgets—they just weren't the right fit for the product.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              The <span className="text-primary">Solution</span>
            </h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-10 space-y-6">
                <p className="text-lg text-muted-foreground">
                  PartnerMind.ai transforms non-converting users into a revenue-generating asset by connecting them with highly relevant, non-competitive complementary offers through strategic affiliate partnerships.
                </p>
                
                <h3 className="text-xl font-semibold mt-8">How It Works</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Identify Non-Converting Segments</h4>
                      <p className="text-muted-foreground">
                        We analyze your freemium/trial user base to identify segments that are unlikely to convert but still represent valuable audiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Match with Complementary Offers</h4>
                      <p className="text-muted-foreground">
                        We connect your users with relevant, non-competitive products and services they actually need—CRM tools, marketing platforms, accounting software, etc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Generate Revenue Through Partnerships</h4>
                      <p className="text-muted-foreground">
                        When users sign up for these complementary offers, you earn affiliate commissions—turning a cost center into a profit center.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Results & <span className="text-primary">Impact</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <DollarSign className="h-12 w-12 text-primary mx-auto" />
                    <div className="text-4xl font-bold text-primary">$50K-$200K</div>
                    <p className="text-sm text-muted-foreground">Monthly revenue per client</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <Users className="h-12 w-12 text-primary mx-auto" />
                    <div className="text-4xl font-bold text-primary">70-90%</div>
                    <p className="text-sm text-muted-foreground">Non-converting users monetized</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    <div className="text-4xl font-bold text-primary">Zero</div>
                    <p className="text-sm text-muted-foreground">Upfront cost to clients</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-10 space-y-6">
                  <h3 className="text-xl font-semibold">Key Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Pure Upside Revenue:</strong> Clients generate new revenue from users they were already acquiring, with no additional marketing spend.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">No Cannibalization:</strong> Affiliate offers are complementary, not competitive, so core product revenue remains unaffected.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Improved Unit Economics:</strong> By monetizing non-converting users, customer acquisition costs (CAC) effectively decrease.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Enhanced User Experience:</strong> Users receive valuable recommendations for tools they actually need, improving their overall experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Business <span className="text-primary">Model</span>
            </h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-10 space-y-6">
                <p className="text-lg text-muted-foreground">
                  PartnerMind.ai operates on a **Platform / Network Model**, connecting B2B SaaS companies with a curated network of complementary affiliate partners.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Target Market</h3>
                    <p className="text-sm text-muted-foreground">
                      B2B SaaS companies with freemium or trial models, typically with 10-500 employees and significant non-converting user bases.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Revenue Model</h3>
                    <p className="text-sm text-muted-foreground">
                      Revenue share on affiliate commissions generated. Clients pay nothing upfront—we only succeed when they succeed.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Partner Network</h3>
                    <p className="text-sm text-muted-foreground">
                      Curated portfolio of 50+ high-quality affiliate partners across categories like CRM, marketing, hosting, accounting, and AI tools.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Competitive Advantage</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep understanding of B2B SaaS user behavior and a proven matching algorithm that maximizes conversion rates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in PartnerMind.ai?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Learn more about how PartnerMind.ai can help your B2B SaaS company unlock new revenue streams.
            </p>
            <a href="https://partnermind.ai" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Visit PartnerMind.ai
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
