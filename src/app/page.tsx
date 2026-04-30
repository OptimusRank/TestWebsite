"use client"

import Link from "next/link"
import {
  Brain,
  Zap,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  ChevronRight,
  Star,
  Clock,
  Users,
  Trophy,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    icon: Brain,
    title: "Scientifically Validated",
    description:
      "Questions developed by cognitive psychologists, calibrated against WAIS and Stanford-Binet scales.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get your IQ score, percentile ranking, and cognitive breakdown immediately. No waiting.",
  },
  {
    icon: BarChart3,
    title: "Detailed Breakdown",
    description:
      "See how you score across pattern recognition, logical reasoning, spatial awareness, verbal ability, and working memory.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description:
      "Your results are yours. We don't sell data or require personal information to take the test.",
  },
  {
    icon: Globe,
    title: "Global Norming",
    description:
      "Compare your score against millions of test-takers worldwide. Our norming data spans 180+ countries.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description:
      "Take the test on any device — desktop, tablet, or phone. Fully responsive with touch-friendly interactions.",
  },
]

const steps = [
  {
    number: "01",
    title: "Start the IQ test",
    description:
      "No signup required. Click start and begin immediately. The timer starts when you're ready.",
  },
  {
    number: "02",
    title: "Answer 40 questions",
    description:
      "Work through progressively harder questions across pattern recognition, logic, and spatial reasoning.",
  },
  {
    number: "03",
    title: "Get your IQ results",
    description:
      "Instantly see your IQ score, percentile ranking, and a breakdown of your cognitive strengths.",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    score: 138,
    text: "Finally a test that feels legitimate. The breakdown of my cognitive strengths was incredibly detailed.",
    role: "Software Engineer",
  },
  {
    name: "Marcus J.",
    score: 125,
    text: "Took this on my phone during lunch break. Clean interface, no spam, genuinely interesting questions.",
    role: "Product Designer",
  },
  {
    name: "Priya R.",
    score: 142,
    text: "The pattern recognition section was challenging in a way that felt fair, not tricky. Highly recommend.",
    role: "Data Scientist",
  },
]

const iqRanges = [
  { range: "130+", label: "Very Superior", percentage: "2.2%" },
  { range: "120-129", label: "Superior", percentage: "6.7%" },
  { range: "110-119", label: "High Average", percentage: "16.1%" },
  { range: "90-109", label: "Average", percentage: "50%" },
  { range: "80-89", label: "Low Average", percentage: "16.1%" },
  { range: "70-79", label: "Borderline", percentage: "6.7%" },
  { range: "Below 70", label: "Extremely Low", percentage: "2.2%" },
]

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
              <Brain className="size-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Riot<span className="text-indigo-400">IQ</span>
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#iq-ranges"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              IQ Ranges
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </div>
          <Link href="/test" className={buttonVariants()}>
            Take Free IQ Test <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32">
          <Badge
            variant="outline"
            className="mb-6 border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
          >
            <Users className="mr-1 size-3" />
            Trusted by 2.4M+ test-takers worldwide
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Free IQ Test - Discover Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              True Intelligence
            </span>{" "}
            Online
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our free online IQ test and get instant results. No registration required. 
            Our scientifically validated assessment measures your cognitive abilities across 
            pattern recognition, logical reasoning, and spatial awareness.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Start Free IQ Test
              <ChevronRight className="ml-1 size-4" />
            </Link>
            <Link href="#how-it-works" className={buttonVariants({ size: "lg", variant: "outline", className: "h-12 px-8 text-base" })}>
              How It Works
            </Link>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            ✓ No registration required ✓ Instant results ✓ Scientifically validated
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {[
            { value: "2.4M+", label: "IQ Tests Completed", icon: Users },
            { value: "40", label: "Questions", icon: Brain },
            { value: "20 min", label: "Average Time", icon: Clock },
            { value: "4.8", label: "User Rating", icon: Star },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 size-5 text-indigo-400" />
              <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Our IQ Test Stands Out
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Built with psychometricians and validated against standardized IQ
            benchmarks including WAIS and Stanford-Binet.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-indigo-500/10">
                  <feature.icon className="size-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* How It Works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-3xl px-4 py-24 sm:px-6"
      >
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Take Your Free IQ Test in 3 Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Our online IQ test is designed to be quick, accurate, and user-friendly.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-lg font-bold text-indigo-400">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* IQ Ranges Section */}
      <section
        id="iq-ranges"
        className="mx-auto max-w-4xl px-4 py-24 sm:px-6"
      >
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Understanding IQ Scores
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            IQ Score Ranges and What They Mean
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            IQ scores follow a normal distribution with an average of 100 and standard deviation of 15. 
            Here's how different IQ ranges are classified and their prevalence in the population.
          </p>
        </div>

        <div className="mt-16">
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="bg-muted/50 px-6 py-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold">
                <div>IQ Range</div>
                <div>Classification</div>
                <div>Population %</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {iqRanges.map((range, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="font-mono font-medium">{range.range}</div>
                    <div>{range.label}</div>
                    <div className="text-muted-foreground">{range.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            * Based on Wechsler Adult Intelligence Scale (WAIS) classification system
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Testimonials */}
      <section
        id="testimonials"
        className="mx-auto max-w-6xl px-4 py-24 sm:px-6"
      >
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Reviews
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Say About Our IQ Test
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-indigo-500/10 text-sm font-bold text-indigo-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      IQ Score: {testimonial.score} • {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Is this IQ test really free?</h3>
            <p className="text-muted-foreground">
              Yes, our IQ test is completely free to take. No registration, payment, or personal information required. 
              You can start immediately and get your results without any hidden costs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">How accurate is this online IQ test?</h3>
            <p className="text-muted-foreground">
              Our test is scientifically validated and calibrated against standard IQ scales like WAIS and Stanford-Binet. 
              Questions are developed by cognitive psychologists and the scoring is based on a large normative sample.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">How long does the IQ test take?</h3>
            <p className="text-muted-foreground">
              The test contains 40 questions and takes about 20 minutes to complete on average. 
              You'll get instant results when finished, including your IQ score and cognitive breakdown.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">What is a good IQ score?</h3>
            <p className="text-muted-foreground">
              The average IQ score is 100, with 68% of people scoring between 85-115. Scores above 130 are considered 
              "very superior" and represent the top 2% of the population. See our IQ ranges section above for details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to discover your IQ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Take our free online IQ test now and get instant results with detailed cognitive analysis.
          </p>
          <Link
            href="/test"
            className={buttonVariants({ size: "lg", className: "mt-8 h-12 px-8 text-base" })}
          >
            Start Your Free IQ Test
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
                  <Brain className="size-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  Riot<span className="text-indigo-400">IQ</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The most trusted free online IQ test. Scientifically validated, 
                instant results, no registration required.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Test</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/test" className="hover:text-foreground">
                    Free IQ Test
                  </Link>
                </li>
                <li>
                  <Link href="/sample" className="hover:text-foreground">
                    Sample Questions
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="hover:text-foreground">
                    How Scoring Works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Learn</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About IQ Tests
                  </Link>
                </li>
                <li>
                  <Link href="/iq-ranges" className="hover:text-foreground">
                    IQ Score Ranges
                  </Link>
                </li>
                <li>
                  <Link href="/famous-iqs" className="hover:text-foreground">
                    Famous IQ Scores
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 RiotIQ. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}