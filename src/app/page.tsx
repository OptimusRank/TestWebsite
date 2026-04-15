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
      "Get your score, percentile ranking, and cognitive breakdown immediately. No waiting.",
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
    title: "Start the assessment",
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
    title: "Get your results",
    description:
      "Instantly see your score, percentile ranking, and a breakdown of your cognitive strengths.",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    score: 138,
    text: "Finally an assessment that feels legitimate. The breakdown of my cognitive strengths was incredibly detailed.",
    role: "Software Engineer",
  },
  {
    name: "Marcus J.",
    score: 125,
    text: "Took this test on my phone during lunch break. Clean interface, no spam, genuinely interesting questions.",
    role: "Product Designer",
  },
  {
    name: "Priya R.",
    score: 142,
    text: "The pattern recognition section was challenging in a way that felt fair, not tricky. Highly recommend this free assessment.",
    role: "Data Scientist",
  },
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
            Start Free Test <ArrowRight className="ml-1 size-4" />
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
            in 20 Minutes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our free online assessment with scientifically validated questions.
            Get instant results with detailed cognitive breakdown across pattern recognition, logical reasoning, and spatial awareness.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Take the Free Test
              <ChevronRight className="ml-1 size-4" />
            </Link>
            <Link href="#how-it-works" className={buttonVariants({ size: "lg", variant: "outline", className: "h-12 px-8 text-base" })}>
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {[
            { value: "2.4M+", label: "Tests Completed", icon: Users },
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
            Why Our Assessment Stands Out
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Built with psychometricians and validated against standardized
            benchmarks. This free online assessment provides accurate, instant results.
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
            Three Simple Steps to Take Your Assessment
          </h2>
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

      {/* Testimonials */}
      <section
        id="testimonials"
        className="mx-auto max-w-6xl px-4 py-24 sm:px-6"
      >
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Say About Our Intelligence Assessment
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Trophy className="size-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Score: {testimonial.score}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.text}"
                </p>
                <div className="mt-3 text-xs font-medium text-indigo-400">
                  {testimonial.role}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section - Added for better content depth */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions About Our Intelligence Assessment
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          <div className="border border-border/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">How accurate is this free assessment?</h3>
            <p className="text-muted-foreground">Our test is scientifically validated and calibrated against standard assessments like WAIS and Stanford-Binet. While not a replacement for professional testing, it provides reliable estimates within the normal range.</p>
          </div>
          
          <div className="border border-border/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">How long does the assessment take?</h3>
            <p className="text-muted-foreground">The assessment contains 40 questions and typically takes 15-25 minutes to complete. You can take breaks between questions, but we recommend completing it in one session for the most accurate results.</p>
          </div>

          <div className="border border-border/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Is this assessment really free?</h3>
            <p className="text-muted-foreground">Yes, completely free with no hidden costs. You get your full score, percentile ranking, and cognitive breakdown immediately after completing the assessment. No payment or subscription required.</p>
          </div>

          <div className="border border-border/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">What does my score mean?</h3>
            <p className="text-muted-foreground">Intelligence scores are normalized with an average of 100. Scores between 85-115 are considered average, 115-129 above average, and 130+ superior. Your results include percentile rankings to show how you compare to others.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Discover Your Intelligence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join millions who have already taken our free assessment. Get instant results with detailed cognitive analysis.
          </p>
          <div className="mt-8">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Begin Your Assessment
              <ChevronRight className="ml-1 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
                <Brain className="size-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Riot<span className="text-indigo-400">IQ</span>
              </span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-border/50 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 RiotIQ. All rights reserved. Take a free online intelligence assessment and discover your cognitive potential.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}