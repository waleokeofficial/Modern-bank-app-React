import styles, {layout} from "../style"
import Button from './Button'
import {features} from '../constants'

const FeatureCard = ({icon, title, content, index})=> (
    <div className={`flex flex-row p-6  rounded-[20px] ${index === features.length - 1 ? "mb-0" : "mb-6"} feature-card`}>
        <div className={`[h-64px] w-[64px] ${styles.flexCenter} bg-dimBlue rounded-full `}>
            <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`}/>           
        </div>
        <div className="ml-6 flex-1 flex flex-col ">
            <h2 className="font-poppins mb-1 font-semibold text-[18px] leading-[24px] text-white">{title}</h2>
            <p className={` text-[16px] leading-[24px] font-poppins font-normal text-white text-dimWhite`}>{content}</p>
        </div>
        
    </div>
)

const Business =()=> {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we’ll handle the money.</h2>
                <p className={`${styles.paragraph} max-w-[470px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button styles={`mt-10`} />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feat, index) => (
                    <FeatureCard key={feat.id} {...feat} index={index}/>
                ))}
            </div>
            
        </section>
    )
}

export default Business
