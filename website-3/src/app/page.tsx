import Link from 'next/link'
import styles from './page.module.css'

const treatments = [
  {
    title: 'Anxiety Disorder',
    description:
      'Personalized strategies and medication management designed to reduce worry, panic, and stress-driven symptoms.',
  },
  {
    title: 'ADHD',
    description:
      'Thoughtful assessments with multimodal care plans that help improve focus, organization, and daily functioning.',
  },
  {
    title: 'Bipolar Disorder',
    description:
      'Collaborative treatment that stabilizes mood shifts and supports long-term emotional balance.',
  },
  {
    title: 'Depression',
    description:
      'Evidence-based therapies and medication options to restore energy, motivation, and joy.',
  },
  {
    title: 'Medication Management',
    description:
      'Comprehensive reviews to ensure each prescription is safe, effective, and aligned with your health goals.',
  },
  {
    title: 'Mood Disorder',
    description:
      'Holistic plans focused on regulating mood changes and improving overall quality of life.',
  },
  {
    title: 'OCD',
    description:
      'Support that decreases intrusive thoughts and repetitive behaviors through compassionate care.',
  },
  {
    title: 'PTSD',
    description:
      'Trauma-informed support that nurtures resilience and helps you feel grounded and secure.',
  },
]

const insurances = [
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

const faqs = [
  {
    question: 'Do you offer virtual visits?',
    answer:
      'Yes. Secure telepsychiatry appointments are available for patients located in New Jersey and New York.',
  },
  {
    question: 'What can I expect during my first appointment?',
    answer:
      'Your initial visit focuses on understanding your history, current concerns, and goals so we can create a tailored care plan.',
  },
  {
    question: 'How soon can I be seen?',
    answer:
      'We strive to offer timely availability with evening and weekend appointments to fit your schedule.',
  },
]

const officeHours = [
  { day: 'Monday – Thursday', time: '4:00 PM – 8:00 PM' },
  { day: 'Friday', time: 'Closed' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: '12:00 PM – 4:00 PM' },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.announcementBar}>
          <span>Serving New Jersey &amp; New York</span>
          <span className={styles.announcementSeparator} aria-hidden="true">
            •
          </span>
          <span>Accepting Aetna, Cigna, Optum &amp; more</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.brandLockup}>
                <div className={styles.brandMark} aria-hidden="true">
                  <span />
                </div>
                <div className={styles.brandText}>
                  <span className={styles.brandName}>AOK Health Solutions</span>
                  <span className={styles.brandDescriptor}>Psychiatry</span>
                </div>
              </div>
              <button className={styles.menuButton} type="button" aria-label="Open navigation menu">
                <span />
                <span />
                <span />
              </button>
            </div>
            <div className={styles.heroCopy} id="home">
              <span className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowAccent} aria-hidden="true" />
                Guiding You to Mental Clarity
              </span>
              <h1>Personalized psychiatric care grounded in compassion</h1>
              <p>
                Akosua Karikari, PMHNP-BC, FNP-BC, partners with adults, adolescents, and families
                to deliver culturally responsive treatment plans, thoughtful medication management,
                and unwavering support.
              </p>
              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                >
                  Book Online
                </Link>
                <a className={styles.secondaryButton} href="tel:19733623063">
                  Call (973) 362-3063
                </a>
              </div>
              <div className={styles.heroDetails}>
                <div>
                  <span className={styles.detailHeading}>Locations</span>
                  <p>Virtual &amp; in-person visits across NJ &amp; NY</p>
                </div>
                <div>
                  <span className={styles.detailHeading}>Office Hours</span>
                  <p>Evening &amp; weekend appointments available</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.imagePlaceholder}>Feature welcoming provider or patient imagery</div>
            <div className={styles.placeholderCaption}>
              Use a warm, confident portrait that reflects calm, professional care
            </div>
          </div>
        </div>
      </header>

      <section className={styles.section} id="treatments">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Treatments</span>
          <h2>Comprehensive support for your mental health</h2>
          <p>
            Explore the conditions we treat and discover how personalized care can
            help you regain balance, confidence, and clarity.
          </p>
        </div>
        <div className={styles.treatmentGrid}>
          {treatments.map((treatment) => (
            <article key={treatment.title} className={styles.treatmentCard}>
              <div className={styles.cardIcon}>🧠</div>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
              <div className={styles.cardImagePlaceholder}>Image Placeholder</div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.providerSection} id="provider">
        <div className={styles.providerCard}>
          <div className={styles.providerImage}>Provider Portrait Placeholder</div>
          <div className={styles.providerContent}>
            <span className={styles.sectionTag}>Provider</span>
            <h2>Akosua Karikari, DNP, PMHNP-BC, FNP-BC</h2>
            <p>
              Akosua Karikari is a board-certified psychiatric and family nurse
              practitioner with a passion for guiding patients toward lasting
              wellness. Her approach integrates evidence-based medicine with
              heartfelt listening so every person feels seen, respected, and
              empowered.
            </p>
            <ul className={styles.credentialList}>
              <li>Psychiatric Mental Health Nurse Practitioner</li>
              <li>Family Nurse Practitioner</li>
              <li>Adult Gerontology Nurse Practitioner</li>
              <li>Family Emergency Nurse Practitioner</li>
            </ul>
            <div className={styles.providerLinks}>
              <Link
                href="https://www.psychologytoday.com/us/psychiatrists/akosua-karikari-paterson-nj/1442710"
              >
                View Psychology Today Profile
              </Link>
              <Link href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765">
                Book with Tebra
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="insurance">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Insurance</span>
          <h2>Insurance plans we accept</h2>
          <p>
            We partner with a wide range of insurance providers and also welcome
            self-pay clients.
          </p>
        </div>
        <div className={styles.insuranceGrid}>
          {insurances.map((plan) => (
            <span key={plan} className={styles.insuranceItem}>
              {plan}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section} id="faq">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <article key={faq.question} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutContent}>
          <div>
            <span className={styles.sectionTag}>About Us</span>
            <h2>Your trusted partner in mental wellness</h2>
            <p>
              AOK Health Solutions delivers integrative psychiatric care with an
              emphasis on accessibility and empathy. We are committed to building
              long-term relationships with our patients and collaborating with
              families, therapists, and primary care providers to deliver
              outstanding outcomes.
            </p>
            <ul className={styles.highlightList}>
              <li>Personalized treatment plans tailored to your goals</li>
              <li>Convenient telehealth and in-person appointments</li>
              <li>Evidence-based care informed by advanced nursing expertise</li>
            </ul>
          </div>
          <div className={styles.aboutVisual}>
            <div className={styles.imagePlaceholder}>Team Image Placeholder</div>
            <div className={styles.placeholderCaption}>Showcase a caring team moment or calming office space</div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Contact</span>
          <h2>Let&apos;s connect</h2>
          <p>
            Reach out with questions or schedule your visit. We look forward to
            supporting you.
          </p>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <h3>Contact Details</h3>
            <p>
              <strong>Phone:</strong> <a href="tel:19733623063">(973) 362-3063</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:aokhealthsolutions@gmail.com">aokhealthsolutions@gmail.com</a>
            </p>
            <p>
              <strong>Locations:</strong> New Jersey &amp; New York
            </p>
            <div className={styles.contactImage}>Map Placeholder</div>
          </div>
          <div className={styles.contactCard}>
            <h3>Office Hours</h3>
            <ul className={styles.hoursList}>
              {officeHours.map((entry) => (
                <li key={entry.day}>
                  <span>{entry.day}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
            <div className={styles.contactCta}>
              <p>Ready to get started?</p>
              <Link
                className={styles.primaryButton}
                href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
              >
                Book Your Visit
              </Link>
            </div>
          </div>
          <form className={styles.contactForm}>
            <h3>Send a Message</h3>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" placeholder="Your name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" placeholder="you@email.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows={4} placeholder="Share your questions or concerns" />
            </div>
            <button type="submit" className={styles.secondaryButton}>
              Submit
            </button>
            <p className={styles.formDisclaimer}>
              Submissions are reviewed within one business day. For emergencies,
              please dial 911 or visit your nearest emergency room.
            </p>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} AOK Health Solutions. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="#privacy">Privacy Policy</Link>
          <Link href="#terms">Terms of Service</Link>
        </div>
      </footer>
    </main>
  )
}
