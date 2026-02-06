import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";
import { toast } from "sonner";

export default function Advisory() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Syndesi <span className="text-primary">Advisory</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Go-to-market advisory services for businesses seeking to optimize their sales processes, implement AI solutions, and unlock new revenue streams.
            </p>
          </div>
        </section>

        {/* The Role of Advisory */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                More Than Consulting—It's Our <span className="text-primary">R&D Engine</span>
              </h2>
              
              <Card className="shadow-lg">
                <CardContent className="p-10 space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Syndesi Advisory isn't just a service offering—it's the market intelligence engine that powers our entire venture studio. Through deep engagement with clients across industries, we identify recurring, high-value problems that become the foundation for our AI ventures.
                  </p>
                  
                  <p className="text-lg text-muted-foreground">
                    When you work with us, you're not just getting expert advice. You're gaining early access to the AI solutions we build, informed by the very challenges you're facing.
                  </p>

                  <div className="bg-accent/50 rounded-lg p-6 mt-6">
                    <p className="text-sm font-medium text-accent-foreground">
                      <strong>The Syndesi Advantage:</strong> Our advisory clients become early adopters of our ventures, receiving priority access and dedicated support as we build solutions to their problems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-primary">Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* GTM Diagnostic */}
              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">GTM Diagnostic</h3>
                    <p className="text-sm text-muted-foreground mb-4">One-time engagement</p>
                    <p className="text-muted-foreground">
                      A comprehensive analysis of your go-to-market strategy, sales processes, and revenue operations. We identify bottlenecks, inefficiencies, and opportunities for AI-powered automation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">What's Included:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Sales process audit and analysis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">CRM and tech stack evaluation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">AI automation opportunities report</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Prioritized action plan with ROI estimates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">30-day implementation support</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Typical engagement: 2-4 weeks. Contact us to discuss your specific needs and timeline.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Advisory */}
              <Card className="shadow-lg border-2 border-primary">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Monthly Advisory</h3>
                    <p className="text-sm text-muted-foreground mb-4">Ongoing partnership</p>
                    <p className="text-muted-foreground">
                      Ongoing strategic guidance and hands-on support to optimize your go-to-market operations, implement AI solutions, and drive sustainable revenue growth.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">What's Included:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Weekly strategy calls and check-ins</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Hands-on implementation support</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">AI agent development and deployment</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">CRM optimization and automation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Priority access to Syndesi ventures</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Monthly performance reporting</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Ongoing partnership with flexible engagement terms. Let's discuss how we can best support your growth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Who We <span className="text-primary">Work With</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">SMBs (50-500 employees)</h3>
                    <p className="text-sm text-muted-foreground">
                      Scaling businesses formalizing sales processes or experiencing stalled growth.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Funded Startups</h3>
                    <p className="text-sm text-muted-foreground">
                      Early-stage companies building GTM infrastructure and seeking efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">B2B SaaS Companies</h3>
                    <p className="text-sm text-muted-foreground">
                      Software companies optimizing revenue operations and monetization strategies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="container py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let's <span className="text-primary">Connect</span></h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your business and we'll schedule a discovery call to explore how we can help.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-foreground">
                      Website
                    </label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Tell us about your business *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="What challenges are you facing? What are your goals? How can we help?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request a Discovery Call
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
