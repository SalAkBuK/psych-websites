import { useState } from 'react'

type NavLink = {
  label: string
  href: `#${string}`
}

type Treatment = {
  title: string
  description: string
}

type ProcessStep = {
  title: string
  description: string
}

type TeamMember = {
  name: string
  credentials: string[]
  focus: string
}

type Testimonial = {
  quote: string
  author: string
}

type Faq = {
  question: string
  answer: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Providers', href: '#providers' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const treatments: Treatment[] = [
  {
    title: 'Anxiety Disorder',
    description:
      'Develop grounding skills, adjust medications thoughtfully, and regain confidence in daily routines.',
  },
  {
    title: 'ADHD',
    description:
      'Comprehensive evaluations with treatment plans that strengthen focus, planning, and follow-through.',
  },
  {
    title: 'Bipolar Disorder',
    description:
      'Stabilize mood changes with close monitoring, collaborative safety planning, and lifestyle support.',
  },
  {
    title: 'Depression',
    description:
      'Blend compassionate listening with evidence-based medication management to lift energy and hope.',
  },
  {
    title: 'Medication Management',
    description:
      'Track symptoms, streamline prescriptions, and ensure each medication choice aligns with your goals.',
  },
  {
    title: 'Mood Disorder',
    description:
      'Address mood shifts holistically with consistent visits and skills that promote steady wellbeing.',
  },
  {
    title: 'OCD',
    description:
      'Pair exposure-informed strategies with medication adjustments to reduce intrusive thoughts.',
  },
  {
    title: 'PTSD',
    description:
      'Honor your story with trauma-informed care that fosters safety, resilience, and renewed calm.',
  },
]

const processSteps: ProcessStep[] = [
  {
    title: 'Connect With Us',
    description:
      'Reach out by phone, email, or our secure form. We respond within one business day with next steps.',
  },
  {
    title: 'Assessment & Planning',
    description:
      'Complete a thorough intake so we understand your history, priorities, and ideal pace of care.',
  },
  {
    title: 'Personalized Care',
    description:
      'Continue with regular visits, medication management, and supportive coaching tailored to your goals.',
  },
]

const teamMembers: TeamMember[] = [
  {
    name: 'Akosua Karikari, DNP, PMHNP-BC',
    credentials: [
      'Psychiatric Mental Health Nurse Practitioner',
      'Family Nurse Practitioner',
      'Adult Gerontology Nurse Practitioner',
      'Family Emergency Nurse Practitioner',
    ],
    focus:
      'Creating warm, culturally responsive care for adolescents, adults, and families across New Jersey and New York.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'Akosua listened without judgment and helped me build a plan that finally fits the way my brain works.',
    author: 'Client in Paterson, NJ',
  },
  {
    quote:
      'I feel supported every step of the way. Medication changes are explained clearly and I never feel rushed.',
    author: 'Telehealth Client',
  },
  {
    quote: 'Compassionate, professional, and truly invested in my progress. I have never felt more understood.',
    author: 'Client in New York, NY',
  },
]

const insuranceProviders: string[] = [
  'Aetna',
  'AmeriHealth',
  'BCBS New Jersey',
  'Cigna',
  'Fidelis Care',
  'Horizon BCBS',
  'Medicaid',
  'Medicare',
  'Multiplan',
  'Optum',
  'Oscar',
  'Tricare',
  'United Healthcare',
  'WellCare',
]

const faqs: Faq[] = [
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes. We accept Medicare, Medicaid, Cigna, Optum, Oscar, United Healthcare, Horizon BCBS, BCBS New Jersey, Fidelis Care, WellCare, AmeriHealth, Tricare, Aetna, and Multiplan.',
  },
  {
    question: 'Are appointments available virtually?',
    answer:
      'Absolutely. Secure telehealth visits are available for patients in New Jersey and New York alongside select in-person sessions.',
  },
  {
    question: 'What should I bring to my first visit?',
    answer:
      'Please have a full medication list, prior treatment summaries if available, and any questions you would like to cover.',
  },
  {
    question: 'How soon can I get an appointment?',
    answer:
      'We reply within one business day and do our best to schedule new patients promptly, often within one to two weeks.',
  },
]

