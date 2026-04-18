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
  TrendingUp,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  description: 'Take our free IQ test and get instant results. No registration required! Professional questions, accurate scoring, detailed cognitive breakdown in 20 minutes.',
}

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
    title: "Start the test",
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
  {
    range: "130 and above",
    classification: "Gifted/Very Superior",
    percentage: "2%",
    description: "Highly gifted, often found in advanced academic and professional fields",
  },
  {
    range: "120-129",
    classification: "Superior",
    percentage: "9%",
    description: "Above average intelligence, excellent problem-solving abilities",
  },
  {
    range: "110-119",
    classification: "High Average",
    percentage: "16%",
    description: "Bright, capable of complex reasoning and learning",
  },
  {
    range: "90-109",
    classification: "Average",
    percentage: "50%",
    description: "Normal intelligence range, capable of most cognitive tasks",
  },
  {
    range: "80-89",
    classification: "Low Average",
    percentage: "16%",
    description: "Below average but capable of independent living and work",
  },
  {
    range: "70-79",
    classification: "Borderline",
    percentage: "7%",
    description: "May need support in complex cognitive tasks",
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
            Start Test <ArrowRight className="ml-1 size-4" />
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
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Free IQ Test
            </span>{" "}
            - No Registration Required | Get Your IQ Score Instantly
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our professional IQ test and get your score immediately. No signup required, no personal information needed. 
            Scientifically validated questions measure pattern recognition, logical reasoning, spatial awareness, and working memory.
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

          <div className="mt-8 text-sm text-muted-foreground">
            ✓ No registration ✓ No email required ✓ Instant results ✓ Free forever
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

      {/* IQ Ranges Section */}
      <section id="iq-ranges" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            IQ Scale
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Understanding IQ Score Ranges
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Learn what your IQ score means and how it compares to the general population.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {iqRanges.map((range) => (
            <Card key={range.range} className="border-border/50 bg-card/50">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold text-indigo-400 min-w-[120px]">
                      {range.range}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{range.classification}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {range.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{range.percentage}</div>
                      <div className="text-xs text-muted-foreground">of population</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            The average IQ score is 100, with a standard deviation of 15. About 68% of people score between 85-115.
          </p>
          <Link href="/test" className={buttonVariants({ size: "lg" })}>
            Discover Your IQ Range <TrendingUp className="ml-2 size-4" />
          </Link>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

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
            benchmarks.
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
            Three Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start testing your intelligence in less than a minute.
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
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    IQ {testimonial.score}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.text}"
                </p>
                <div className="mt-4">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Discover Your IQ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Join millions of people who have tested their intelligence with our scientifically validated assessment.
        </p>
        <div className="mt-8">
          <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
            Start Your Free IQ Test
            <ChevronRight className="ml-1 size-4" />
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          No email required • Instant results • Completely free
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
                <Brain className="size-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Riot<span className="text-indigo-400">IQ</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-muted-foreground">
            © 2024 RiotIQ. Free intelligence assessment platform.
          </div>
        </div>
      </footer>
    </>
  )
}