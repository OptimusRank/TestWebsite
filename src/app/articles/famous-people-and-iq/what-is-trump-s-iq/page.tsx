import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Donald Trump's IQ? Estimates, Evidence & Analysis",
  description:
    "Donald Trump's IQ has never been officially tested, but SAT-based estimates suggest 130–145. We examine the evidence, expert assessments, and presidential comparisons.",
  alternates: {
    canonical: "https://www.riotiq.com/articles/famous-people-and-iq/what-is-trump-s-iq",
  },
  openGraph: {
    title: "What Is Donald Trump's IQ? Estimates, Evidence & Analysis",
    description:
      "Trump's IQ has never been publicly tested. SAT-based estimates range from 130 to 145. Here's what the evidence actually shows.",
    url: "https://www.riotiq.com/articles/famous-people-and-iq/what-is-trump-s-iq",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Donald Trump's IQ? Estimates, Evidence & Analysis",
  description:
    "An evidence-based look at Donald Trump's estimated IQ, based on SAT score analysis, expert cognitive assessments, and comparison with other U.S. presidents.",
  url: "https://www.riotiq.com/articles/famous-people-and-iq/what-is-trump-s-iq",
  datePublished: "2024-06-01",
  dateModified: "2025-05-01",
  publisher: {
    "@type": "Organization",
    name: "RIOT IQ Test",
    url: "https://www.riotiq.com",
  },
  author: {
    "@type": "Organization",
    name: "RIOT IQ Test Editorial Team",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Donald Trump's IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donald Trump has never taken a publicly verified IQ test. Based on his reported SAT score of approximately 1200 (out of 1600 in the old format), researchers estimate his IQ at roughly 130–145. Some analysts place the estimate lower, around 120–128, while Trump himself has claimed his IQ is 'one of the highest.' Without a verified clinical assessment, no definitive number exists.",
      },
    },
    {
      "@type": "Question",
      name: "Has Donald Trump ever taken an IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No verified public IQ test result exists for Donald Trump. Trump has repeatedly claimed to have a high IQ and challenged political rivals to IQ tests, but he has never released a formal, clinically administered test result.",
      },
    },
    {
      "@type": "Question",
      name: "Which U.S. president had the highest IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to estimates by psychologist Dean Simonton, who studied presidential intelligence through historical records, John Quincy Adams and Thomas Jefferson are typically ranked among the highest, with estimated IQs around 165–175. Bill Clinton is estimated around 148–157. These are retrospective estimates, not clinical measurements.",
      },
    },
    {
      "@type": "Question",
      name: "What is Trump's IQ compared to other presidents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If Trump's IQ is in the 130–145 range, he would rank in the upper tier of presidents but below those estimated at 148+ (Clinton, Jefferson, Adams). Most presidents are estimated to have IQs well above the general population average of 100, typically in the 120–160 range.",
      },
    },
    {
      "@type": "Question",
      name: "Does Trump have a high IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By most estimates, yes. Even conservative estimates place Trump's IQ around 120–130, which is in the top 10% of the population. More generous estimates based on SAT analysis put him at 130–145, which is in the top 2%. However, psychologists note that IQ measures cognitive ability in specific domains and is not a complete measure of intelligence or competence.",
      },
    },
    {
      "@type": "Question",
      name: "What is a 130 IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IQ of 130 places a person in the top 2.3% of the population. This is the threshold for 'gifted' classification on many standardized scales. Scores above 130 are considered highly intelligent, and above 145 is considered profoundly gifted, placing a person in roughly the top 0.1%.",
      },
    },
  ],
};

