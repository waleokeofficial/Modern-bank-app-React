import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import GetStarted from './GetStarted'
import '../index.css';

const Hero  =()=> {
    return (
       <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
             <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>
                <div className='flex flex-row items-center bg-discount-gradient rounded-[10px] mb-4 py-[6px] mb-2 px-4'>
                    <img src={discount} alt="discount" className={`w-[32px] h-[32px]`}/>
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-white'>20%</span>  Discount for {"  "}
                        <span className='text-white'> 1 Month </span> Account
                    </p>
                </div>

                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-white flex-1 font-poppins text-[52px] ss:text-[72px] font-semibold leading-[75px] ss:leading-[100px]'>
                        The Next <br classname={`sm:block hidden`} /> {" "}
                        <span className='text-gradient'>
                            Generation
                        </span> <br classname={`sm:block hidden`} /> {" "} 
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted></GetStarted>
                    </div>  
                </div>

                <h1 className='text-white font-poppins text-[52px] ss:text-[62px] font-semibold leading-[75px] ss:leading-[100px]'>
                        Payment Solution.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px]`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.
                </p>
            </div>

            <div className=''>
                <img src={robot} alt="billing" className={`z-[5] relative w-[100%] h-[100%]`} />
                <div className="z-[0] h-[40%] w-[35%] absolute top-0 pink__gradient" />
                <div className="z-[1] h-[80%] w-[80%] absolute bottom-40 rounded-full  white__gradient" />
                <div className="z-[0] h-[50%] w-[50%] absolute bottom-20 right-20 blue__gradient" />
            </div>
       </section>
    )
}

export default Hero
