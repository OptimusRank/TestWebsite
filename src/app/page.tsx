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
      "Our IQ test questions are developed by cognitive psychologists and calibrated against WAIS and Stanford-Binet intelligence scales for maximum accuracy.",
  },
  {
    icon: Zap,
    title: "Instant IQ Results",
    description:
      "Get your IQ score, percentile ranking, and detailed cognitive breakdown immediately after completing the test. No waiting periods.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive IQ Analysis",
    description:
      "Receive detailed scoring across pattern recognition, logical reasoning, spatial awareness, verbal ability, and working memory components.",
  },
  {
    icon: Shield,
    title: "Free & Private IQ Testing",
    description:
      "Your IQ test results are completely private. We don't sell data or require personal information to take our free intelligence assessment.",
  },
  {
    icon: Globe,
    title: "Global IQ Benchmarking",
    description:
      "Compare your IQ score against millions of test-takers worldwide. Our norming data spans 180+ countries for accurate percentile rankings.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Optimized IQ Test",
    description:
      "Take our IQ test on any device — desktop, tablet, or smartphone. Fully responsive design with touch-friendly interactions for optimal testing.",
  },
]

const steps = [
  {
    number: "01",
    title: "Start Your IQ Test",
    description:
      "No registration required for our free IQ test. Click start and begin immediately. The 20-minute timer starts when you're ready to begin.",
  },
  {
    number: "02",
    title: "Complete 40 IQ Questions",
    description:
      "Work through progressively challenging IQ test questions across pattern recognition, logical reasoning, and spatial intelligence domains.",
  },
  {
    number: "03",
    title: "Get Instant IQ Results",
    description:
      "Immediately receive your IQ score, percentile ranking, and detailed breakdown of cognitive strengths and areas for improvement.",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    score: 138,
    text: "Finally an IQ test that feels legitimate. The cognitive breakdown was incredibly detailed and helped me understand my intellectual strengths.",
    role: "Software Engineer",
  },
  {
    name: "Marcus J.",
    score: 125,
    text: "Took this free IQ test during my lunch break. Clean interface, no spam, and genuinely challenging questions that felt fair.",
    role: "Product Designer",
  },
  {
    name: "Priya R.",
    score: 142,
    text: "The pattern recognition section was challenging but fair. Best free online IQ test I've found with detailed results.",
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
            Free IQ Test - Measure Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Intelligence Score
            </span>{" "}
            in 20 Minutes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Take our scientifically validated IQ test and get instant results. 
            Our online intelligence assessment measures cognitive abilities across 
            pattern recognition, logical reasoning, and spatial awareness. Completely free with detailed breakdown.
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
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {[
            { value: "2.4M+", label: "IQ Tests Completed", icon: Users },
            { value: "40", label: "Test Questions", icon: Brain },
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
            Why Choose Our Online IQ Test
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Our free IQ test is built with psychometricians and validated against 
            standardized intelligence assessment benchmarks.
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
            Three Simple Steps to Your IQ Score
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
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Read real reviews from users who have taken our free online intelligence assessment.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-indigo-500/10">
                    <span className="text-sm font-semibold text-indigo-400">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      IQ Score: {testimonial.score}
                    </div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Common Questions About Our IQ Test
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          <div className="rounded-lg border border-border/50 bg-card/50 p-6">
            <h3 className="text-lg font-semibold mb-3">How long does the IQ test take?</h3>
            <p className="text-muted-foreground">
              Our free online IQ test takes approximately 20 minutes to complete. It consists of 40 scientifically validated questions that progressively increase in difficulty, covering various cognitive domains including pattern recognition, logical reasoning, and spatial awareness.
            </p>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/50 p-6">
            <h3 className="text-lg font-semibold mb-3">Is this IQ test really free?</h3>
            <p className="text-muted-foreground">
              Yes, our IQ test is completely free to take. You'll receive your full IQ score, percentile ranking, and detailed cognitive breakdown without any payment, subscription, or registration required. We believe intelligence testing should be accessible to everyone.
            </p>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/50 p-6">
            <h3 className="text-lg font-semibold mb-3">How accurate is this online IQ test?</h3>
            <p className="text-muted-foreground">
              Our IQ test questions are developed by cognitive psychologists and calibrated against established intelligence scales like WAIS and Stanford-Binet. The assessment measures multiple cognitive domains and has been validated against standardized testing protocols used in professional settings.
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
            Take our free online IQ test now and get your intelligence score in just 20 minutes. 
            Join over 2.4 million people who have discovered their cognitive abilities.
          </p>
          <div className="mt-8">
            <Link href="/test" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Start Your Free IQ Test
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background">
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
              <p className="mt-2 text-sm text-muted-foreground">
                Free online IQ test with instant results. Scientifically validated intelligence assessment trusted by millions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">IQ Test</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/test" className="hover:text-foreground transition-colors">
                    Take Free Test
                  </Link>
                </li>
                <li>
                  <Link href="/sample" className="hover:text-foreground transition-colors">
                    Sample Questions
                  </Link>
                </li>
                <li>
                  <Link href="/scores" className="hover:text-foreground transition-colors">
                    IQ Score Ranges
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Our Test
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 RiotIQ. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}