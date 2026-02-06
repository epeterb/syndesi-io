import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Code2, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowWeBuild() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How We <span className="text-primary">Build</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our systematic approach to building AI ventures combines market validation, technical excellence, and strategic support to create companies with a built-in competitive advantage.
            </p>
          </div>
        </section>

        {/* The Three Pillars - Detailed */}
        <section className="container py-12">
          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Pillar 1: Identify */}
            <Card className="shadow-lg">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Identify</h2>
                    <p className="text-lg font-medium text-primary">Connecting with the Market</p>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-muted-foreground">
                      Our advisory practice isn't just a service—it's our R&D engine. Through deep engagement with clients across industries, we identify recurring, high-value problems that are ripe for AI-powered solutions.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">How It Works</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Advisory Engagements:</strong> We work hands-on with businesses to solve go-to-market challenges, giving us direct access to real pain points.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Pattern Recognition:</strong> When we see the same problem across multiple clients, we know it's systemic and worth solving at scale.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Market Validation:</strong> Our clients become early adopters, providing immediate validation and revenue before we even build the full product.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6">
                      <p className="text-sm font-medium text-accent-foreground">
                        <strong>Key Advantage:</strong> Unlike traditional venture studios that develop ideas in a vacuum, we get paid to discover the most pressing, valuable problems in the market.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 2: Build */}
            <Card className="shadow-lg">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Code2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Build</h2>
                    <p className="text-lg font-medium text-primary">Connecting Ideas to Code</p>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-muted-foreground">
                      Once a problem is validated, we assemble a dedicated team to build a standalone company. Each venture operates independently but benefits from shared infrastructure and expertise.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">What We Provide</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Seed Capital:</strong> Initial funding to cover development, infrastructure, and early go-to-market expenses.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Technical Infrastructure:</strong> Shared AI/ML capabilities, back-office systems, and development resources.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Go-to-Market Playbooks:</strong> Proven strategies for customer acquisition, pricing, and positioning based on our advisory experience.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Co-Founder Recruitment:</strong> We identify and recruit domain experts who bring industry knowledge and credibility.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6">
                      <p className="text-sm font-medium text-accent-foreground">
                        <strong>Equity Structure:</strong> The studio retains significant equity (typically 20-40%) in each venture, ensuring alignment and shared success.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 3: Scale */}
            <Card className="shadow-lg">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Scale</h2>
                    <p className="text-lg font-medium text-primary">Connecting Ventures to Value</p>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-muted-foreground">
                      Each venture operates as an independent company with its own leadership and P&L, but benefits from the connection to the parent studio and the broader portfolio.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Ongoing Support</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Strategic Guidance:</strong> Regular check-ins on product roadmap, pricing strategy, and market positioning.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Cross-Portfolio Learning:</strong> Best practices, lessons learned, and successful strategies are shared across all ventures.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Fundraising & Exit Support:</strong> Guidance on raising external capital, strategic partnerships, and potential acquisition opportunities.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Shared Resources:</strong> Continued access to technical infrastructure, legal support, and operational expertise.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6">
                      <p className="text-sm font-medium text-accent-foreground">
                        <strong>Portfolio Approach:</strong> Diversified risk across multiple ventures creates multiple paths to significant returns through acquisitions, strategic partnerships, or continued growth.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Our Model Works */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Our Model <span className="text-primary">Works</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">De-Risked Validation</h3>
                    <p className="text-muted-foreground">
                      We don't guess at problems—we discover them through paid advisory work. Every venture starts with proven market demand.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">Faster Time to Market</h3>
                    <p className="text-muted-foreground">
                      Shared infrastructure and proven playbooks mean ventures launch 2x faster than traditional startups.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">Built-In Distribution</h3>
                    <p className="text-muted-foreground">
                      Our advisory clients become early adopters, providing immediate revenue and case studies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">Aligned Incentives</h3>
                    <p className="text-muted-foreground">
                      Significant equity stakes ensure the studio and venture teams are working toward the same long-term goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <Card className="bg-primary text-primary-foreground shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Build with Us?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                We're looking for co-founders with domain expertise who want to build market-validated AI companies. If you have deep industry knowledge and entrepreneurial ambition, let's connect.
              </p>
              <Link href="/for-founders">
                <Button size="lg" variant="secondary">
                  Become a Co-Founder
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
