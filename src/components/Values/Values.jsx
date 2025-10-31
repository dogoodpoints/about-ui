import React from 'react'
import classes from './Values.module.css'

function Values() {
  return (
    <section className={classes.container}>
      <h2 className={classes.heading}>
        Trusted By Values-Driven Companies, Builders, & Creators
      </h2>

      <div className={classes.logosRow}>
        <div className={classes.logoText}>UnCharitable</div>
        <img
          className={classes.logoImg}
          src="/images/sca-white.png"
          alt="Sun Country Airlines"
        />
        <div className={classes.logoText}>
          <img
            src="/images/empathy-black.png"
            alt="empathy"
            className={classes.empathyImg}
          />
        </div>
      </div>

      <div className={classes.calloutBox}>
        <ul
          className={classes.checklist}
          style={{
            "--check-icon": `url(${process.env.PUBLIC_URL}/images/line.png)`,
          }}
        >
          <li>
            Raised in days, not months: Sun Country Airlines launched a
            successful global giving campaign in days.
          </li>
          <li>
            Raised thousands in donations through Twitch creator campaigns
          </li>
          <li>
            Helped early-stage entrepreneurs build trust through compliant
            charitable initiatives
          </li>
          <li>
            Enabled small businesses to run tax-deductible fundraisers without
            forming a 501(c)(3)
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Values
