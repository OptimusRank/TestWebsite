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
    title: "Get your IQ score",
    description:
      "Instantly see your IQ score, percentile ranking, and a breakdown of your cognitive strengths.",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    score: 138,
    text: "Finally an IQ test that feels legitimate. The breakdown of my cognitive strengths was incredibly detailed.",
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

const faqData = [
  {
    question: "Is this IQ test really free?",
    answer: "Yes, completely free. No hidden charges, no credit card required. Take the full test and get your results without paying anything."
  },
  {
    question: "How accurate is this online IQ test?",
    answer: "Our test is calibrated against established IQ scales like WAIS and Stanford-Binet. While no online test can replace professional assessment, our results correlate strongly with standardized tests."
  },
  {
    question: "What's a good IQ score?",
    answer: "Average IQ is 100, with 68% of people scoring between 85-115. Scores above 130 are considered gifted, while scores above 145 are rare (top 0.1% of population)."
  },
  {
    question: "Can I retake the IQ test?",
    answer: "Yes, but we recommend waiting at least 6 months between attempts to ensure valid results, as practice effects can artificially inflate scores."
  }
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
              href="#testimonials"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
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
              Intelligence Score
            </span>{" "}
            in 20 Minutes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our scientifically validated IQ test and get instant results. Measures cognitive abilities across pattern recognition, logical reasoning, and spatial awareness. No signup required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Take the Free IQ Test
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
            Take Your Free IQ Test in Three Steps
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
            Reviews
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Say About Our IQ Test
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-indigo-500/10">
                    <Trophy className="size-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      IQ: {testimonial.score} • {testimonial.role}
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

      <Separator className="mx-auto max-w-6xl" />

      {/* FAQ Section */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions About IQ Testing
          </h2>
        </div>

        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="border-l-2 border-indigo-500/20 pl-6">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <div className="rounded-3xl border border-border/50 bg-gradient-to-r from-indigo-500/10 via-violet-500/5 to-purple-500/10 px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Discover Your IQ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join millions who have taken our free IQ test. Get your score in just 20 minutes with detailed cognitive analysis.
          </p>
          <Link
            href="/test"
            className={buttonVariants({
              size: "lg",
              className: "mt-8 h-12 px-8 text-base",
            })}
          >
            Start Your Free IQ Test Now
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
                  <Brain className="size-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  IQ<span className="text-indigo-400">Test</span>
                </span>
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">
                The most trusted online IQ test with scientifically validated results.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Test</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/test" className="text-muted-foreground hover:text-foreground">
                    Take IQ Test
                  </Link>
                </li>
                <li>
                  <Link href="/sample" className="text-muted-foreground hover:text-foreground">
                    Sample Questions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Learn</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About IQ
                  </Link>
                </li>
                <li>
                  <Link href="/scores" className="text-muted-foreground hover:text-foreground">
                    IQ Scores Explained
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 IQTest. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}