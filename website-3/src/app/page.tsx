import Link from 'next/link'
import Image from 'next/image'
import BlurText from '@/components/BlurText/BlurText'
import AnimatedContent from '@/components/AnimatedContent/AnimatedContent'
import FadeInWhenVisible from '@/components/FadeInWhenVisible/FadeInWhenVisible'
import TextReveal from '@/components/TextReveal/TextReveal'
import StaggerChildren from '@/components/StaggerChildren/StaggerChildren'
import BackgroundSlideshow from '@/components/BackgroundSlideshow/BackgroundSlideshow'
import styles from './page.module.css'

const navigationLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Provider', href: '#provider' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const treatments = [
  {
    title: 'Anxiety Disorder',
    image: '/ANXIETY.png',
  },
  {
    title: 'ADHD',
    image: '/ADHD.png',
  },
  {
    title: 'Bipolar Disorder',
    image: '/BIPOLAR.png',
  },
  {
    title: 'Depression',
    image: '/Depression.png',
  },
  {
    title: 'Medication Management',
    image: '/MEDICATION.png',
  },
  {
    title: 'Mood Disorder',
    image: '/MOOD.png',
  },
  {
    title: 'OCD',
    image: '/OCD.png',
  },
  {
    title: 'PTSD',
    image: '/PTSD.png',
  },
]

