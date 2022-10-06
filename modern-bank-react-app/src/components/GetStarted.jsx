import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

function GetStarted() {
    return (
        <div className={`${styles.flexStart} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col w-[140px] h-[140px] bg-primary rounded-full h-[100%] w-[100%]`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className={`font-poppins font-medium text-gradient text-[18px] leading-[23px]`}>
                        <span className={`text-white`}>Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain'/>
                </div>
                <p className={`font-poppins font-medium text-gradient text-[18px] leading-[23px]`}>
                        <span className={`text-white`}>Started</span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted
