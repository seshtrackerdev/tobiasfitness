import { Header } from "./Header";

export function HomePage() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      // Dynamically calculate header height
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 60;
      
      // Add a small buffer for better spacing
      const headerOffset = headerHeight + 16; // 16px buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="border-b border-slate-800 bg-[#050509]">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center lg:px-6 lg:py-16">
            {/* Left */}
            <div className="max-w-xl space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                Rhode Island · 1:1 strength coaching
              </p>
              <h1 className="text-[2.4rem] font-semibold tracking-tight sm:text-[2.8rem] lg:text-[3rem]">
                No ego.
                <span className="text-slate-300"> No hype.</span>
                <br />
                Just work you can actually stick with.
              </h1>
              <p className="text-[14px] text-slate-300">
                1:1 training with <span className="font-medium text-slate-100">Tobias Ledoux</span> for people who want
                to get stronger, feel better in their body, and stop restarting the same program every few months.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--deep-purple)] px-5 py-2.5 text-[13px] font-semibold text-slate-50"
                >
                  Talk to Tobias
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollTo(e, "#pricing")}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-[#090915] px-4 py-2 text-[13px] font-medium text-slate-100"
                >
                  See prices
                </a>
                <span className="text-[11px] text-slate-500">Sessions from $75 · Weekly plans available</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-200">
                <span className="rounded-full border border-slate-700 bg-[#090915] px-3 py-1">
                  New to lifting
                </span>
                <span className="rounded-full border border-slate-700 bg-[#090915] px-3 py-1">
                  Coming back after time off
                </span>
                <span className="rounded-full border border-slate-700 bg-[#090915] px-3 py-1">
                  Busy / low bandwidth
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:flex lg:flex-1 lg:justify-end">
              <div className="w-full max-w-sm space-y-4">
                <div className="rounded-xl border border-slate-800 bg-[#080814] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                    Quick snapshot
                  </p>
                  <dl className="mt-3 space-y-2 text-[13px]">
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-slate-400">Location</dt>
                      <dd className="font-medium text-slate-100">Rhode Island (gyms TBC)</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-slate-400">Focus</dt>
                      <dd className="font-medium text-slate-100">Strength, confidence, consistency</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-slate-400">Single session</dt>
                      <dd className="font-medium text-slate-100">$75</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-slate-400">Weekly plans</dt>
                      <dd className="font-medium text-slate-100">$75–$250 / wk</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-xl border border-slate-800 bg-[#050509] p-4 text-[12px] text-slate-300">
                  <p className="font-medium text-slate-100">Real talk:</p>
                  <p className="mt-2">
                    Tobias works best with people who are a little tired of fitness content and just want a human who
                    will meet them where they are, set a plan, and keep them moving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-slate-800 bg-[#050509]">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:px-6 lg:py-16">
            <div className="lg:w-7/12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Who is Tobias?</p>
              <h2 className="mt-2 text-[1.7rem] font-semibold tracking-tight">
                A trainer who actually
                <span className="text-slate-300"> pays attention</span> to you, not just the clock.
              </h2>
              <p className="mt-4 text-[14px] text-slate-300">
                Tobias is a Rhode Island based coach who is focused on helping you get stronger, look better over time,
                and actually make week‑to‑week progress. His style is calm, straightforward, and focused on making
                training feel like something you can keep doing long term.
              </p>
              <p className="mt-3 text-[14px] text-slate-300">
                Sessions are built around a few key lifts, movements that feel good in your body, and tiny tweaks week
                by week instead of constant program hopping.
              </p>

              <div className="mt-6 grid gap-4 text-[13px] text-slate-200 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-[#080814] p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Great fit if</p>
                  <p className="mt-2">
                    You want someone to think about the plan so you can just show up, lift, and go live your life.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-[#080814] p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Not really his lane</p>
                  <p className="mt-2">
                    Endless hardcore shredding, daily weigh-ins, or high‑intensity drill‑sergeant style coaching.
                    Expect honesty and accountability, not drama.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="lg:w-5/12">
              <div className="relative h-full rounded-xl border border-slate-800 bg-[#080814] p-4">
                <div className="pointer-events-none absolute inset-0 rounded-xl border border-[var(--neon-green)]/10"></div>
                <div className="flex h-full flex-col justify-between gap-4">
                  <div className="aspect-[4/3] w-full rounded-lg border border-slate-700 bg-[#050509]">
                    <div className="flex h-full items-center justify-center text-[11px] text-slate-500">
                      Drop a photo of Tobias here later.
                    </div>
                  </div>
                  <p className="text-[12px] text-slate-300">
                    A short personal background or story can go here once you're ready to include it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COACHING OPTIONS */}
        <section id="coaching" className="border-b border-slate-800 bg-[#050509]">
          <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  How you can work with him
                </p>
                <h2 className="mt-2 text-[1.7rem] font-semibold tracking-tight">Keep it simple, keep it weekly.</h2>
              </div>
              <p className="max-w-xl text-[14px] text-slate-300">
                Everything starts with a short call to talk about your schedule, training history, and what a clear win
                in the next few months would look like.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
              {/* Weekly coaching */}
              <article className="flex flex-col rounded-lg border border-[var(--deep-purple)] bg-[#080814] p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">Weekly 1:1 coaching</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">Main way he works</p>
                  </div>
                  <span className="rounded-full bg-[#050509] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                    Most people
                  </span>
                </div>
                <p className="mt-3 text-[13px] text-slate-300">
                  You pick 1–3 days a week that make sense. You show up. You lift. You adjust as life happens. The goal
                  is not a perfect streak, it is to stop falling completely off.
                </p>
                <ul className="mt-4 flex-1 space-y-1.5 text-[12px] text-slate-300">
                  <li>• Clear warm up, main lifts, and accessories.</li>
                  <li>• Built around your joints, energy, and schedule.</li>
                  <li>• Progress tracked in ways that matter to you.</li>
                </ul>
                <p className="mt-4 text-[11px] text-slate-500">
                  Typically between <span className="font-medium text-slate-200">$75–$250 per week</span> depending on
                  how often you train.
                </p>
              </article>

              {/* Single sessions / intro */}
              <article className="flex flex-col gap-4 rounded-lg border border-slate-800 bg-[#080814] p-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">Single sessions</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Try it without a big commit
                  </p>
                  <p className="mt-2 text-[13px] text-slate-300">
                    If you just want to see what a session feels like, book a single one. You will still get a real
                    workout, not a sales pitch.
                  </p>
                  <p className="mt-3 text-[13px] font-semibold text-slate-100">$75 / session</p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-[var(--neon-green)]/40 via-slate-700 to-transparent"></div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-50">Intro block (optional)</h3>
                  <p className="mt-1 text-[13px] text-slate-300">
                    A short starter run (for example 3 sessions) to learn the basics, get a feel for coaching, and then
                    decide what is next.
                  </p>
                  <p className="mt-2 text-[11px] text-slate-500">
                    You can set exact structure and pricing once you and Tobias talk through how he wants to offer this.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="border-b border-slate-800 bg-[#050509]">
          <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Money talk</p>
                <h2 className="mt-2 text-[1.7rem] font-semibold tracking-tight">
                  Ballpark pricing so there are no surprises.
                </h2>
              </div>
              <p className="max-w-xl text-[14px] text-slate-300">
                These numbers are here so people are not guessing. You can tweak them later once Tobias has a few clients
                and knows what feels right.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[0.9fr,1.1fr]">
              {/* Single session card */}
              <div className="flex flex-col rounded-lg border border-slate-800 bg-[#080814] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Single 1:1 session</p>
                <p className="mt-3 text-3xl font-semibold text-slate-50">$75</p>
                <p className="mt-1 text-[11px] text-slate-500">Pay per session</p>
                <ul className="mt-4 flex-1 space-y-1.5 text-[12px] text-slate-300">
                  <li>• Full hour of coaching and lifting.</li>
                  <li>• Great if you are testing the fit.</li>
                  <li>• You can roll into a weekly plan later.</li>
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-700 bg-[#050509] px-4 py-2 text-[12px] font-semibold text-slate-100"
                >
                  Book a single session
                </a>
              </div>

              {/* Weekly coaching breakdown */}
              <div className="flex flex-col rounded-lg border border-[var(--deep-purple)] bg-[#080814] p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Weekly coaching</p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-50">Pick a pace that feels doable.</h3>
                  </div>
                  <span className="rounded-full bg-[#050509] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                    Most people
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-[12px] text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>1x per week</span>
                    <span className="font-semibold text-slate-100">~$75 / week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>2x per week</span>
                    <span className="font-semibold text-slate-100">~$140 / week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3x per week</span>
                    <span className="font-semibold text-slate-100">~$195 / week</span>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-slate-500">
                  You can show this as weekly or monthly on the finished site. Exact numbers can flex a bit as he figures
                  out what works.
                </p>
                <ul className="mt-3 flex-1 space-y-1.5 text-[12px] text-slate-300">
                  <li>• Same general times each week.</li>
                  <li>• Plan adjusts for travel, life, or energy dips.</li>
                  <li>• Built for people who want accountability, not perfection.</li>
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--deep-purple)] px-4 py-2 text-[12px] font-semibold text-slate-50"
                >
                  Talk about weekly coaching
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-slate-800 bg-[#050509]">
          <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Questions</p>
                <h2 className="mt-2 text-[1.7rem] font-semibold tracking-tight">Stuff people usually ask first.</h2>
                <p className="mt-3 text-[14px] text-slate-300">
                  Swap these out later for real questions from clients. For now, they make the page feel complete.
                </p>
              </div>

              <div className="flex-1 space-y-4">
                <FAQItem
                  question="I am a beginner. Is that ok?"
                  answer="Yes. Beginners are ideal. Tobias likes teaching from the ground up so you do not have to unlearn a bunch of habits you picked up from random videos."
                  defaultOpen={true}
                />
                <FAQItem
                  question="Where do sessions happen?"
                  answer="Once you know which gym(s) or spaces he will use in Rhode Island, put that here. You can also note if he offers any home or outdoor sessions."
                />
                <FAQItem
                  question="What if I miss a week?"
                  answer="This is where you spell out the cancellation window and how rescheduling works. Keep it clear and human so it still feels approachable."
                />
                <FAQItem
                  question="Do you do nutrition coaching?"
                  answer='Only mention this if he actually offers it. If not, you can say something simple like "Tobias can share general guidance around habits, but training is the main focus."'
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#050509] border-t border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <h2 className="mt-2 text-[1.7rem] font-semibold tracking-tight">Reach out directly.</h2>
            <p className="mt-3 text-[14px] text-slate-300 max-w-xl">
              No forms. No submissions. Just reach Tobias directly by text or email.
            </p>

            <div className="mt-6 space-y-4 text-[14px]">
              <a
                href="tel:4010000000"
                className="flex items-center gap-3 text-slate-100 hover:text-[var(--neon-green)] transition-colors"
              >
                <span className="text-[var(--neon-green)]">•</span> Text or call:{" "}
                <span className="font-semibold">(401) 000‑0000</span>
              </a>
              <a
                href="mailto:tobias@example.com"
                className="flex items-center gap-3 text-slate-100 hover:text-[var(--neon-green)] transition-colors"
              >
                <span className="text-[var(--neon-green)]">•</span> Email:{" "}
                <span className="font-semibold">tobias@example.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-[#050509]">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between lg:px-6">
            <p>
              © {new Date().getFullYear()} Tobias Ledoux Training · Rhode Island.
            </p>
            <p>
              Site by{" "}
              <a
                href="https://websites-by-tim.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--neon-green)] transition-colors"
              >
                Websites By Tim
              </a>
              .
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group rounded-lg border border-slate-800 bg-[#080814] p-4" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="text-[13px] font-semibold text-slate-50">{question}</span>
        <span className="text-xs text-slate-500 group-open:hidden">+</span>
        <span className="hidden text-xs text-slate-500 group-open:inline">−</span>
      </summary>
      <p className="mt-3 text-[13px] text-slate-300">{answer}</p>
    </details>
  );
}