export default function TrumpIQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/articles/famous-people-and-iq" className="hover:text-foreground">Famous People & IQ</Link>
          <span className="mx-2">/</span>
          <span>Trump's IQ</span>
        </nav>

        <article>
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              What Is Donald Trump&apos;s IQ?
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Estimates, evidence, and what experts actually say about the 47th U.S. president&apos;s intelligence.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Updated May 2025 · 8 min read
            </p>
          </header>

          <section className="prose prose-invert max-w-none">
            <h2>The Short Answer</h2>
            <p>
              Donald Trump has never taken a publicly verified, clinically administered IQ test. Based on his reported SAT score and analyses by cognitive researchers, most estimates place his IQ somewhere between <strong>130 and 145</strong> — well above average, but below the extraordinary numbers he himself has claimed.
            </p>
            <p>
              Trump has repeatedly stated that he has "one of the highest IQs" and has challenged political rivals to IQ contests. He scored in the top percentile at Wharton School of the University of Pennsylvania, which his supporters often cite as evidence of exceptional intelligence. Critics, including psychologists who have analyzed his public behavior and speech patterns, offer more nuanced assessments.
            </p>

            <h2>What the SAT Score Evidence Suggests</h2>
            <p>
              The most commonly used method for estimating Trump&apos;s IQ is a conversion from his SAT score. Trump took the SAT in the early 1960s, when the test was scored out of 1600. Various researchers and journalists have reported his score as approximately 1200, though Trump himself has not confirmed or denied this figure.
            </p>
            <p>
              Using the College Board&apos;s old SAT-to-IQ conversion tables, a score of 1200 on the pre-1995 SAT correlates to an IQ of approximately <strong>124–130</strong>. Some researchers applying different conversion models arrive at estimates as high as 145.
            </p>
            <p>
              Economist Noah Smith, writing in The New York Times in 2025, estimated Musk&apos;s IQ similarly from SAT data at "more than 130" — the same methodology applied to Trump produces a comparable range.
            </p>

            <h2>What a 130 IQ Actually Means</h2>
            <p>
              An IQ of 130 places a person in the <strong>top 2.3% of the population</strong>. On the standard IQ scale:
            </p>
            <ul>
              <li><strong>Below 70:</strong> Intellectual disability</li>
              <li><strong>70–84:</strong> Borderline</li>
              <li><strong>85–114:</strong> Average</li>
              <li><strong>115–129:</strong> Above average / bright</li>
              <li><strong>130–144:</strong> Gifted / highly intelligent</li>
              <li><strong>145+:</strong> Profoundly gifted (top 0.1%)</li>
            </ul>
            <p>
              If Trump&apos;s IQ is in the 130–145 range, he would rank among the more intellectually capable U.S. presidents — though not at the top of historical estimates.
            </p>

            <h2>Trump&apos;s IQ Compared to Other Presidents</h2>
            <p>
              Psychologist Dean Simonton of UC Davis spent decades studying U.S. presidential intelligence using historical records, speeches, and contemporaneous accounts. His widely-cited research ranks presidents by estimated IQ:
            </p>
            <ul>
              <li><strong>John Quincy Adams:</strong> ~165 (estimated)</li>
              <li><strong>Thomas Jefferson:</strong> ~160 (estimated)</li>
              <li><strong>Bill Clinton:</strong> ~148–157 (estimated)</li>
              <li><strong>Barack Obama:</strong> ~130–145 (estimated)</li>
              <li><strong>George W. Bush:</strong> ~120–130 (estimated)</li>
              <li><strong>Donald Trump:</strong> ~130–145 (estimated, SAT-based)</li>
            </ul>
            <p>
              These are estimates — not clinically verified scores. Simonton himself stresses that his rankings are probabilistic, not definitive.
            </p>

            <h2>Expert Assessments: Cognitive Style vs. Raw IQ</h2>
            <p>
              Several psychologists who have studied Trump&apos;s public behavior distinguish between raw cognitive ability and cognitive style. A BBC analysis cited Dr. David Dunning (of the Dunning-Kruger effect) and other researchers who noted that Trump "scores low on cognitive style, vision, and organisational capacity" — traits not directly measured by IQ tests.
            </p>
            <p>
              IQ tests measure specific cognitive domains: pattern recognition, logical reasoning, spatial awareness, and verbal ability. They do not measure emotional intelligence, judgment, creativity, or leadership competence. Trump may score well on raw reasoning tasks while displaying different characteristics in domains IQ doesn&apos;t capture.
            </p>

            <h2>Has Trump Ever Actually Taken an IQ Test?</h2>
            <p>
              No verified public result exists. Trump took cognitive screening tests — which are not the same as full IQ assessments — during his first term as president. In 2018, he scored a perfect 30/30 on the Montreal Cognitive Assessment (MoCA), which screens for dementia and cognitive impairment. He described this as evidence of his intelligence, though the MoCA is not an IQ test and does not measure general intelligence.
            </p>
            <p>
              A full, clinically administered IQ test (such as the WAIS-IV) typically takes 60–90 minutes and requires a trained psychologist. No president has publicly released the results of such a test.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>What is Donald Trump&apos;s estimated IQ score?</h3>
            <p>
              Estimates range from 120 to 145, with most SAT-based analyses landing around 130. Trump himself has claimed a higher figure but has never released clinical test results.
            </p>

            <h3>What is Trump&apos;s IQ compared to other presidents?</h3>
            <p>
              If his IQ is ~130–145, Trump ranks in the upper half of presidents by estimated intelligence — above George W. Bush (~120) but below Clinton (~148–157) and historical figures like Jefferson and Adams (~160+).
            </p>

            <h3>Does a high IQ make someone a good president?</h3>
            <p>
              Research suggests only a weak correlation between IQ and presidential effectiveness. Emotional intelligence, judgment, and communication skills are also strong predictors. Some of the highest-rated U.S. presidents in historical surveys had average estimated IQs.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-8 text-center">
            <h2 className="text-xl font-bold">What&apos;s Your IQ?</h2>
            <p className="mt-2 text-muted-foreground">
              Take the free RIOT IQ test and find out where you rank. 40 questions, 20 minutes, instant results.
            </p>
            <Link
              href="/test"
              className="mt-4 inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
            >
              Take the Free IQ Test →
            </Link>
          </div>

          {/* Internal links */}
          <nav className="mt-12">
            <h2 className="mb-4 text-lg font-semibold">Related Articles</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/articles/famous-people-and-iq/what-is-elon-musk-s-iq" className="hover:text-foreground">
                  What Is Elon Musk&apos;s IQ? SAT Evidence & Estimates
                </Link>
              </li>
              <li>
                <Link href="/articles/iq-scores-and-interpretation/what-is-the-iq-scale-range" className="hover:text-foreground">
                  The IQ Scale Range: What Every Score Means
                </Link>
              </li>
              <li>
                <Link href="/articles/iq-scores-and-interpretation/understanding-iq-score-scales-a-complete-guide" className="hover:text-foreground">
                  Understanding IQ Score Scales: A Complete Guide
                </Link>
              </li>
              <li>
                <Link href="/articles/average-iq-and-demographics/what-is-the-average-iq-by-age" className="hover:text-foreground">
                  Average IQ by Age: What&apos;s Normal for Your Age Group?
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
