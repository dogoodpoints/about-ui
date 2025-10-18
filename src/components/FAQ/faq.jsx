import React, { useRef, useState } from 'react'
import classes from './faq.module.css'

const FAQ_ITEMS = [
  {
    q: 'What is Turnkey Fiscal Sponsorship?',
    a: (
      <>
        <p>Skip the compliance and legal complexities of forming your own nonprofit. With Do Good as your fiscal sponsor, you can accept donations, run campaigns, and report impact—without the legal headaches.</p>
        <ul>
          <li>Launch a foundation or cause fund in weeks, not years.</li>
          <li>Accept tax-deductible donations instantly under Do Good’s 501(c)(3).</li>
          <li>Test new social impact programs without long-term commitments.</li>
          <li>Focus on growth while we handle the backend.</li>
        </ul>
      </>
    ),
  },
  { q: 'How does Do Good handle compliance?', a: <p>We manage 501(c)(3) oversight, state registrations, banking, receipting, and annual filings so your programs stay compliant end-to-end.</p> },
  { q: 'How are donations processed?', a: <p>Donations are processed through our compliant giving infrastructure with automatic receipts, restricted fund tracking, and transparent reporting.</p> },
  { q: 'What campaign tools do I get?', a: <p>Landing pages, embeddable widgets, CRM exports, and integrations to run high-performing, measurable campaigns.</p> },
  { q: 'How is impact reported?', a: <p>Dashboards and periodic reports summarize donations, programs, and outcomes for stakeholders and tax purposes.</p> },
  { q: 'Can Do Good help me find partners?', a: <p>Yes. Tap into 1.7M+ vetted nonprofits and our partnership network to accelerate program-mission fit.</p> },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  const contentRefs = useRef([])

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  const getHeight = (index) => {
    const el = contentRefs.current[index]
    return el ? el.scrollHeight : 0
  }

  return (
    <section className={classes.container} id="faq">
      <h2 className={classes.title}>Frequently Asked Questions</h2>
      <div className={classes.list}>
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = index === openIndex
          return (
            <div key={index} className={`${classes.item} ${isOpen ? classes.open : ''}`}>
              <button className={classes.header} onClick={() => toggle(index)} aria-expanded={isOpen}>
                <span className={classes.question}>{item.q}</span>
                <span className={`${classes.icon} ${isOpen ? classes.iconOpen : ''}`}>▾</span>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`${classes.content} ${isOpen ? classes.contentOpen : ''}`}
                style={{ maxHeight: isOpen ? `${getHeight(index)}px` : '0px' }}
              >
                <div className={classes.contentInner}>{item.a}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
