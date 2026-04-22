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

export const metadata = {
  description: 'Take our free IQ test and get instant results. No registration required. Scientifically validated questions, detailed breakdown, and instant scoring. Start now.',
}

const features = [
  {
    icon: Brain,
    title: "Scientifically Validated IQ Test",
    description:
      "Questions developed by cognitive psychologists, calibrated against WAIS and Stanford-Binet scales for accurate IQ measurement.",
  },
  {
    icon: Zap,
    title: "Instant IQ Results",
    description:
      "Get your IQ score, percentile ranking, and cognitive breakdown immediately. No waiting for results.",
  },
  {
    icon: BarChart3,
    title: "Detailed IQ Analysis",
    description:
      "See how you score across pattern recognition, logical reasoning, spatial awareness, verbal ability, and working memory.",
  },
  {
    icon: Shield,
    title: "Free IQ Test - No Registration",
    description:
      "Take the complete IQ test without signing up. Your results are private and we don't sell data or require personal information.",
  },
  {
    icon: Globe,
    title: "Global IQ Norming",
    description:
      "Compare your IQ score against millions of test-takers worldwide. Our norming data spans 180+ countries.",
  },
  {
    icon: Smartphone,
    title: "IQ Test on Any Device",
    description:
      "Take the IQ test on any device — desktop, tablet, or phone. Fully responsive with touch-friendly interactions.",
  },
]

const steps = [
  {
    number: "01",
    title: "Start the free IQ test",
    description:
      "No signup required. Click start and begin the IQ test immediately. The timer starts when you're ready.",
  },
  {
    number: "02",
    title: "Answer 40 IQ questions",
    description:
      "Work through progressively harder IQ questions across pattern recognition, logic, and spatial reasoning.",
  },
  {
    number: "03",
    title: "Get your IQ score",
    description:
      "Instantly see your IQ score, percentile ranking, and a breakdown of your cognitive strengths and abilities.",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    score: 138,
    text: "Finally an IQ test that feels legitimate. The breakdown of my cognitive strengths was incredibly detailed and accurate.",
    role: "Software Engineer",
  },
  {
    name: "Marcus J.",
    score: 125,
    text: "Took this IQ test on my phone during lunch break. Clean interface, no spam, genuinely challenging questions.",
    role: "Product Designer",
  },
  {
    name: "Priya R.",
    score: 142,
    text: "The pattern recognition section was challenging in a way that felt fair, not tricky. Best free IQ test online.",
    role: "Data Scientist",
  },
]

const iqRanges = [
  { range: "145+", label: "Genius Level", percentage: "0.1%", description: "Exceptionally gifted" },
  { range: "130-144", label: "Very Superior", percentage: "2%", description: "Highly gifted" },
  { range: "115-129", label: "Above Average", percentage: "14%", description: "Above normal intelligence" },
  { range: "85-114", label: "Average", percentage: "68%", description: "Normal intelligence range" },
  { range: "70-84", label: "Below Average", percentage: "14%", description: "Below normal range" },
  { range: "Below 70", label: "Significantly Below Average", percentage: "2%", description: "Intellectual disability range" },
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
              IQ<span className="text-indigo-400">Test</span>
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
          </div>
          <Link href="/test" className={buttonVariants()}>
            Start IQ Test <ArrowRight className="ml-1 size-4" />
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
            Free IQ Test - Measure Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Intelligence Score
            </span>{" "}
            in 20 Minutes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our scientifically validated IQ test and get instant results. Free to take, no registration required. 
            Measure your cognitive abilities across pattern recognition, logical reasoning, and spatial awareness.
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
            benchmarks like WAIS and Stanford-Binet.
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
            How to Take the IQ Test
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

      {/* IQ Ranges */}
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
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            IQ scores follow a normal distribution with an average of 100 and standard deviation of 15.
            Here's how different IQ ranges are classified.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {iqRanges.map((range) => (
            <Card key={range.range} className="border-border/50 bg-card/50">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="text-lg font-bold text-indigo-400 w-20">
                    {range.range}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{range.label}</h3>
                    <p className="text-sm text-muted-foreground">{range.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{range.percentage}</div>
                  <div className="text-xs text-muted-foreground">of population</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/test" className={buttonVariants({ size: "lg" })}>
            Find Your IQ Score <ArrowRight className="ml-1 size-4" />
          </Link>
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
            User Reviews
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Say About Our IQ Test
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-indigo-400">
                    IQ {testimonial.score}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Discover Your IQ Score?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Take our free, scientifically validated IQ test and get your results in 20 minutes.
            No registration required, instant results.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Start Your Free IQ Test <ArrowRight className="ml-1 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
                  <Brain className="size-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  IQ<span className="text-indigo-400">Test</span>
                </span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                The most trusted free IQ test online. Scientifically validated, instant results.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">IQ Test</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/test" className="hover:text-foreground">
                    Take Free IQ Test
                  </Link>
                </li>
                <li>
                  <Link href="#iq-ranges" className="hover:text-foreground">
                    IQ Score Ranges
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-foreground">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground">
                    Help Center
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

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © 2024 IQTest. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs">
                <CheckCircle className="mr-1 size-3" />
                Scientifically Validated
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Shield className="mr-1 size-3" />
                Privacy Protected
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}