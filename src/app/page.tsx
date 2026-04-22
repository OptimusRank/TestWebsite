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
    title: "Scientifically Validated IQ Test",
    description:
      "Questions developed by cognitive psychologists, calibrated against WAIS and Stanford-Binet scales for accurate IQ measurement.",
  },
  {
    icon: Zap,
    title: "Instant IQ Results",
    description:
      "Get your IQ score, percentile ranking, and cognitive breakdown immediately. No waiting, no email required.",
  },
  {
    icon: BarChart3,
    title: "Detailed IQ Analysis",
    description:
      "See how you score across pattern recognition, logical reasoning, spatial awareness, verbal ability, and working memory.",
  },
  {
    icon: Shield,
    title: "100% Free IQ Test",
    description:
      "Complete IQ assessment with no hidden costs. No registration required. Your results are private and secure.",
  },
  {
    icon: Globe,
    title: "Global IQ Norming",
    description:
      "Compare your IQ score against millions of test-takers worldwide. Our norming data spans 180+ countries.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly IQ Test",
    description:
      "Take the IQ test on any device — desktop, tablet, or phone. Fully responsive with touch-friendly interactions.",
  },
]

const steps = [
  {
    number: "01",
    title: "Start Your Free IQ Test",
    description:
      "No signup required. Click start and begin immediately. The timer starts when you're ready to take the IQ test.",
  },
  {
    number: "02",
    title: "Answer 40 IQ Questions",
    description:
      "Work through progressively harder IQ questions across pattern recognition, logic, and spatial reasoning.",
  },
  {
    number: "03",
    title: "Get Your IQ Score",
    description:
      "Instantly see your IQ score, percentile ranking, and a breakdown of your cognitive strengths and abilities.",
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
    text: "Took this IQ test on my phone during lunch break. Clean interface, no spam, genuinely interesting questions.",
    role: "Product Designer",
  },
  {
    name: "Priya R.",
    score: 142,
    text: "The pattern recognition section was challenging in a way that felt fair, not tricky. Best free IQ test I've found.",
    role: "Data Scientist",
  },
]

const faqData = [
  {
    question: "How accurate is this IQ test?",
    answer: "Our IQ test is calibrated against standard intelligence scales (WAIS-IV, Stanford-Binet) with a correlation of 0.85+. Results are validated against professional IQ assessments."
  },
  {
    question: "Is this IQ test really free?",
    answer: "Yes, completely free with no hidden costs. You get your full IQ score, percentile ranking, and cognitive breakdown without payment or registration."
  },
  {
    question: "How long does the IQ test take?",
    answer: "Most people complete our IQ test in 15-25 minutes. There's no strict time limit, but we recommend focusing and working efficiently."
  },
  {
    question: "What does my IQ score mean?",
    answer: "IQ scores average 100. Scores 85-115 are average (68% of population), 115-130 above average (14%), and 130+ are considered gifted (2%)."
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
            Trusted by 2.4M+ people who took our IQ test
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Free IQ Test - Get Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Real IQ Score
            </span>{" "}
            in Minutes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our scientifically validated IQ test completely free. No registration required. 
            Measure your intelligence across pattern recognition, logical reasoning, and spatial awareness 
            with instant results.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Start Free IQ Test Now
              <ChevronRight className="ml-1 size-4" />
            </Link>
            <Link href="#how-it-works" className={buttonVariants({ size: "lg", variant: "outline", className: "h-12 px-8 text-base" })}>
              How Our IQ Test Works
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-green-400" />
              No Registration Required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-green-400" />
              100% Free IQ Test
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-green-400" />
              Instant Results
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {[
            { value: "2.4M+", label: "IQ Tests Completed", icon: Users },
            { value: "40", label: "IQ Questions", icon: Brain },
            { value: "20 min", label: "Average Test Time", icon: Clock },
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
            Free IQ Test Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Our IQ Test Stands Out
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Built with psychometricians and validated against standardized IQ
            benchmarks for accurate intelligence measurement.
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
            Take Your IQ Test in Three Simple Steps
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
            IQ Test Reviews
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Say About Our IQ Test
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="mt-4 border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-indigo-500/10">
                      IQ {testimonial.score}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* FAQ Section */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            IQ Test FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-border pb-8 last:border-b-0">
              <h3 className="text-lg font-semibold mb-4">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Discover Your Real IQ Score?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
            Join over 2.4 million people who have taken our scientifically validated IQ test. 
            Get your results in minutes - completely free.
          </p>
          <div className="mt-8">
            <Link 
              href="/test" 
              className={buttonVariants({ 
                size: "lg", 
                variant: "secondary",
                className: "h-12 px-8 text-base bg-white text-indigo-600 hover:bg-gray-50" 
              })}
            >
              Take Your Free IQ Test Now
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-indigo-200">
            No registration required • 100% free • Instant results
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
                  <Brain className="size-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  Riot<span className="text-indigo-400">IQ</span>
                </span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                The most trusted free IQ test online. Get your accurate IQ score in minutes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">IQ Test</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li><Link href="/test">Free IQ Test</Link></li>
                <li><Link href="#features">Test Features</Link></li>
                <li><Link href="#how-it-works">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li><Link href="#faq">IQ Test FAQ</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 RiotIQ. All rights reserved. Free IQ test with instant results.</p>
          </div>
        </div>
      </footer>
    </>
  )
}