import { useState } from 'react'

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
  credentials: string
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

const navLinks = [
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
      'Evidence-based medication management and coping strategies to reduce worry, panic, and overwhelm.',
  },
  {
    title: 'ADHD',
    description:
      'Comprehensive evaluations with tailored treatment plans to enhance focus, organization, and follow-through.',
  },
  {
    title: 'Bipolar Disorder',
    description:
      'Collaborative care plans that balance mood stability, safety, and whole-person wellness.',
  },
  {
    title: 'Depression',
    description:
      'Compassionate support that combines therapy-informed guidance with thoughtful medication adjustments.',
  },
  {
    title: 'Medication Management',
    description:
      'Ongoing partnership to monitor progress, adjust dosages, and minimize side effects for every treatment.',
  },
  {
    title: 'Mood Disorder',
    description:
      'Holistic care to regulate mood changes and strengthen resilience through personalized interventions.',
  },
  {
    title: 'OCD',
    description:
      'Structured treatment that integrates exposure-based tools and medication to relieve intrusive thoughts.',
  },
  {
    title: 'PTSD',
    description:
      'Trauma-informed, gentle approaches that honor your story and support healing at your pace.',
  },
]

const processSteps: ProcessStep[] = [
  {
    title: 'Connect With Us',
    description:
      'Reach out by phone, email, or our secure message form. We will respond within one business day.',
  },
  {
    title: 'Assessment & Collaboration',
    description:
      'We complete a thorough assessment, review your goals, and recommend a tailored plan of care.',
  },
  {
    title: 'Personalized Care',
    description:
      'Continue with regular visits, medication management, and supportive coaching designed for lasting wellness.',
  },
]

const team: TeamMember[] = [
  {
    name: 'Akosua Karikari, DNP, PMHNP-BC',
    credentials:
      'Psychiatric Mental Health Nurse Practitioner · Family Nurse Practitioner · Adult Gerontology Nurse Practitioner',
    focus:
      'Blending clinical expertise with attentive listening to support adults, adolescents, and families across New Jersey and New York.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'Akosua listened without judgment and guided me toward a plan that finally makes sense. I feel genuinely supported.',
    author: 'Client in Paterson, NJ',
  },
  {
    quote:
      'From the first appointment I knew I was in good hands. My questions were answered and my concerns were heard.',
    author: 'Telehealth Client',
  },
  {
    quote:
      'The care team is warm, responsive, and invested in my progress every step of the way.',
    author: 'NY Client',
  },
]

const faqs: Faq[] = [
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes. We partner with Medicare, Medicaid, Cigna, Optum, Oscar, United Healthcare, Horizon BCBS, BCBS New Jersey, Fidelis Care, WellCare, AmeriHealth, Tricare, Aetna, and Multiplan.',
  },
  {
    question: 'Are sessions available virtually?',
    answer:
      'Absolutely. We provide HIPAA-compliant virtual visits in addition to in-person appointments, making care more flexible for you.',
  },
  {
    question: 'Who do you serve?',
    answer:
      'AOK Health Solutions supports adolescents, adults, and families throughout New Jersey and New York with culturally competent care.',
  },
  {
    question: 'How soon can I get an appointment?',
    answer:
      'Most new patients are seen within one to two weeks. Book online through our Tebra link or call us for current availability.',
  },
]

