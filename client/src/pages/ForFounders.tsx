import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Rocket, Users, DollarSign, Zap } from "lucide-react";
import { toast } from "sonner";

export default function ForFounders() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
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
              Build the Next AI Venture <span className="text-primary">with Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stop building solutions in search of a problem. We bring you validated, revenue-generating ideas sourced directly from our advisory clients.
            </p>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="container py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Join Syndesi as a <span className="text-primary">Co-Founder</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Validated Market Opportunities</h3>
                  <p className="text-muted-foreground">
                    Every venture starts with a real problem identified through our advisory practice. You're not guessing—you're building something the market already wants.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Seed Capital & Resources</h3>
                  <p className="text-muted-foreground">
                    We provide initial funding, technical infrastructure, and operational support so you can focus on building and growing the business.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Faster Time to Market</h3>
                  <p className="text-muted-foreground">
                    Shared infrastructure and proven go-to-market playbooks mean you launch 2x faster than a traditional startup.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Built-In Customer Base</h3>
                  <p className="text-muted-foreground">
                    Our advisory clients become your early adopters, providing immediate validation, feedback, and revenue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We're Looking For */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                What We're <span className="text-primary">Looking For</span>
              </h2>
              
              <Card className="shadow-lg">
                <CardContent className="p-10 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Domain Expertise</h3>
                        <p className="text-muted-foreground">
                          Deep knowledge in a specific industry (HVAC, home services, B2B SaaS, etc.) that gives you credibility and insight into customer needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Entrepreneurial Drive</h3>
                        <p className="text-muted-foreground">
                          You want to build, not just consult. You're excited about creating a company from the ground up and seeing it through to scale or exit.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Customer-Centric Mindset</h3>
                        <p className="text-muted-foreground">
                          You understand that great products are built by listening to customers, iterating quickly, and solving real problems.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Comfort with AI/Technology</h3>
                        <p className="text-muted-foreground">
                          You don't need to be a developer, but you should be excited about leveraging AI to solve problems and willing to learn.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Aligned Values</h3>
                        <p className="text-muted-foreground">
                          You believe in building sustainable, profitable businesses that create real value for customers—not chasing hype or vanity metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Co-Founder Models */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Co-Founder <span className="text-primary">Models</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Full-Time Co-Founder</h3>
                  <p className="text-muted-foreground">
                    Join as a full-time co-founder and CEO of the new venture. You'll lead product development, customer acquisition, and team building.
                  </p>
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Equity Range</span>
                      <span className="text-sm font-medium">20-40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Time Commitment</span>
                      <span className="text-sm font-medium">Full-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Compensation</span>
                      <span className="text-sm font-medium">Competitive package</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Advisor / Part-Time Co-Founder</h3>
                  <p className="text-muted-foreground">
                    Contribute domain expertise and strategic guidance while maintaining your current role. Perfect for industry veterans who want to stay involved.
                  </p>
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Equity Range</span>
                      <span className="text-sm font-medium">5-15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Time Commitment</span>
                      <span className="text-sm font-medium">10-20 hrs/week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Compensation</span>
                      <span className="text-sm font-medium">Advisory arrangement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Apply to Become a Co-Founder</h2>
                <p className="text-lg opacity-90">
                  Tell us about yourself and we'll schedule a conversation to explore opportunities.
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
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="linkedin" className="text-sm font-medium text-foreground">
                        LinkedIn Profile
                      </label>
                      <Input
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="industry" className="text-sm font-medium text-foreground">
                        Industry Expertise *
                      </label>
                      <Input
                        id="industry"
                        name="industry"
                        required
                        placeholder="e.g., HVAC, B2B SaaS, Healthcare"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Tell us about yourself *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="What's your background? What problems have you seen in your industry? Why do you want to build with Syndesi?"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
