import {feedback} from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'


function Testimonials() {
    return (
        <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className={`w-full flex justify-between items-center md:flex-row flex-col mb-6 sm:mb-16 relative z-[1]`}>
                <h2 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h2>
                <div className={`w-full mt-6 md:mt-0`}>
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
            </div>

            <div className={`flex w-full relative z-[1] flex-wrap justify-center sm:justify-start feedback-container`}>
                {
                    feedback.map((card) => (
                        <FeedbackCard key={card.id} {...card}/>
                    ))
                }
            </div>

            <div className='absolute blue__gradient rounded-full w-[60%] h-[60%] -right-[50%] z-[0]' />
        </section>
    )
}

export default Testimonials
