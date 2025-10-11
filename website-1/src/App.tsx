import { useState } from 'react'
import './App.css'

type Service = {
  title: string
  description: string
}

type ProcessStep = {
  title: string
  description: string
}

type TeamMember = {
  name: string
  role: string
  tagline: string
}

type Testimonial = {
  quote: string
  author: string
}

type Faq = {
  question: string
  answer: string
}

const services: Service[] = [
  {
    title: 'Anxiety Therapy',
    description: 'Tools and support to manage worry, panic, and overwhelm.',
  },
  {
    title: 'Depression Care',
    description: 'Compassionate treatment focused on restoring balance.',
  },
  {
    title: 'ADHD Coaching',
    description: 'Evidence-based strategies tailored to your daily life.',
  },
  {
    title: 'Couples Counseling',
    description: 'Guidance to strengthen communication and connection.',
  },
]

const processSteps: ProcessStep[] = [
  {
    title: 'Contact',
    description: 'Schedule a call or send us a message to get started.',
  },
  {
    title: 'Assessment',
    description: 'We listen, learn, and craft a personalized care plan.',
  },
  {
    title: 'Personalized Care',
    description: 'Receive ongoing support tailored to your goals.',
  },
]

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Maya Chen',
    role: 'Clinical Psychologist',
    tagline: 'Specialist in anxiety and mindfulness-based therapy.',
  },
  {
    name: 'Alex Patel, LCSW',
    role: 'Therapist',
    tagline: 'Empowering clients with practical coping strategies.',
  },
  {
    name: 'Jordan Smith, PsyD',
    role: 'Neuropsychologist',
    tagline: 'Focused on ADHD evaluation and executive coaching.',
  },
  {
    name: 'Taylor Rivera, LMFT',
    role: 'Couples Therapist',
    tagline: 'Helping partners communicate with clarity and care.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'They made me feel heard and understood from the very first session.',
    author: 'A. Smith',
  },
  {
    quote: 'The team guided me through every step with warmth and expertise.',
    author: 'R. Johnson',
  },
  {
    quote: 'I finally feel like I have a plan that works for my life.',
    author: 'L. Garcia',
  },
]

const faqs: Faq[] = [
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes, we partner with most major insurance providers and will help you navigate coverage options.',
  },
  {
    question: 'Are sessions available virtually?',
    answer:
      'We offer secure telehealth appointments alongside in-person sessions at our clinic.',
  },
  {
    question: 'What ages do you work with?',
    answer:
      'Our clinicians support adolescents, adults, and families with tailored treatment plans.',
  },
]

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <div className="brand">
            <div className="brand-logo" aria-hidden="true">
              MW
            </div>
            <div>
              <p className="brand-name">Mindful Wellness</p>
              <p className="brand-tagline">Integrative Mental Health</p>
            </div>
          </div>
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="cta-button cta-button--primary desktop-only" href="#contact">
            Book Consultation
          </a>
          <a className="cta-button cta-button--outline mobile-only" href="#contact">
            Book Consultation
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="hero-badge">Evidence-based and heart-led</span>
              <h1 className="hero-title">Your Mental Wellness Matters</h1>
              <p className="hero-text">
                We provide compassionate, science-backed care for anxiety, depression, ADHD, and relationship challenges.
                Together, we craft a plan that fits your life and supports lasting change.
              </p>
              <div className="hero-actions">
                <a className="cta-button cta-button--primary" href="#contact">
                  Book an Appointment
                </a>
                <a className="cta-button cta-button--outline" href="#services">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="hero-visual" role="presentation" aria-hidden="true">
              <div className="hero-visual-card">
                <div className="hero-visual-circle" />
                <div className="hero-visual-content">
                  <p>Personalized plans</p>
                  <p>Licensed clinicians</p>
                  <p>Virtual and in-person sessions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container section-intro">
            <h2 className="section-title">Care rooted in trust and collaboration</h2>
            <p className="section-text">
              Our clinicians blend evidence-based practices with warm, person-centered support. From the first conversation,
              we focus on creating a space where you can feel heard, respected, and empowered.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Services tailored to your needs</h2>
              <p className="section-text">
                Explore the areas where we provide specialized care. Each service begins with a collaborative assessment to
                match you with the right clinician and approach.
              </p>
            </div>
            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="info-card">
                  <div className="info-card-icon" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a className="learn-more" href="#contact">
                    Learn More
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="process-heading" className="section-title">
                How it works
              </h2>
              <p className="section-text">
                Three simple steps to begin your care journey with Mindful Wellness.
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article key={step.title} className="process-card">
                  <div className="process-index">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="team" aria-labelledby="team-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="team-heading" className="section-title">
                Meet the team
              </h2>
              <p className="section-text">
                A multidisciplinary group of clinicians committed to attentive, personalized care.
              </p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <article key={member.name} className="team-card">
                  <div className="team-avatar" aria-hidden="true">
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div className="team-details">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-tagline">{member.tagline}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="testimonials-heading" className="section-title">
                Stories of care and progress
              </h2>
              <p className="section-text">
                Hear from clients who have partnered with us to create meaningful change in their lives.
              </p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="testimonial-card">
                  <span aria-hidden="true" className="quote-mark">
                    “
                  </span>
                  <p>{testimonial.quote}</p>
                  <cite>— {testimonial.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-heading">
          <div className="container faq">
            <div className="faq-intro">
              <h2 id="faq-heading" className="section-title">
                Frequently asked questions
              </h2>
              <p className="section-text">
                Have more questions about insurance, scheduling, or what to expect? We’re here to help.
              </p>
            </div>
            <div className="faq-items">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <div key={faq.question} className={`faq-item${isOpen ? ' open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="faq-indicator">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section muted" id="contact" aria-labelledby="contact-heading">
          <div className="container contact">
            <div className="contact-details">
              <h2 id="contact-heading" className="section-title">
                Ready to begin?
              </h2>
              <p className="section-text">
                Share a few details and our care coordinator will reach out within one business day.
              </p>
              <ul className="contact-list">
                <li>
                  <strong>Phone:</strong> (555) 123-4567
                </li>
                <li>
                  <strong>Email:</strong> hello@mindfulwellness.com
                </li>
                <li>
                  <strong>Location:</strong> 1200 Evergreen Ave, Suite 210, Portland, OR
                </li>
                <li>
                  <strong>Hours:</strong> Mon–Fri 8am–6pm PT
                </li>
              </ul>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your goals"></textarea>
              </div>
              <button className="cta-button cta-button--primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Mindful Wellness. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <div className="social-icons" aria-label="Social media">
              <span aria-hidden="true">●</span>
              <span aria-hidden="true">●</span>
              <span aria-hidden="true">●</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
