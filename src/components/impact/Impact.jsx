import React from 'react'
import classes from './Impact.module.css'

function Impact() {
  return (
    <>
    <section className={classes.container}>
      <div className={classes.headlineWrap}>
        <h2 className={classes.heading}>Introducing NaaS:</h2>
        <h2 className={classes.heading}>Nonprofit-as-a-Service</h2>
      </div>

      <p className={classes.subheading}>
        Operate under DoGood’s established non-profit 501(c)(3) status and gain everything
        you need to launch quickly and scale confidently:
      </p>
<br />
<br />
      <div className={classes.features}>
        <div className={classes.feature}>
          <img src="/images/building-gov.png" alt="legal" className={classes.featureIcon} />
          <div className={classes.featureLabel}>Legal Structure</div>
        </div>

        <div className={classes.feature}>
         <img src="/images/box.png" alt="donation" className={classes.featureIcon} />
          <div className={classes.featureLabel}>Donation Infrastructure</div>
        </div>

        <div className={classes.feature}>
         <img src="/images/bullhorn.png" alt="campaign" className={classes.featureIcon} />
          <div className={classes.featureLabel}>Campaign Tools</div>
        </div>
      </div>
<br />
      <div className={classes.headlineWrap}>
        <h2 className={classes.heading}>Everything You Need To</h2>
        <h2 className={classes.heading}>Run a Nonprofit</h2>
      </div>
      



      <div className={classes.cards}>
        <div className={classes.card}>
          <h3 className={classes.cardTitle}>Turnkey Fiscal Sponsorship</h3>
          <p className={classes.cardBody}>Operate under DoGood’s established 501(c)(3) status to accept donations and run campaigns without legal paperwork</p>
        </div>
        <div className={classes.card}>
          <h3 className={classes.cardTitle}>Donation Processing</h3>
          <p className={classes.cardBody}>Instantly accept tax-deductible cash, stock, or crypto donations and generate automated receipts</p>
        </div>
        <div className={classes.card}>
          <h3 className={classes.cardTitle}>Built-In Compliance</h3>
          <p className={classes.cardBody}>Stay IRS-compliant with audit-ready reporting and 990 prep</p>
        </div>
        <div className={classes.card}>
          <h3 className={classes.cardTitle}>Campaign Tools</h3>
          <p className={classes.cardBody}>Launch branded fundraising pages and access nonprofit-only discounts and grant tools</p>
        </div>
        <div className={classes.card}>
          <h3 className={classes.cardTitle}>Impact Reporting</h3>
          <p className={classes.cardBody}>Track funds and generate transparent impact reports</p>
        </div>
        <div className={classes.card}>
          <h3 className={classes.cardTitle}>Social Impact Data Hub</h3>
          <p className={classes.cardBody}>Connect with 2M+ verified nonprofits for values-aligned partnerships</p>
        </div>
      </div>
      <p className={classes.faqLine}>
        Have questions? See our <a className={classes.faqLink} href="#faq">FAQ</a>
      </p>

      <div className={classes.pricingWrap}>
        <h2 className={classes.pricingHeading}>Simple, Transparent Pricing</h2>
        <div>
          <p className={classes.pricingKicker}>Start Your Mission</p>
          <p className={classes.pricingSubKicker}>Starting at</p>
          <div className={classes.pricingAmountRow}>
            <span className={classes.pricingAmount}>$25.00</span>
            <span className={classes.pricingPer}>/Month</span>
          </div>
          <p className={classes.pricingFine}>+ 5% of donations processed</p>
          <a
            href="https://meetings.hubspot.com/do-good/naas?uuid=2aa286ae-cba2-4bb2-8088-0c7442b7becd"
            className={classes.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Call
          </a>
          <p className={classes.pricingNote}>No long-term commitment.</p>
        </div>
      </div>

     
    
    </section>
    
   </>
  )
}

export default Impact
