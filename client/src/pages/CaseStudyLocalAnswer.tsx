import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, TrendingUp, Users, Target, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyLocalAnswer() {
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
              <h1 className="text-4xl md:text-5xl font-bold">LocalAnswer.io</h1>
              <a href="https://localanswer.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                <ExternalLink className="h-8 w-8" />
              </a>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              A Syndesi Venture • Vertical SaaS Model
            </p>
            <p className="text-2xl font-medium">
              Helping HVAC and home service businesses dominate AI-powered search engines through Answer Engine Optimization (AEO).
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
                    Through our advisory work with HVAC and home service businesses, we discovered a seismic shift in how customers find service providers: **traditional SEO is dying, and AI-powered search is taking over.**
                  </p>
                  
                  <p className="text-lg text-muted-foreground">
                    40% of customers now use ChatGPT, Perplexity, and Google AI Overviews instead of clicking through traditional search results. These AI engines show **one answer**, not ten blue links. If you're not that answer, you don't exist.
                  </p>

                  <div className="bg-accent/50 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-lg">The Crisis for Local Businesses</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Invisible to AI:</strong> Traditional SEO tactics (keywords, backlinks) don't work for AI search. Businesses optimized for Google are invisible to ChatGPT.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Lost Leads:</strong> When AI engines recommend competitors, businesses lose high-intent leads to companies they've never heard of.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">No Clear Solution:</strong> Most HVAC companies don't understand AEO or have the resources to implement it effectively.
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
                  LocalAnswer.io provides a **proprietary database of 2,112 HVAC-specific questions** that represent real customer searches. Our platform analyzes content structure, schema markup, and authority signals to help businesses become the answer AI engines quote.
                </p>
                
                <h3 className="text-xl font-semibold mt-8">How It Works</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Audit Current AI Visibility</h4>
                      <p className="text-muted-foreground">
                        We analyze how often your business is cited by AI engines like ChatGPT, Perplexity, and Google AI Overviews for relevant HVAC queries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Identify High-Value Questions</h4>
                      <p className="text-muted-foreground">
                        From our database of 2,112 questions, we identify the most relevant, high-intent queries for your specific services and location.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Optimize Content for AEO</h4>
                      <p className="text-muted-foreground">
                        We provide specific recommendations for content structure, schema markup, and authority signals that AI engines prioritize.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Track & Improve Rankings</h4>
                      <p className="text-muted-foreground">
                        Ongoing monitoring shows how often you're cited by AI engines, allowing continuous optimization and improvement.
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
                    <Target className="h-12 w-12 text-primary mx-auto" />
                    <div className="text-4xl font-bold text-primary">2,112</div>
                    <p className="text-sm text-muted-foreground">HVAC-specific questions in database</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    <div className="text-4xl font-bold text-primary">+35%</div>
                    <p className="text-sm text-muted-foreground">Potential traffic increase from AEO</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <Users className="h-12 w-12 text-primary mx-auto" />
                    <div className="text-4xl font-bold text-primary">40%</div>
                    <p className="text-sm text-muted-foreground">Of customers now use AI search</p>
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
                        <strong className="text-foreground">First-Mover Advantage:</strong> Businesses using LocalAnswer.io gain early dominance in AI search before competitors catch on.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Proprietary Data:</strong> Our database of 2,112 questions is unique to LocalAnswer.io and not available elsewhere.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Measurable Results:</strong> Clients can track exactly how often they're cited by AI engines, proving ROI.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Vertical Expertise:</strong> Deep focus on HVAC and home services ensures recommendations are industry-specific and effective.
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
                  LocalAnswer.io operates on a **Vertical SaaS Model**, providing specialized AEO software and services exclusively for HVAC and home service businesses.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Target Market</h3>
                    <p className="text-sm text-muted-foreground">
                      HVAC and home service businesses, from single-location companies to multi-state franchises with 10+ locations.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Pricing Model</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Per-Analysis</span>
                        <span className="font-medium">$500-$1,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Subscription</span>
                        <span className="font-medium">$200-$500/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Enterprise (10+ locations)</span>
                        <span className="font-medium">Custom</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Competitive Moat</h3>
                    <p className="text-sm text-muted-foreground">
                      Proprietary database of 2,112 HVAC-specific questions and deep vertical expertise create a defensible competitive advantage.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold">Expansion Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      After dominating HVAC, expand to adjacent home service verticals (plumbing, electrical, roofing) with similar AEO needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                The <span className="text-primary">Opportunity</span>
              </h2>
              
              <Card className="shadow-lg">
                <CardContent className="p-10 space-y-6">
                  <p className="text-lg text-muted-foreground">
                    LocalAnswer.io represents a rare opportunity to capture market share during a fundamental shift in search behavior. As AI-powered search becomes the default, businesses that optimize for AEO early will dominate their markets.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Massive TAM:</strong> 100,000+ HVAC businesses in the US alone, with similar numbers in plumbing, electrical, and other home services.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Urgent Need:</strong> Businesses are already losing leads to AI search—they need a solution now, not later.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">High Willingness to Pay:</strong> HVAC companies spend $5K-$50K/month on marketing—$200-$500/month for AEO is a no-brainer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in LocalAnswer.io?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Learn more about how LocalAnswer.io can help your HVAC business dominate AI-powered search.
            </p>
            <a href="https://localanswer.io" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Visit LocalAnswer.io
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
