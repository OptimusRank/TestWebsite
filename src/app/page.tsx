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
    title: "Scientifically Validated Questions",
    description:
      "Questions developed by cognitive psychologists, calibrated against WAIS and Stanford-Binet IQ scales for accuracy.",
  },
  {
    icon: Zap,
    title: "Instant IQ Test Results",
    description:
      "Get your IQ score, percentile ranking, and cognitive breakdown immediately after completing the test. No waiting period.",
  },
  {
    icon: BarChart3,
    title: "Detailed IQ Analysis",
    description:
      "See how you score across pattern recognition, logical reasoning, spatial awareness, verbal ability, and working memory.",
  },
  {
    icon: Shield,
    title: "Private & Secure Testing",
    description:
      "Your IQ test results are yours alone. We don't sell data or require personal information to take the assessment.",
  },
  {
    icon: Globe,
    title: "Global IQ Norming Data",
    description:
      "Compare your IQ score against millions of test-takers worldwide. Our norming data spans 180+ countries for accurate percentiles.",
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
      "No signup required for this IQ test. Click start and begin immediately. The timer starts when you're ready to take the test.",
  },
  {
    number: "02",
    title: "Answer 40 IQ Questions",
    description:
      "Work through progressively harder IQ test questions across pattern recognition, logic, and spatial reasoning sections.",
  },
  {
    number: "03",
    title: "Get Your IQ Score",
    description:
      "Instantly see your IQ score, percentile ranking, and a detailed breakdown of your cognitive strengths and areas for improvement.",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    score: 138,
    text: "Finally an IQ test that feels legitimate. The breakdown of my cognitive strengths was incredibly detailed and helpful.",
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
    text: "The pattern recognition section of this IQ test was challenging in a way that felt fair, not tricky. Highly recommend.",
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
              href="#about"
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
            Trusted by 2.4M+ IQ test takers worldwide
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Free IQ Test - Discover Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              True Intelligence
            </span>{" "}
            in 20 Minutes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our scientifically validated IQ test and get instant results. This free online IQ test measures your cognitive
            abilities across pattern recognition, logical reasoning, and spatial awareness with no registration required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Take the Free IQ Test
              <ChevronRight className="ml-1 size-4" />
            </Link>
            <Link href="#how-it-works" className={buttonVariants({ size: "lg", variant: "outline", className: "h-12 px-8 text-base" })}>
              How IQ Testing Works
            </Link>
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
            IQ Test Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Our IQ Test Stands Out
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Our IQ test is built with psychometricians and validated against standardized IQ
            benchmarks for maximum accuracy.
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
            How Our IQ Test Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three Simple Steps to Get Your IQ Score
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                  <Badge variant="outline">
                    IQ: {testimonial.score}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* FAQ Section for IQ Test */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            IQ Test FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions About Our IQ Test
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          <div className="border-l-2 border-indigo-500/30 pl-6">
            <h3 className="text-lg font-semibold mb-2">How long does this IQ test take?</h3>
            <p className="text-muted-foreground">
              Our IQ test takes approximately 20 minutes to complete. It consists of 40 scientifically validated questions that progressively increase in difficulty to accurately measure your intelligence quotient.
            </p>
          </div>
          
          <div className="border-l-2 border-indigo-500/30 pl-6">
            <h3 className="text-lg font-semibold mb-2">Is this IQ test really free?</h3>
            <p className="text-muted-foreground">
              Yes, our IQ test is completely free. You get instant results, detailed cognitive breakdown, and percentile ranking without any payment or subscription required. No hidden costs or premium upgrades.
            </p>
          </div>
          
          <div className="border-l-2 border-indigo-500/30 pl-6">
            <h3 className="text-lg font-semibold mb-2">How accurate is this online IQ test?</h3>
            <p className="text-muted-foreground">
              Our IQ test is scientifically validated and calibrated against WAIS and Stanford-Binet scales. Questions are developed by cognitive psychologists and normed against millions of test-takers globally for maximum accuracy.
            </p>
          </div>
          
          <div className="border-l-2 border-indigo-500/30 pl-6">
            <h3 className="text-lg font-semibold mb-2">Do I need to register to take the IQ test?</h3>
            <p className="text-muted-foreground">
              No registration required! You can start the IQ test immediately without creating an account, providing personal information, or downloading any software. Simply click start and begin testing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Discover Your IQ Score?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join 2.4 million people who have taken our free IQ test. Get your results in 20 minutes with detailed cognitive analysis.
          </p>
          <Link href="/test" className={buttonVariants({ size: "lg", className: "mt-8 h-12 px-8 text-base" })}>
            Start Your Free IQ Test Now
            <ChevronRight className="ml-1 size-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 md:grid-cols-4">
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
                The most trusted free IQ test online. Scientifically validated, instant results, no registration required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">IQ Test</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/test" className="text-muted-foreground hover:text-foreground">
                    Free IQ Test
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Test Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">About</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About RiotIQ
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-muted-foreground hover:text-foreground">
                    Scientific Validation
                  </Link>
                </li>
                <li>
                  <Link href="/accuracy" className="text-muted-foreground hover:text-foreground">
                    Test Accuracy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 RiotIQ. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}