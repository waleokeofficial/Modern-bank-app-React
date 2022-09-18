import { stats } from '../constants'
import styles from '../style'

function Stats() {
    return (
        <section className={`flex-row flex-wrap mb-6 sm:mb-20 ${styles.flexCenter}`}>
            {stats.map((statistics) => (
                <div key={statistics.id} className={`items-center justify-start flex flex-row m-3 flex-1 `}>
                    <h4 className={`font-poppins font-semibold text-[30px] xs:text-[43px] leading-[43px] xs:leading-[53px] text-white`}>{statistics.value}</h4>
                    <p className={`font-poppins font-normal text-[15px] xs:text-[20px] leading-[26px] ml-3 xs:leading-[25px] uppercase text-gradient`}>{statistics.title}</p>
                </div>
            ))}
        </section>
    )
}

export default Stats