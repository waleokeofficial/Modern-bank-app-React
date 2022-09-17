import React from 'react'
import styles from './style'
import {Navbar, Hero, Business, Billing, CarDeal, Testimonials, Clients, CTA, Stats,
Footer} from './components';

const App = () =>  (
    <div className="bg-secondary overflow-hidden w-full">
      <div className={`${styles.paddingX} ${styles.flexStart} }`}>
        <div className={ `${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CarDeal  />
          <Testimonials  />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )

export default App