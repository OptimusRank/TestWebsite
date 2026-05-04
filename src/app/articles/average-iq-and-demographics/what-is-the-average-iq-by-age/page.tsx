import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Average IQ by Age (5–18 & Adults): Chart & What's Normal",
  description:
    "The average IQ is 100 at every age — but what's considered normal varies. See our age-by-age IQ chart for children (5–18), teenagers, and adults with percentile breakdowns.",
  alternates: {
    canonical: "https://www.riotiq.com/articles/average-iq-and-demographics/what-is-the-average-iq-by-age",
  },
  openGraph: {
    title: "Average IQ by Age (5–18 & Adults): Chart & What's Normal",
    description:
      "What is the average IQ for a 13-year-old? For adults? See our complete IQ by age chart with score ranges and percentile rankings.",
    url: "https://www.riotiq.com/articles/average-iq-and-demographics/what-is-the-average-iq-by-age",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Average IQ by Age (5–18 & Adults): Chart & What's Normal",
  description:
    "A complete guide to average IQ scores by age, including children, teenagers, and adults, with IQ range charts and percentile data.",
  url: "https://www.riotiq.com/articles/average-iq-and-demographics/what-is-the-average-iq-by-age",
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
      name: "What is the average IQ for a 13 year old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for a 13-year-old is 100. IQ tests are age-normed, meaning 100 always represents the median score for any specific age group. A score between 85 and 115 is considered average for a 13-year-old. Scores above 130 are considered gifted.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for a 12 year old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for a 12-year-old is 100. IQ is age-standardized, so the average is always 100 regardless of age. A 12-year-old with a score of 85–115 is in the normal range.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for a 14 year old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for a 14-year-old is 100. Like all ages, IQ tests are normed so that 100 is always the median. A score between 90 and 110 is squarely average for a 14-year-old.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for a 15 year old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for a 15-year-old is 100. By age 15, IQ scores are approaching adult stability. A score of 85–115 is average, and anything above 130 is considered highly gifted.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good IQ score for a 13 year old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good IQ score for a 13-year-old is anything above 110, which puts them in the top 25% of their age group. A score above 120 is very good (top 10%), and above 130 is exceptional (top 2%).",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for a teenager?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for teenagers (ages 12–17) is 100. IQ scores are always normed to 100 for the relevant age group. IQ tends to stabilize by the mid-teens and remains relatively consistent into adulthood.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for adults is 100, with a standard deviation of 15. About 68% of adults score between 85 and 115. IQ typically peaks in the mid-20s and remains stable through middle age, with some specific cognitive abilities declining in older age.",
      },
    },
    {
      "@type": "Question",
      name: "Does IQ change with age?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IQ scores are age-normed, so your score relative to your peers stays consistent even as raw cognitive ability changes with age. Raw cognitive ability (fluid intelligence) peaks in the mid-20s. Crystallized intelligence — accumulated knowledge — tends to increase through middle age. Overall IQ scores may decline modestly after age 70.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for a 10 year old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for a 10-year-old is 100. Because IQ tests are normed by age group, 100 always represents the median for 10-year-olds. A score between 85 and 115 is the typical range.",
      },
    },
    {
      "@type": "Question",
      name: "What is a normal IQ score by age 25?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A normal IQ score for a 25-year-old is 85–115. By age 25, cognitive ability has typically reached its peak. The average is 100, and scores in this range are completely normal. Fluid intelligence (pattern recognition, working memory) peaks around ages 20–30.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ of a child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ of a child is 100, regardless of specific age. IQ tests for children are separately normed for each age, so a 7-year-old and a 15-year-old both have an average of 100. An IQ between 85 and 115 is within the normal range at any age.",
      },
    },
    {
      "@type": "Question",
      name: "Do boys and girls have the same average IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, boys and girls have the same average IQ of 100. Research consistently shows no significant difference in mean IQ between males and females. However, studies do find greater variance in male scores — more males at both the very low and very high ends of the distribution.",
      },
    },
  ],
};

