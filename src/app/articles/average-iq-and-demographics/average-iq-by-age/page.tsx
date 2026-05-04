import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Average IQ by Age: 13 Year Old, Teens & Kids Score Chart",
  description:
    "What's the average IQ for a 13 year old? See complete IQ score chart by age: 10, 12, 13, 14, 15 year olds and teens. Includes percentiles and gender differences.",
  alternates: {
    canonical: "https://www.riotiq.com/articles/average-iq-and-demographics/average-iq-by-age",
  },
  openGraph: {
    title: "Average IQ by Age: 13 Year Old, Teens & Kids Score Chart",
    description:
      "What's the average IQ for a 13 year old? See complete IQ score chart by age: 10, 12, 13, 14, 15 year olds and teens.",
    type: "article",
    url: "https://www.riotiq.com/articles/average-iq-and-demographics/average-iq-by-age",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Average IQ by Age: 13 Year Old, Teens & Kids Score Chart",
  "description":
    "What is the average IQ by age? This guide covers IQ score expectations for children, teenagers, and adults with a detailed age-by-age breakdown.",
  "url": "https://www.riotiq.com/articles/average-iq-and-demographics/average-iq-by-age",
  "publisher": {
    "@type": "Organization",
    "name": "RIOT IQ Test",
    "url": "https://www.riotiq.com",
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.riotiq.com/articles/average-iq-and-demographics/average-iq-by-age",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the average IQ for a 13 year old?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The average IQ for a 13 year old is approximately 100, the same as the population average for all ages. IQ scores are normalized by age group, so a score of 100 always represents the 50th percentile for that age. There is no meaningful difference between boys and girls at this age.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the average IQ for a 12 year old?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The average IQ for a 12 year old is 100. Modern IQ tests are normed so that 100 is the median score at every age. A 12 year old scoring 110 is in the top 25% of their age group.",
      },
    },
    {
      "@type": "Question",
      "name": "Does IQ change with age?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "IQ scores are age-normalized, so by definition the average stays at 100 across age groups. Fluid intelligence (raw reasoning speed) peaks in the mid-20s and gradually declines. Crystallized intelligence (accumulated knowledge and vocabulary) tends to increase through middle age and remains relatively stable into the 60s.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a good IQ score for a 13 year old?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A score of 110 or above is considered above average for a 13 year old. Scores of 120+ place a teenager in the top 10% of their age group. Since IQ tests are age-normed, the same percentile thresholds apply regardless of age.",
      },
    },
  ],
}

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
          <Link href="/articles" className="hover:text-foreground">Articles</Link>
          <span className="mx-2">/</span>
          <span>Average IQ by Age</span>
        </nav>

        <article>
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Average IQ by Age: Complete Score Chart
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              IQ scores are designed so that <strong>100 is the average at every age</strong>. This means the average IQ for a 10 year old, a 13 year old, or a 40 year old is always 100 — because modern IQ tests are normed against each age group separately. What changes with age is the raw cognitive profile, not the normalized score.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How Age Affects IQ Scores</h2>
            <p className="text-muted-foreground mb-4">
              Modern IQ tests — including the Wechsler Intelligence Scale for Children (WISC) and the Stanford-Binet — are <strong>age-normed</strong>. This means your score is always calculated relative to others in your age group, not against the general adult population.
            </p>
            <p className="text-muted-foreground mb-4">
              A 13 year old who solves the same number of problems as the median 13 year old receives a score of 100. A 13 year old who solves significantly more receives a score above 100. The raw number of correct answers required to score 100 increases as children age and develop.
            </p>
            <p className="text-muted-foreground">
              This age-norming is why it is meaningless to directly compare a child's raw score to an adult's — the scales are different. What matters is <strong>percentile rank within the age group</strong>.
            </p>
          </section>

          {/* Age chart table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Average IQ Score by Age: Quick Reference Chart</h2>
            <p className="text-muted-foreground mb-4">
              The table below shows the expected IQ score distribution for each age group. Because tests are normed by age, the <em>average score is always 100</em> — but the percentile cutoffs for "above average" and "gifted" remain consistent.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-4 py-3 text-left font-semibold">Age Group</th>
                    <th className="px-4 py-3 text-left font-semibold">Average IQ Score</th>
                    <th className="px-4 py-3 text-left font-semibold">Above Average (Top 25%)</th>
                    <th className="px-4 py-3 text-left font-semibold">Superior (Top 10%)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["6–9 years", "100", "110+", "120+"],
                    ["10–11 years", "100", "110+", "120+"],
                    ["12 years", "100", "110+", "120+"],
                    ["13 years", "100", "110+", "120+"],
                    ["14 years", "100", "110+", "120+"],
                    ["15–17 years", "100", "110+", "120+"],
                    ["18–29 years (peak fluid IQ)", "100", "110+", "120+"],
                    ["30–49 years", "100", "110+", "120+"],
                    ["50–64 years", "100", "110+", "120+"],
                    ["65+ years", "100", "110+", "120+"],
                  ].map(([age, avg, above, superior]) => (
                    <tr key={age} className="border-b border-border/30 hover:bg-muted/20">
                      <td className="px-4 py-3 font-medium">{age}</td>
                      <td className="px-4 py-3">{avg}</td>
                      <td className="px-4 py-3">{above}</td>
                      <td className="px-4 py-3">{superior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Source: Wechsler Intelligence Scales norming data. IQ tests use a standard deviation of 15 points.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Average IQ for a 13 Year Old</h2>
            <p className="text-muted-foreground mb-4">
              The average IQ for a 13 year old is <strong>100</strong> — exactly the population norm. This is the most searched age group, likely because many teenagers are curious about where they stand academically.
            </p>
            <p className="text-muted-foreground mb-4">
              For 13 year olds, here is what different IQ scores mean in context:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>Below 85:</strong> Below average — about 16% of 13 year olds</li>
              <li><strong>85–99:</strong> Low average — about 34% of 13 year olds</li>
              <li><strong>100–114:</strong> Average to above average — about 34% of 13 year olds</li>
              <li><strong>115–129:</strong> Superior — about 13% of 13 year olds</li>
              <li><strong>130+:</strong> Gifted — about 2% of 13 year olds</li>
            </ul>
            <p className="text-muted-foreground">
              There is <strong>no meaningful IQ difference between boys and girls</strong> at age 13. Research consistently finds no significant average difference in general intelligence between sexes at any age, though there are small differences in specific cognitive profiles.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Average IQ for a 12 Year Old</h2>
            <p className="text-muted-foreground mb-4">
              Like all age groups, the average IQ for a 12 year old is <strong>100</strong>. At age 12, children are typically assessed using the WISC-V (Wechsler Intelligence Scale for Children, 5th edition), which measures verbal comprehension, visual-spatial ability, fluid reasoning, working memory, and processing speed.
            </p>
            <p className="text-muted-foreground">
              A 12 year old scoring 120 on a properly normed test is performing at the 91st percentile for their age group — well above average regardless of what an adult scoring 120 would represent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Average IQ for a 14 and 15 Year Old</h2>
            <p className="text-muted-foreground mb-4">
              At ages 14 and 15, teenagers are in late adolescence and the gap between child and adult IQ test norms begins to narrow. The average IQ score remains <strong>100</strong> for both groups.
            </p>
            <p className="text-muted-foreground mb-4">
              By age 15–16, many teenagers perform near their adult ceiling on fluid reasoning tasks. Fluid intelligence — the ability to reason about new problems without relying on prior knowledge — peaks in the mid-20s for most people.
            </p>
            <p className="text-muted-foreground">
              Practically speaking, a 15 year old with a measured IQ of 130 should expect that score to remain relatively stable into adulthood, barring significant changes in environment or health.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Does IQ Change With Age?</h2>
            <p className="text-muted-foreground mb-4">
              IQ scores (as normalized numbers) do not systematically change with age, because the norm is recalculated for each age group. However, the <em>underlying cognitive abilities</em> do shift:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>Fluid intelligence</strong> (novel reasoning, processing speed) peaks around ages 25–35 and declines gradually.</li>
              <li><strong>Crystallized intelligence</strong> (vocabulary, general knowledge, verbal reasoning) increases through middle age and remains stable until the late 60s or 70s.</li>
              <li><strong>Working memory</strong> begins declining gradually from the late 20s onward.</li>
            </ul>
            <p className="text-muted-foreground">
              This means a person's IQ score at age 13 is a reasonable — though imperfect — predictor of their adult IQ score. Studies suggest the correlation between childhood and adult IQ is approximately 0.70–0.80.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What Is a Good IQ Score for a Teenager?</h2>
            <p className="text-muted-foreground mb-4">
              For any teenager, the same IQ classification bands apply as for adults, since the test is normed by age:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border/50 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-4 py-3 text-left font-semibold">IQ Score Range</th>
                    <th className="px-4 py-3 text-left font-semibold">Classification</th>
                    <th className="px-4 py-3 text-left font-semibold">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["130+", "Gifted / Very Superior", "Top 2%"],
                    ["120–129", "Superior", "Top 9%"],
                    ["110–119", "Above Average", "Top 25%"],
                    ["90–109", "Average", "25th–75th percentile"],
                    ["80–89", "Low Average", "Bottom 25%"],
                    ["Below 80", "Below Average", "Bottom 9%"],
                  ].map(([score, label, pct]) => (
                    <tr key={score} className="border-b border-border/30 hover:bg-muted/20">
                      <td className="px-4 py-3 font-medium">{score}</td>
                      <td className="px-4 py-3">{label}</td>
                      <td className="px-4 py-3">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">
              For more detail on what each score range means, see our full guide to the{" "}
              <Link href="/articles/iq-scores-and-interpretation/what-is-the-iq-scale-range" className="text-indigo-400 hover:underline">
                IQ scale and score ranges
              </Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Find Out Your IQ Score</h2>
            <p className="text-muted-foreground mb-4">
              The most reliable way to measure IQ is through a formal assessment by a licensed psychologist using the WISC-V (for children under 16) or WAIS-IV (for adults). These tests take 60–90 minutes and produce a comprehensive cognitive profile.
            </p>
            <p className="text-muted-foreground mb-4">
              A free online IQ test can provide a useful estimate of your cognitive abilities. The RIOT (Reasoning and Intelligence Online Test) measures pattern recognition, logical reasoning, and spatial awareness across 40 questions calibrated against standardized norms.
            </p>
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-6 text-center">
              <p className="font-semibold mb-3">Ready to test your IQ?</p>
              <Link
                href="/assessments/free-iq-test"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                Take the Free RIOT IQ Test →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">What is the average IQ for a 13 year old boy vs girl?</h3>
                <p className="text-sm text-muted-foreground">There is no statistically significant difference in average IQ between 13 year old boys and girls. Both groups average 100 on properly normed IQ tests. Some studies show small differences in specific sub-skills (boys slightly higher on spatial tasks, girls slightly higher on verbal tasks), but overall IQ scores are equivalent.</p>
              </div>
              <div className="border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">Is a 13 year old's IQ score reliable?</h3>
                <p className="text-sm text-muted-foreground">IQ scores become more stable with age. A score measured at age 13 is a moderate predictor of adult IQ (correlation ~0.70). Scores measured before age 10 are less stable. Environmental factors — nutrition, education, stress — can shift IQ by 5–15 points during development.</p>
              </div>
              <div className="border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">What IQ score is considered gifted for a teenager?</h3>
                <p className="text-sm text-muted-foreground">Most gifted programs use a threshold of 130 or above (top 2% for the age group). Some use 125+ (top 5%). Mensa accepts the top 2%, which corresponds to an IQ of approximately 132 on most standardized tests.</p>
              </div>
              <div className="border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">What is the normal IQ range for children?</h3>
                <p className="text-sm text-muted-foreground">For children of any age, a score of 85–115 is considered the "normal" or average range, capturing about 68% of all children. Scores of 70–84 are below average but not intellectually disabled. Scores of 116–129 are above average, and 130+ is gifted.</p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="text-lg font-semibold mb-4">Related Articles</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles/iq-scores-and-interpretation/what-is-the-iq-scale-range" className="text-indigo-400 hover:underline">
                  What Is the IQ Scale? Full Range and Classification Guide
                </Link>
              </li>
              <li>
                <Link href="/articles/average-iq-and-demographics/what-is-the-average-iq-in-the-usa" className="text-indigo-400 hover:underline">
                  What Is the Average IQ in the USA?
                </Link>
              </li>
              <li>
                <Link href="/articles/average-iq-and-demographics/what-is-the-average-iq-in-india" className="text-indigo-400 hover:underline">
                  What Is the Average IQ in India?
                </Link>
              </li>
              <li>
                <Link href="/articles/iq-scores-and-interpretation/understanding-iq-score-scales-a-complete-guide" className="text-indigo-400 hover:underline">
                  Understanding IQ Score Scales: A Complete Guide
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}