const insurancePlans = [
  'Medicare',
  'Medicaid',
  'Cigna',
  'Optum',
  'Oscar',
  'United Healthcare',
  'Horizon BCBS',
  'BCBS New Jersey',
  'Fidelis Care',
  'WellCare',
  'AmeriHealth',
  'Tricare',
  'Aetna',
  'Multiplan',
]

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 via-emerald-100 to-slate-100 text-base font-semibold text-sky-900 shadow-sm">
              AOK
            </div>
            <div>
              <p className="text-lg font-semibold">AOK Health Solutions</p>
              <p className="text-sm text-slate-500">Compassionate psychiatric & mental wellness care</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} className="transition hover:text-slate-900" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600 lg:inline-flex"
            href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
            target="_blank"
            rel="noreferrer"
          >
            Book Consultation
          </a>
        </div>
        <div className="border-t border-slate-200 bg-white/90 py-2 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 text-sm text-slate-600">
            {navLinks.map((link) => (
              <a key={link.href} className="transition hover:text-slate-900" href={link.href}>
                {link.label}
              </a>
            ))}
            <a
              className="inline-flex rounded-full bg-emerald-500 px-4 py-1.5 font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
              target="_blank"
              rel="noreferrer"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="bg-gradient-to-br from-sky-50 via-white to-emerald-50"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Evidence-based and heart-led
              </span>
              <h1 id="hero-heading" className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Your Mental Wellness Matters.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Partner with a board-certified psychiatric nurse practitioner offering individualized, culturally attuned care
                for clients across New Jersey and New York. We are here to help you feel heard, supported, and empowered.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-600"
                  href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book an Appointment
                </a>
                <a
                  className="inline-flex rounded-full border border-emerald-500 px-6 py-3 text-base font-semibold text-emerald-600 transition hover:border-emerald-600 hover:text-emerald-700"
                  href="#treatments"
                >
                  Explore Treatments
                </a>
              </div>
              <dl className="mt-10 grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
                  <dt className="font-semibold text-slate-900">Service Areas</dt>
                  <dd>New Jersey · New York · Secure telehealth</dd>
                </div>
                <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
                  <dt className="font-semibold text-slate-900">Office Hours</dt>
                  <dd>Mon–Thu 4:00–8:00 PM · Sun 12:00–4:00 PM</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-100 via-white to-sky-100 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-emerald-100">
                <div className="bg-gradient-to-br from-sky-200/60 to-emerald-200/60 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Compassion, Clarity, Connection
                  </p>
                  <p className="mt-6 text-xl font-semibold text-slate-900">
                    "Care designed around your lived experience, goals, and culture."
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    Discover how evidence-based treatment, thoughtful medication management, and supportive follow-up come
                    together to help you thrive.
                  </p>
                  <div className="mt-6 grid gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                      Board-certified psychiatric care
                    </span>
                    <span className="inline-flex items-center gap-2 text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                      Virtual and in-person appointments
                    </span>
                    <span className="inline-flex items-center gap-2 text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                      Support for adolescents, adults, and families
                    </span>
                  </div>
                </div>
                <div className="border-t border-emerald-100 bg-white p-6 text-sm text-slate-600">
                  <p>
                    View Akosua Karikari&apos;s full profile on{' '}
                    <a
                      className="font-semibold text-emerald-600 transition hover:text-emerald-700"
                      href="https://www.psychologytoday.com/us/psychiatrists/akosua-karikari-paterson-nj/1442710"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Psychology Today
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-emerald-100/70 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">About Us</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Holistic, trust-centered care for every chapter of your life
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Led by Akosua Karikari, DNP, PMHNP-BC, AOK Health Solutions unites medical expertise with whole-person support.
                Every visit is tailored to your lived experience, cultural background, and personal goals. We believe healing is
                collaborative—and that you deserve compassionate partners for the journey.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                From first consultation to ongoing follow-up, we prioritize clear communication, shared decision-making, and
                accessible care for individuals and families across New Jersey and New York.
              </p>
            </div>
          </div>
        </section>

        <section id="treatments" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Treatments</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Support for the concerns you face every day
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We address a wide range of mental health conditions through integrative, evidence-based approaches. Each plan is
                developed through careful assessment and ongoing collaboration.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {treatments.map((treatment) => (
                <article
                  key={treatment.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{treatment.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{treatment.description}</p>
                  </div>
                  <a
                    className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                    href="#contact"
                  >
                    Learn More
                    <span aria-hidden="true" className="ml-2">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-800 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">How It Works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Care in three intentional steps</h2>
              <p className="mt-4 text-lg text-emerald-100/80">
                From the first conversation, we make it simple to get started and stay supported with a plan that fits your pace.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-3xl bg-white/5 p-6 shadow-lg shadow-emerald-900/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-lg font-semibold text-emerald-100">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-emerald-100/90">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="providers" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Providers</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Meet the clinician leading your care
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our founder brings extensive experience across psychiatric, family, emergency, and gerontology nursing to every
                appointment.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-emerald-100/70"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 to-sky-200 text-2xl font-semibold text-emerald-900">
                      {member.name
                        .split(' ')
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">{member.name}</h3>
                      <p className="mt-1 text-sm font-medium text-emerald-700">{member.credentials}</p>
                    </div>
                  </div>
                  <p className="text-base text-slate-600">{member.focus}</p>
                  <div className="rounded-2xl bg-emerald-50/70 p-5 text-sm text-emerald-900">
                    <p className="font-semibold">Credentials & Training</p>
                    <ul className="mt-2 space-y-1 text-emerald-800">
                      <li>• Psychiatric Mental Health Nurse Practitioner</li>
                      <li>• Family Nurse Practitioner</li>
                      <li>• Adult Gerontology Nurse Practitioner</li>
                      <li>• Family Emergency Nurse Practitioner</li>
                    </ul>
                  </div>
                </article>
              ))}
              <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/50 p-8 text-sm text-emerald-900">
                <p className="font-semibold text-emerald-800">Looking for more details?</p>
                <p className="mt-2">
                  Visit our{' '}
                  <a
                    className="font-semibold text-emerald-600 transition hover:text-emerald-700"
                    href="https://www.psychologytoday.com/us/psychiatrists/akosua-karikari-paterson-nj/1442710"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Psychology Today profile
                  </a>{' '}
                  or{' '}
                  <a
                    className="font-semibold text-emerald-600 transition hover:text-emerald-700"
                    href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                    target="_blank"
                    rel="noreferrer"
                  >
                    book a visit via Tebra
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 sm:py-24" aria-labelledby="testimonial-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Testimonials</p>
              <h2 id="testimonial-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Voices from our community
              </h2>
              <p className="mt-4 text-lg text-emerald-100/80">
                Clients share how collaborative, compassionate care has supported their wellbeing.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="flex h-full flex-col justify-between rounded-3xl bg-white/5 p-6 text-emerald-50 shadow-lg shadow-emerald-900/10"
                >
                  <p className="text-sm leading-relaxed">“{testimonial.quote}”</p>
                  <cite className="mt-6 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                    — {testimonial.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="insurance" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Insurance</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Insurance plans we proudly accept
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We work with a wide range of insurance partners and will guide you through benefits, authorizations, and billing
                questions.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {insurancePlans.map((plan) => (
                <div
                  key={plan}
                  className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-slate-50/80 px-5 py-4 text-sm font-semibold text-slate-700"
                >
                  <span>{plan}</span>
                  <span aria-hidden="true">✓</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Questions we hear often
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                If you need more information about services, insurance, or scheduling, reach out. We are happy to help.
              </p>
              <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index
                  return (
                    <div key={faq.question} className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{faq.question}</span>
                        <span aria-hidden="true" className="text-base text-emerald-500">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen ? <p className="px-5 pb-5 text-sm text-slate-600">{faq.answer}</p> : null}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-emerald-100/80">
              <h3 className="text-2xl font-semibold text-slate-900">Ready to schedule?</h3>
              <p className="mt-3 text-sm text-slate-600">
                Share a brief note about what you are looking for and our team will coordinate the next steps with you.
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="faq-name">
                    Name
                  </label>
                  <input
                    id="faq-name"
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="faq-email">
                    Email
                  </label>
                  <input
                    id="faq-email"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="faq-message">
                    How can we help?
                  </label>
                  <textarea
                    id="faq-message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Share your questions or goals"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Reach out to begin your care
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Whether you are ready to book or just exploring options, we are here to answer your questions with warmth and
                  clarity.
                </p>
                <dl className="mt-8 grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50/80 p-5 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</dt>
                    <dd className="mt-2 text-base font-semibold text-slate-900">
                      <a href="tel:19733623063">(973) 362-3063</a>
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-slate-50/80 p-5 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</dt>
                    <dd className="mt-2 text-base font-semibold text-slate-900">
                      <a href="mailto:aokhealthsolutions@gmail.com">aokhealthsolutions@gmail.com</a>
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-slate-50/80 p-5 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Locations</dt>
                    <dd className="mt-2">Serving New Jersey &amp; New York · Virtual care available</dd>
                  </div>
                  <div className="rounded-2xl bg-slate-50/80 p-5 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Office Hours</dt>
                    <dd className="mt-2">Mon–Thu 4:00 PM – 8:00 PM · Sun 12:00 PM – 4:00 PM</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-900 p-8 text-white shadow-xl">
                <h3 className="text-2xl font-semibold">Book a consultation</h3>
                <p className="mt-3 text-sm text-emerald-100/90">
                  Schedule securely through Tebra or send us a note. We will confirm your appointment and share intake details.
                </p>
                <div className="mt-6 space-y-4 text-sm">
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
                <div className="mt-8 rounded-2xl bg-white/10 p-5 text-xs text-emerald-100/90">
                  <p className="font-semibold uppercase tracking-wide">Helpful reminders</p>
                  <ul className="mt-3 space-y-2">
                    <li>• Bring a current medication list to your first visit.</li>
                    <li>• Telehealth visits require a private, quiet space and reliable internet.</li>
                    <li>• Emergency needs? Please dial 911 or visit your nearest emergency room.</li>
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
