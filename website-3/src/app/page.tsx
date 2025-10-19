import Link from 'next/link'
import Image from 'next/image'
import BlurText from '@/components/BlurText/BlurText'
import AnimatedContent from '@/components/AnimatedContent/AnimatedContent'
import FadeInWhenVisible from '@/components/FadeInWhenVisible/FadeInWhenVisible'
import TextReveal from '@/components/TextReveal/TextReveal'
import StaggerChildren from '@/components/StaggerChildren/StaggerChildren'
import BackgroundSlideshow from '@/components/BackgroundSlideshow/BackgroundSlideshow'
import SmoothNavigation from '@/components/SmoothNavigation/SmoothNavigation'
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
    image: '/DEPRESSION.png',
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
  '/HERO2.png',
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
                <SmoothNavigation
                  links={navigationLinks}
                  offset={120}
                />
                <a className={styles.heroNavCta} href="tel:19734471479">
                  Call (973) 447-1479
                </a>
              </nav>
            </div>
            <div className={styles.heroCopy} id="home">
              <span className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowAccent} aria-hidden="true" />
                <BlurText
                  text="Board-certified PMHNP • Holistic, evidence-based treatment • You'll be heard"
                  delay={30}
                  animateBy="words"
                  direction="top"
                  as="span"
                />
              </span>
              <h1>
                <BlurText
                  text="Compassionate psychiatric care for anxiety, depression, and more"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  as="span"
                />
              </h1>
              
              <div className={styles.trustBadges}>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>✓</span>
                  <span>Board-Certified PMHNP</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>✓</span>
                  <span>Verified by Psychology Today</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>✓</span>
                  <span>Licensed in NY & NJ</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                >
                  Book a Free 15-Minute Consultation
                </Link>
                <a className={styles.secondaryButton} href="#treatments">
                  Explore Services
                </a>
              </div>
              <div className={styles.heroDetails}>
                <div>
                  <span className={styles.detailHeading}>Locations</span>
                  <p>Virtual &amp; in-person visits across NJ &amp; NY</p>
                </div>
                <div>
                  <span className={styles.detailHeading}>Languages</span>
                  <p>English, Twi</p>
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
            <span className={styles.sectionTag}>Our Expertise</span>
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
            <span className={styles.sectionTag}>Our Approach</span>
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

      <section className={styles.aboutSection} id="provider">
        <div className={styles.aboutContainer}>
          <FadeInWhenVisible duration={0.8}>
            <div className={styles.aboutHeader}>
              <span className={styles.sectionTag}>Meet Your Provider</span>
              <h2>Akosua Karikari, PMHNP-C</h2>
              <p className={styles.aboutSubtitle}>
                Board-Certified Psychiatric Mental Health Nurse Practitioner
              </p>
            </div>
          </FadeInWhenVisible>

          <div className={styles.aboutGrid}>
            <FadeInWhenVisible direction="left" duration={0.8} delay={0.2}>
              <div className={styles.aboutImageSection}>
                <div className={styles.providerImageWrapper}>
                  <img 
                    src="/aok2.jpg" 
                    alt="Akosua Karikari, PMHNP-C" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '1.5rem'
                    }}
                  />
                </div>
                <div className={styles.credentialsBadges}>
                  <div className={styles.credBadge}>
                    <div>
                      <strong>Education</strong>
                      <p>Post-Master's Certificate, 2024</p>
                    </div>
                  </div>
                  <div className={styles.credBadge}>
                    <div>
                      <strong>Verified</strong>
                      <p>Psychology Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible direction="right" duration={0.8} delay={0.3}>
              <div className={styles.aboutTextSection}>
                <div className={styles.aboutIntro}>
                  <p className={styles.leadText}>
                    "I provide compassionate, personalized psychiatric care in a safe, nonjudgmental space. My holistic approach recognizes the connection between mental and physical health."
                  </p>
                </div>

                <div className={styles.credentialsGrid}>
                  <div className={styles.credentialItem}>
                    <h4>Board Certification</h4>
                    <p>Psychiatric Mental Health Nurse Practitioner (PMHNP-C)</p>
                  </div>
                  <div className={styles.credentialItem}>
                    <h4>Licenses</h4>
                    <p>NY: F406380-01 (2024)<br />NJ: 26NJ00576200 (2024)</p>
                  </div>
                  <div className={styles.credentialItem}>
                    <h4>Treatment Modalities</h4>
                    <p>Cognitive Behavioral Therapy (CBT), Motivational Interviewing, Medication Management</p>
                  </div>
                  <div className={styles.credentialItem}>
                    <h4>Communities Served</h4>
                    <p>LGBTQ+, BIPOC, First Responders, HIV/AIDS, Sex Workers, Racial Justice Allies</p>
                  </div>
                  <div className={styles.credentialItem}>
                    <h4>Ages Served</h4>
                    <p>Children (6–10), Preteens, Teens, Adults, Elders (65+)</p>
                  </div>
                  <div className={styles.credentialItem}>
                    <h4>Languages</h4>
                    <p>English, Twi</p>
                  </div>
                </div>

                <div className={styles.philosophyBox}>
                  <h3>My Philosophy</h3>
                  <p>
                    Your care is collaborative and evidence-based. Together we'll identify patterns, build coping skills, and create a plan that blends CBT, medication management, and holistic strategies—so you can feel balanced, resilient, and well.
                  </p>
                </div>

                <Link
                  className={styles.primaryButton}
                  href="https://www.tebra.com/care/provider/akosua-karikari-np-1447632765"
                >
                  Book Your Free Consultation
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>
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
              <strong>Phone:</strong> <a href="tel:19734471479">(973) 447-1479</a>
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
