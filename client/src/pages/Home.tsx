import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Target, Handshake } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch("https://formspree.io/f/xdkoqbpz", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Thanks! We'll review your opportunity and get back to you within 48 hours.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again or email us directly at information@syndesiai.com");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or email us directly at information@syndesiai.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We build AI revenue businesses <span className="text-primary">inside your company</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance">
              We help you identify the opportunity. We execute. We share the&nbsp;upside.
            </p>
            <a href="#contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Tell us about your opportunity <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          </div>
        </section>

        {/* The Model Section */}
        <section id="model" className="bg-primary/5 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                The Model
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  We partner with companies that have a real AI opportunity but lack execution capability.
                </p>
                
                <div className="bg-background rounded-xl p-8 border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Here's how it works:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>You invest time + upfront investment ($5-15K range)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>We build the AI agent/product with you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>We share revenue it generates for 8-12 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>No equity dilution. Revenue alignment only.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="text-foreground font-medium">
                    <strong>Why this matters:</strong> You only pay meaningfully if it works. We're incentivized to make it generate real revenue, not just ship features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof of Work Section */}
        <section id="portfolio" className="py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Proof of Work
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Real businesses. Real revenue. Real validation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* LocalAnswer.io */}
                <Card className="shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">LocalAnswer.io</h3>
                    <p className="text-muted-foreground">
                      Answer Engine Optimization platform helping local businesses dominate AI-powered search results.
                    </p>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary">The validation:</p>
                      <p className="text-foreground font-bold">Six digit white label offer proves the model works</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>What it proves:</strong> We can build scalable, revenue-generating AI solutions.
                    </p>
                    <a href="https://localanswer.io" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full">
                        Visit LocalAnswer.io →
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* PartnerMind.ai */}
                <Card className="shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">PartnerMind.ai</h3>
                    <p className="text-muted-foreground">
                      Platform for monetizing freemium SaaS free user bases through affiliate partnerships.
                    </p>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary">Why it matters:</p>
                      <p className="text-foreground font-bold">Co-founded by industry expert. Revenue share model proving out.</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Current traction:</strong> Building with B2B SaaS companies.
                    </p>
                    <a href="https://partnermind.ai" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full">
                        Visit PartnerMind.ai →
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* EduScraper */}
                <Card className="shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">EduScraper</h3>
                    <p className="text-muted-foreground">
                      AI agent for education client automating data extraction and administrative workflows.
                    </p>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary">Why it's here:</p>
                      <p className="text-foreground font-bold">Validates our model works in education market.</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>What it proves:</strong> We can penetrate new verticals and scale the model.
                    </p>
                    <div className="bg-primary/10 text-primary text-sm font-medium py-2 px-4 rounded-md text-center">
                      Currently in Production
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="bg-primary/5 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Why Us
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">We're operators, not advisors</h3>
                  <p className="text-muted-foreground">
                    We build the thing with you. No decks, no frameworks, no "strategic recommendations." Just execution.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">We share in the upside</h3>
                  <p className="text-muted-foreground">
                    Our incentives are aligned with yours. We make money when you make money. That's it.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">We've built multiple revenue businesses</h3>
                  <p className="text-muted-foreground">
                    This isn't theoretical. We've done this before and we're doing it now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="process" className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                How It Works
              </h2>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: "You tell us about your opportunity", desc: "What's the AI use case? What's the revenue potential?" },
                  { step: 2, title: "We assess fit and agree on scope", desc: "We'll be honest if we're not the right fit. If we are, we agree on upfront investment and terms." },
                  { step: 3, title: "We build together", desc: "You're involved. You're learning. This becomes your capability, not just ours." },
                  { step: 4, title: "Launch + revenue share", desc: "We launch and share in the revenue for 8-12 months." },
                  { step: 5, title: "You own it, we move on", desc: "After the revenue share period, it's 100% yours. We move on to the next opportunity." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section id="fit" className="bg-primary/5 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Who We Work With
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Users className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">B2B SaaS companies with 10K+ free users</h3>
                        <p className="text-muted-foreground text-sm">Freemium monetization opportunities we can help unlock.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Target className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Companies with clear product/market fit</h3>
                        <p className="text-muted-foreground text-sm">But monetization challenges we can solve with AI.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Teams that want AI revenue streams</h3>
                        <p className="text-muted-foreground text-sm">But lack the AI execution capability to build them.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Handshake className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Anyone with a real opportunity</h3>
                        <p className="text-muted-foreground text-sm">And willingness to invest time + modest upfront fee.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Have an AI opportunity but lack the execution?
              </h2>
              <p className="text-center text-muted-foreground mb-10 text-lg">
                Tell us about it. We'll tell you if we can help.
              </p>
              
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input name="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input name="email" type="email" placeholder="you@company.com" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Company *</label>
                      <Input name="company" placeholder="Your company" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Brief description of your opportunity *</label>
                      <Textarea 
                        name="opportunity"
                        placeholder="What's the AI use case? What's the potential revenue opportunity?" 
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Your Opportunity"}
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