const visitReminders = [
  'Have your current medication list ready for each appointment.',
  'Telehealth visits work best from a private space with reliable internet.',
  'Call 911 or go to the nearest emergency room for urgent safety concerns.',
]

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index))
  }

  const handleNavLinkClick = () => {
    setMobileNavOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" id="home">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a className="flex items-center gap-3" href="#home">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-sky-500 to-emerald-400 text-lg font-semibold text-white shadow-lg">
              AK
            </span>
            <span>
              <span className="block text-base font-semibold text-slate-900">AOK Health Solutions</span>
              <span className="block text-sm text-slate-500">Psychiatric Mental Health Services</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} className="transition hover:text-emerald-600" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 lg:inline-flex"
              href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
              target="_blank"
              rel="noreferrer"
            >
              Book via Tebra
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 lg:hidden"
              onClick={() => setMobileNavOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileNavOpen}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileNavOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileNavOpen ? (
          <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="flex flex-col gap-2 py-4 text-sm font-medium text-slate-700">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-600"
                    href={link.href}
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  className="mt-2 inline-flex justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
                  href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleNavLinkClick}
                >
                  Book via Tebra
                </a>
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      <main className="space-y-24 pb-24">
        <section id="home" className="bg-gradient-to-br from-sky-50 via-white to-emerald-100">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-600 shadow-sm">
                Evidence-based · Heart-led
              </span>
              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Lighter, steadier days start with trusted mental health care.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
                AOK Health Solutions offers psychiatric services, medication management, and coaching that honors your lived
                experience. Together, we create a plan that feels clear, sustainable, and tailored to you.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
                  href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Consultation
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                  href="#treatments"
                >
                  Explore Treatments
                </a>
              </div>
              <dl className="mt-10 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Service Regions</dt>
                  <dd className="mt-2 font-semibold text-slate-900">Serving New Jersey &amp; New York · Telehealth &amp; local</dd>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Office Hours</dt>
                  <dd className="mt-2">
                    Mon–Thu 4:00 PM – 8:00 PM<br />Sun 12:00 PM – 4:00 PM
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-gradient-to-br from-emerald-400/30 via-sky-400/20 to-blue-400/30 blur-3xl" />
              <div className="relative h-full rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">What to expect</p>
                <ul className="mt-4 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      1
                    </span>
                    Thorough intake so we understand your needs and priorities.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      2
                    </span>
                    Medication management paired with compassionate education.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      3
                    </span>
                    Ongoing support and check-ins that celebrate your wins.
                  </li>
                </ul>
                <div className="mt-8 rounded-2xl bg-emerald-500/10 p-5 text-sm text-emerald-700">
                  <p className="font-semibold">Licensed in NJ and NY</p>
                  <p className="mt-2">Telepsychiatry available statewide with flexible evening availability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="treatments">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Treatments</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive psychiatry for every stage of healing
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We specialize in conditions that impact focus, mood, and daily functioning. Treatment plans are personalized and
                adapt as you grow.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((treatment) => (
                <article
                  key={treatment.title}
                  className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{treatment.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{treatment.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/70 py-16" id="process">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">How it works</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Gentle structure keeps your care moving forward
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  Clear check-in points and collaborative planning mean you always know what comes next.
                </p>
              </div>
              <ol className="space-y-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-base font-semibold text-emerald-600">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="providers">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Providers</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Led by clinical expertise, guided by compassion
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  Care is delivered by licensed professionals dedicated to building trusting, collaborative relationships so you
                  feel seen every visit.
                </p>
                <div className="mt-8 space-y-6">
                  {teamMembers.map((member) => (
                    <article key={member.name} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {member.credentials.map((credential) => (
                          <li key={credential} className="flex items-start gap-2">
                            <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {credential}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-slate-600">{member.focus}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 font-semibold text-white shadow-lg transition hover:bg-emerald-600"
                    href="https://www.psychologytoday.com/us/psychiatrists/akosua-karikari-paterson-nj/1442710"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Psychology Today Profile
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-5 py-2 font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                    href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Schedule on Tebra
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-200 via-sky-200 to-white blur-2xl" />
                  <div className="relative rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur">
                    <h3 className="text-lg font-semibold text-slate-900">Partnership you can feel</h3>
                    <p className="mt-3 text-sm text-slate-600">
                      Every session blends clinical knowledge with practical guidance. Expect clear language, collaborative goal
                      setting, and tools you can put into practice between visits.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-600">
                      <li>• Evening availability to fit busy schedules</li>
                      <li>• Inclusive care for adolescents and adults</li>
                      <li>• Whole-person support addressing lifestyle, sleep, and stress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="insurance" className="bg-gradient-to-br from-white via-sky-50 to-emerald-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Insurance</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                In-network with leading insurance plans
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We work with major plans to make care more accessible. Out-of-network benefits can also be explored upon request.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {insuranceProviders.map((provider) => (
                <div
                  key={provider}
                  className="rounded-3xl border border-emerald-100 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {provider}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 rounded-3xl bg-white/80 p-10 shadow-lg lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">About us</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  A calm, collaborative space to rebuild confidence
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  We believe mental healthcare should feel approachable, not overwhelming. From the first message, our team welcomes
                  you with warmth, clarity, and genuine curiosity about your story.
                </p>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  Sessions are crafted to be conversational and judgment-free. Together, we map out treatment goals, set check-in
                  rhythms, and celebrate your wins while navigating setbacks with compassion.
                </p>
                <p>
                  Inclusive, culturally responsive care is core to our mission. Your identity, values, and lived experience guide each
                  recommendation we make.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/80 py-16" id="stories">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Testimonials</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Stories of steady growth and renewed hope
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-sm"
                >
                  <span aria-hidden="true" className="text-4xl text-emerald-400">
                    “
                  </span>
                  <p className="mt-3 text-sm text-slate-600">{testimonial.quote}</p>
                  <cite className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    — {testimonial.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">FAQ</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Answers that bring clarity to your next step
                </h2>
                <p className="mt-4 text-base text-emerald-100/80">
                  Still curious about something? Send us a note—our team is happy to help you feel prepared for care.
                </p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index
                  return (
                    <div key={faq.question} className="rounded-3xl bg-white/10">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-4 text-left text-sm font-semibold transition hover:bg-white/10"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <span aria-hidden="true" className="text-lg">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen ? (
                        <p className="px-6 pb-6 text-sm text-emerald-100/90">{faq.answer}</p>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Reach out to begin your care
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  Whether you are ready to schedule or simply exploring options, we are happy to answer questions and guide your next
                  step.
                </p>
                <dl className="mt-8 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Phone</dt>
                    <dd className="mt-2 text-base font-semibold text-slate-900">
                      <a href="tel:19733623063">(973) 362-3063</a>
                    </dd>
                  </div>
                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Email</dt>
                    <dd className="mt-2 text-base font-semibold text-slate-900">
                      <a href="mailto:aokhealthsolutions@gmail.com">aokhealthsolutions@gmail.com</a>
                    </dd>
                  </div>
                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Service Area</dt>
                    <dd className="mt-2">Serving New Jersey &amp; New York · Virtual care available</dd>
                  </div>
                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Office Hours</dt>
                    <dd className="mt-2">Mon–Thu 4:00 PM – 8:00 PM · Sun 12:00 PM – 4:00 PM</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-900 p-8 text-emerald-100 shadow-xl">
                <h3 className="text-2xl font-semibold text-white">Book a consultation</h3>
                <p className="mt-3 text-sm">
                  Schedule securely through Tebra or send us a note. We will confirm your appointment and share intake details.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <a
                    className="flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
                    href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book via Tebra
                  </a>
                  <a
                    className="flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:border-white hover:text-emerald-100"
                    href="https://www.psychologytoday.com/us/psychiatrists/akosua-karikari-paterson-nj/1442710"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Psychology Today Profile
                  </a>
                </div>
                <div className="mt-8 rounded-2xl bg-white/10 p-5 text-xs text-emerald-100/80">
                  <p className="font-semibold uppercase tracking-wide">Helpful reminders</p>
                  <ul className="mt-3 space-y-2">
                    {visitReminders.map((reminder) => (
                      <li key={reminder}>• {reminder}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 py-10 text-sm text-emerald-100/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">AOK Health Solutions</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-emerald-200">Your partner in mental wellness</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide">
            <a className="transition hover:text-white" href="#privacy">
              Privacy Policy
            </a>
            <a className="transition hover:text-white" href="#terms">
              Terms of Service
            </a>
            <span>© {new Date().getFullYear()} AOK Health Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