const iqByAgeData = [
  { age: "5–6", avgIQ: "100", range: "85–115", notes: "Pre-reading; pattern & memory tasks" },
  { age: "7–8", avgIQ: "100", range: "85–115", notes: "Logical sequencing develops" },
  { age: "9–10", avgIQ: "100", range: "85–115", notes: "Abstract reasoning begins" },
  { age: "11–12", avgIQ: "100", range: "85–115", notes: "Verbal and spatial skills diverge" },
  { age: "13–14", avgIQ: "100", range: "85–115", notes: "Fluid intelligence peaks in teens" },
  { age: "15–16", avgIQ: "100", range: "85–115", notes: "Approaching adult-level cognition" },
  { age: "17–18", avgIQ: "100", range: "85–115", notes: "Near-adult IQ stability" },
  { age: "20–29", avgIQ: "100", range: "85–115", notes: "Peak fluid intelligence" },
  { age: "30–44", avgIQ: "100", range: "85–115", notes: "Crystallized intelligence grows" },
  { age: "45–59", avgIQ: "100", range: "85–115", notes: "Stable; vocabulary gains offset speed loss" },
  { age: "60–74", avgIQ: "98", range: "83–113", notes: "Processing speed begins to decline" },
  { age: "75+", avgIQ: "95", range: "80–110", notes: "Working memory and fluid IQ decrease" },
];

const iqRangeData = [
  { range: "Below 70", classification: "Intellectual disability", percentile: "Bottom 2.3%" },
  { range: "70–84", classification: "Borderline", percentile: "2nd–14th" },
  { range: "85–114", classification: "Average", percentile: "15th–84th" },
  { range: "115–129", classification: "Above average / Bright", percentile: "85th–97th" },
  { range: "130–144", classification: "Gifted / Highly intelligent", percentile: "98th–99.7th" },
  { range: "145+", classification: "Profoundly gifted", percentile: "Top 0.1%" },
];

