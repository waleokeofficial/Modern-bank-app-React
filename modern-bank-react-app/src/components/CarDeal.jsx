import Button from './Button'
import {card} from '../assets'
import styles, { layout } from '../style'

const CarDeal =()=> {
    return (
        <section className={layout.section}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>Find a better card deal <br className='hidden md:block sm:block' /> in few easy stepss.</h2>
                    <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <Button styles={`mt-10`}></Button>
                </div>
                <div className={layout.sectionImg}>
                    <img src={card} className={`w-[100%] h-[100%]`}/>
                </div>
        </section>
    )
}

export default CarDeal
