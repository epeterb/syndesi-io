import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link2, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Syndesi</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From the Greek word for "connection," Syndesi represents our mission: connecting deep market insights to scalable, AI-powered companies.
            </p>
          </div>
        </section>

        {/* The Name */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Link2 className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">The Meaning Behind Our Name</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Syndesi</strong> (σύνδεση) is the Greek word for "connection." It's not just our name—it's our entire philosophy.
                  </p>
                  
                  <p className="text-lg text-muted-foreground">
                    We believe the most successful companies are built at the intersection of three critical connections:
                  </p>

                  <div className="space-y-4 pl-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Connecting with the Market:</strong> Understanding real problems through direct engagement with businesses.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Connecting Ideas to Code:</strong> Transforming validated insights into scalable AI solutions.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Connecting Ventures to Value:</strong> Supporting independent companies as they scale and create lasting impact.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-primary">Story</span>
            </h2>
            
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">From Advisory to Venture Studio</h3>
                  <p className="text-muted-foreground">
                    Syndesi began as a go-to-market advisory firm, helping businesses optimize their sales processes and implement AI solutions. Through this work, we discovered something valuable: the same problems kept appearing across different industries.
                  </p>
                  <p className="text-muted-foreground">
                    Rather than solving these problems one client at a time, we realized we could build scalable AI-powered companies to address them systematically. This insight led to the creation of our first venture, PartnerMind.ai, which helps B2B SaaS companies monetize non-converting users through strategic partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">The Venture Studio Model</h3>
                  <p className="text-muted-foreground">
                    The success of PartnerMind.ai validated our hypothesis: the best ventures are built on validated market needs, not hypotheses. We formalized this approach into the Syndesi model—a systematic process for identifying, building, and scaling AI companies.
                  </p>
                  <p className="text-muted-foreground">
                    Our second venture, LocalAnswer.io, emerged from the same process. Through advisory work with home service businesses, we identified the shift from traditional SEO to Answer Engine Optimization (AEO). LocalAnswer.io now helps HVAC companies dominate AI-powered search engines like ChatGPT and Perplexity.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Today and Tomorrow</h3>
                  <p className="text-muted-foreground">
                    Today, Syndesi operates as a full-fledged AI Venture Studio. Our advisory practice continues to serve as our market intelligence engine, identifying new opportunities while our portfolio of ventures grows.
                  </p>
                  <p className="text-muted-foreground">
                    We're actively recruiting co-founders with domain expertise to build the next generation of AI companies. Each venture we create represents a validated market opportunity, backed by proven demand and supported by our shared infrastructure and expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Mission & <span className="text-primary">Values</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-lg">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Market-First</h3>
                    <p className="text-muted-foreground">
                      We build solutions to real problems, not solutions in search of problems. Every venture starts with validated market demand.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Sustainable Growth</h3>
                    <p className="text-muted-foreground">
                      We prioritize profitability and sustainable business models over vanity metrics and hype-driven growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Link2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Connection</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of connection—between people, ideas, and opportunities. Our network is our strength.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-10 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">We Get Paid to Discover Problems</h3>
                  <p className="text-muted-foreground">
                    Unlike traditional venture studios that develop ideas in isolation, our advisory practice generates revenue while identifying the most valuable market opportunities. This de-risks our venture building and ensures we're solving real problems.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Built-In Distribution</h3>
                  <p className="text-muted-foreground">
                    Our advisory clients become early adopters of our ventures, providing immediate validation, feedback, and revenue. This gives our companies a significant head start compared to traditional startups.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Systematic Process</h3>
                  <p className="text-muted-foreground">
                    We've developed a repeatable framework for building ventures: Identify (through advisory), Build (with shared infrastructure), and Scale (with ongoing support). This systematic approach increases our success rate and reduces time to market.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Long-Term Thinking</h3>
                  <p className="text-muted-foreground">
                    We're not looking for quick flips. We build sustainable, profitable businesses that create real value for customers. Our portfolio approach allows us to take calculated risks while maintaining financial stability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