export default function AverageIQByAgePage() {
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
          <Link href="/articles/average-iq-and-demographics" className="hover:text-foreground">Average IQ & Demographics</Link>
          <span className="mx-2">/</span>
          <span>Average IQ by Age</span>
        </nav>

        <article>
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Average IQ by Age: Complete Chart for Children, Teens & Adults
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              The average IQ is 100 at every age — but what does that mean for a 13-year-old vs. a 30-year-old? Here&apos;s everything you need to know.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Updated May 2025 · 10 min read</p>
          </header>

          <section className="prose prose-invert max-w-none">

            <h2>The Key Fact About IQ and Age</h2>
            <p>
              IQ tests are <strong>age-normed</strong> — this means the average score is always 100, regardless of whether you&apos;re testing a 10-year-old or a 40-year-old. The test measures your performance relative to your age group, not against a universal fixed scale.
            </p>
            <p>
              A 13-year-old who scores 115 and a 35-year-old who scores 115 are both equally above average for their respective age groups. This is why asking "what is the average IQ for a 13 year old?" always has the same answer: <strong>100</strong>.
            </p>

            <h2>Average IQ by Age Chart</h2>
            <p>
              The table below shows average IQ scores, typical score ranges, and key developmental notes for each age group. Because tests are age-normed, the average and range columns are consistent — what changes are the cognitive tasks emphasized and how raw scores are interpreted.
            </p>
          </section>

          {/* Age Table */}
          <div className="my-8 overflow-x-auto rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Age Group</th>
                  <th className="px-4 py-3 text-left font-semibold">Average IQ</th>
                  <th className="px-4 py-3 text-left font-semibold">Normal Range</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {iqByAgeData.map((row, i) => (
                  <tr key={row.age} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 font-medium">{row.age}</td>
                    <td className="px-4 py-3">{row.avgIQ}</td>
                    <td className="px-4 py-3">{row.range}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="prose prose-invert max-w-none">

            <h2>What Is a Good IQ Score for a Teenager?</h2>
            <p>
              For any teenager (ages 12–17), IQ scores are interpreted the same way as for any age group:
            </p>
            <ul>
              <li><strong>Below 85:</strong> Below average for their age group</li>
              <li><strong>85–114:</strong> Average — this is where roughly 68% of teenagers fall</li>
              <li><strong>115–129:</strong> Above average / bright — top 15%</li>
              <li><strong>130+:</strong> Gifted — top 2%, often qualifies for gifted programs</li>
            </ul>
            <p>
              A 13-year-old with an IQ of 120 is in the top 10% of 13-year-olds. A 13-year-old with an IQ of 100 is exactly average — neither behind nor ahead of their peers.
            </p>

            <h2>IQ Score Ranges Explained</h2>
            <p>The following table shows standard IQ classification ranges used across major IQ tests (WAIS, Stanford-Binet, RIOT):</p>
          </section>

          {/* Range Table */}
          <div className="my-8 overflow-x-auto rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">IQ Range</th>
                  <th className="px-4 py-3 text-left font-semibold">Classification</th>
                  <th className="px-4 py-3 text-left font-semibold">Percentile</th>
                </tr>
              </thead>
              <tbody>
                {iqRangeData.map((row, i) => (
                  <tr key={row.range} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 font-medium">{row.range}</td>
                    <td className="px-4 py-3">{row.classification}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.percentile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="prose prose-invert max-w-none">

            <h2>Does IQ Change as You Get Older?</h2>
            <p>
              IQ is relatively stable across most of adulthood, but there are important nuances:
            </p>
            <p>
              <strong>Fluid intelligence</strong> — the ability to reason about new problems without relying on learned knowledge — peaks in the mid-20s and gradually declines. This is why pattern recognition and working memory tasks become harder with age.
            </p>
            <p>
              <strong>Crystallized intelligence</strong> — knowledge accumulated from experience and education — typically increases through middle age and remains stable until late in life.
            </p>
            <p>
              Because IQ tests measure a combination of fluid and crystallized intelligence, overall IQ scores tend to remain stable between ages 20 and 65. After 70, scores may decline modestly as fluid intelligence loss outpaces crystallized gains.
            </p>

            <h2>Do Boys and Girls Have the Same Average IQ?</h2>
            <p>
              Yes. Decades of research find no meaningful difference in average IQ between males and females. Both groups average 100.
            </p>
            <p>
              However, studies consistently find greater <em>variance</em> in male scores — meaning more males score at both the very low end (below 70) and the very high end (above 145). Female scores cluster more tightly around the average. This variance difference is well-documented but its causes are debated among researchers.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>What is the average IQ for a 13 year old girl?</h3>
            <p>The average IQ for a 13-year-old girl is 100, the same as for 13-year-old boys. Girls and boys have the same average IQ at every age.</p>

            <h3>What is the average IQ for a 13 year old boy?</h3>
            <p>The average IQ for a 13-year-old boy is 100. A score of 85–115 is the normal range. Scores above 130 at any age are in the gifted category.</p>

            <h3>What is the average IQ for a 12 year old?</h3>
            <p>The average IQ for a 12-year-old is 100. Like all ages, IQ tests are standardized to have a mean of 100 for that specific age group.</p>

            <h3>What is considered a normal IQ for a teenager?</h3>
            <p>A normal IQ for a teenager is between 85 and 115. This range covers roughly 68% of all teenagers. A score of 90–110 is squarely average.</p>

            <h3>At what age is IQ fully developed?</h3>
            <p>IQ typically stabilizes by the mid-teens to early 20s. After age 25, IQ scores remain relatively consistent throughout adulthood, with only modest changes occurring in older age.</p>

          </section>

          {/* CTA */}
          <div className="mt-16 rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-8 text-center">
            <h2 className="text-xl font-bold">Find Out Your Own IQ Score</h2>
            <p className="mt-2 text-muted-foreground">
              Curious where you rank? Take the free RIOT IQ Test — 40 questions, 20 minutes, instant results with a full age-normed score and percentile ranking.
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
                <Link href="/articles/iq-scores-and-interpretation/understanding-iq-score-scales-a-complete-guide" className="hover:text-foreground">
                  Understanding IQ Score Scales: A Complete Guide
                </Link>
              </li>
              <li>
                <Link href="/articles/iq-scores-and-interpretation/what-is-the-iq-scale-range" className="hover:text-foreground">
                  What Is the IQ Scale Range?
                </Link>
              </li>
              <li>
                <Link href="/articles/average-iq-and-demographics/what-is-the-average-iq-in-the-usa" className="hover:text-foreground">
                  What Is the Average IQ in the USA?
                </Link>
              </li>
              <li>
                <Link href="/articles/advanced-topics-and-research/do-males-and-females-have-the-same-distribution-of-iq-scores-" className="hover:text-foreground">
                  Do Males and Females Have the Same IQ Distribution?
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