const differentiators = [
  {
    title: 'Personalized treatment roadmaps',
    description:
      'Each visit is collaborative and designed to honor your story, cultural identity, and immediate goals.',
  },
  {
    title: 'Holistic, whole-person focus',
    description:
      'Medication management is paired with lifestyle strategies, therapy coordination, and ongoing encouragement.',
  },
  {
    title: 'Flexible access to care',
    description:
      'Virtual and in-person options with evening and weekend availability ensure care fits your routine.',
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

const testimonials = [
  {
    quote:
      'Akosua made me feel heard from the very first session. We developed a treatment plan that finally feels sustainable.',
    name: 'M.M.',
    role: 'Patient, Jersey City',
  },
  {
    quote:
      'She worked closely with my therapist to ensure my medications and coping skills lined up. I feel balanced again.',
    name: 'R.M.',
    role: 'Patient, Brooklyn',
  },
]

const heroBackgroundImages = [
  '/yo.png',
  '/AdobeStock_629850806.webp',
  // Add more background images here as you upload them to the public folder
]

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <BackgroundSlideshow images={heroBackgroundImages} interval={6000} />
        <div className={styles.announcementBar}>
          <span>Serving New Jersey &amp; New York</span>
          <span className={styles.announcementSeparator} aria-hidden="true">
            •
          </span>
          <span>Accepting Medicare, Medicaid, Aetna, Cigna, Optum &amp; more</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.brandLockup}>
                <div className={styles.brandMark} aria-hidden="true">
                  <img src="/aok logo 2.png" alt="AOK Health Solutions Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
              <nav className={styles.heroNav} aria-label="Primary">
                <ul>
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
                <a className={styles.heroNavCta} href="tel:19733623063">
                  Call (973) 362-3063
                </a>
              </nav>
            </div>
            <div className={styles.heroCopy} id="home">
              <span className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowAccent} aria-hidden="true" />
                <BlurText
                  text="Guiding You to Mental Clarity"
                  delay={30}
                  animateBy="words"
                  direction="top"
                  as="span"
                />
              </span>
              <h1>
                <BlurText
                  text="Personalized psychiatric care grounded in compassion"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  as="span"
                />
              </h1>
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
        </div>
      </header>

      <section className={styles.section} id="treatments">
        <div className={styles.decorativeShape}></div>
        <FadeInWhenVisible duration={0.8}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>✨ Our Expertise</span>
            <h2>Conditions We Treat with Care</h2>
            <p className={styles.sectionSubtitle}>
              Compassionate, evidence-based treatment for a range of mental health conditions.
            </p>
            <p className={styles.sectionDescription}>
              Every journey is unique. We specialize in personalized care that helps you regain balance, confidence, and clarity—one step at a time.
            </p>
          </div>
        </FadeInWhenVisible>
        <StaggerChildren staggerDelay={0.1} childSelector=".treatmentCard">
          <div className={styles.treatmentGrid}>
            {treatments.map((treatment, index) => (
              <FadeInWhenVisible key={treatment.title} delay={index * 0.1} duration={0.6}>
                <article className={styles.treatmentCard}>
                  <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
                  {treatment.image ? (
                    <div className={styles.cardImagePlaceholder}>
                      <img 
                        src={treatment.image} 
                        alt={treatment.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          display: 'block',
                          margin: 0,
                          padding: 0,
                          objectPosition: treatment.title === 'ADHD' ? 'center 20%' : 'center center'
                        }}
                      />
                    </div>
                  ) : (
                    <div className={styles.cardImagePlaceholder}>Image Placeholder</div>
                  )}
                  <h3>{treatment.title}</h3>
                </article>
              </FadeInWhenVisible>
            ))}
          </div>
        </StaggerChildren>
      </section>

      <section className={styles.approachSection} id="approach">
        <div className={styles.approachBackground}></div>
        <FadeInWhenVisible duration={0.8}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>💚 Our Approach</span>
            <h2>Care that centers your lived experience</h2>
            <p>
              We take time to understand every aspect of your health, partnering with you to create a care plan that feels
              practical, affirming, and effective.
            </p>
          </div>
        </FadeInWhenVisible>
        <div className={styles.valueGrid}>
          {differentiators.map((item, index) => (
            <FadeInWhenVisible key={item.title} delay={index * 0.15} duration={0.6}>
              <article className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  {index === 0 && '🌱'}
                  {index === 1 && '🧘'}
                  {index === 2 && '⏰'}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection} aria-label="Patient testimonials">
        <FadeInWhenVisible duration={0.8}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Patient Voices</span>
            <h2>Stories of renewed balance</h2>
            <p>Real experiences from people who partnered with AOK Health Solutions for their mental wellness journey.</p>
          </div>
        </FadeInWhenVisible>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className={styles.testimonialCard}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <span>{testimonial.name}</span>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.providerSection} id="provider">
        <div className={styles.providerCard}>
          <div className={styles.providerImage}>
            <img
              src="/aok.png"
              alt="Akosua Karikari, DNP, PMHNP-BC, FNP-BC"
              style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block', borderRadius: '12px' }}
            />
          </div>
          <div className={styles.providerContent}>
            <FadeInWhenVisible delay={0.2}>
              <span className={styles.sectionTag}>Provider</span>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <h2>Akosua Karikari, DNP, PMHNP-BC, FNP-BC</h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <p>
                Akosua Karikari is a board-certified psychiatric and family nurse
                practitioner with a passion for guiding patients toward lasting
                wellness. Her approach integrates evidence-based medicine with
                heartfelt listening so every person feels seen, respected, and
                empowered.
              </p>
            </FadeInWhenVisible>
            <StaggerChildren staggerDelay={0.15}>
              <ul className={styles.credentialList}>
                <li>Psychiatric Mental Health Nurse Practitioner</li>
                <li>Family Nurse Practitioner</li>
                <li>Adult Gerontology Nurse Practitioner</li>
                <li>Family Emergency Nurse Practitioner</li>
              </ul>
            </StaggerChildren>
            <FadeInWhenVisible delay={0.8} direction="up">
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
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner} aria-label="Schedule a consultation">
        <FadeInWhenVisible duration={0.8} delay={0.1}>
          <div>
            <h2>Ready to start feeling like yourself again?</h2>
            <p>
              Let's talk through your questions, explore treatment options, and craft the first steps toward feeling grounded and
              empowered.
            </p>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible duration={0.8} delay={0.3} direction="up">
          <div className={styles.ctaActions}>
            <Link className={styles.primaryButton} href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765">
              Schedule a Visit
            </Link>
            <a className={styles.secondaryButton} href="mailto:aokhealthsolutions@gmail.com">
              Email the Practice
            </a>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className={styles.section} id="insurance">
        <FadeInWhenVisible duration={0.8}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Insurance</span>
            <h2>Insurance plans we accept</h2>
            <p>
              We partner with a wide range of insurance providers and also welcome
              self-pay clients.
            </p>
          </div>
        </FadeInWhenVisible>
        <div className={styles.insuranceGrid}>
          {insurances.map((plan) => (
            <span key={plan} className={styles.insuranceItem}>
              {plan}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section} id="faq">
        <FadeInWhenVisible duration={0.8}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>FAQ</span>
            <h2>Frequently asked questions</h2>
          </div>
        </FadeInWhenVisible>
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
          <FadeInWhenVisible direction="right" duration={0.8}>
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
              <StaggerChildren staggerDelay={0.15}>
                <ul className={styles.highlightList}>
                  <li>Personalized treatment plans tailored to your goals</li>
                  <li>Convenient telehealth and in-person appointments</li>
                  <li>Evidence-based care informed by advanced nursing expertise</li>
                </ul>
              </StaggerChildren>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="left" duration={0.8} delay={0.2}>
            <div className={styles.aboutVisual}>
              <div className={styles.imagePlaceholder}>Team Image Placeholder</div>
              <div className={styles.placeholderCaption}>Showcase a caring team moment or calming office space</div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <FadeInWhenVisible duration={0.8}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Contact</span>
            <h2>Let&apos;s connect</h2>
            <p>
              Reach out with questions or schedule your visit. We look forward to
              supporting you.
            </p>
          </div>
        </FadeInWhenVisible>
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
            <div className={styles.contactImage}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.27765859156414!2d-74.22649050461714!3d40.93189809843089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c30273d1c43f37%3A0x5d109c5cc40e2476!2s586%20Valley%20Rd%2C%20Wayne%2C%20NJ%2007470%2C%20USA!5e0!3m2!1sen!2s!4v1729361234567!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - 586 Valley Rd, Wayne, NJ 07470"
              ></iframe>
            </div>
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
