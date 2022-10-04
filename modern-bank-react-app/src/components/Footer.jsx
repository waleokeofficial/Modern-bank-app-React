import styles from '../style'
import { socialMedia, footerLinks } from '../constants'
import {logo} from '../assets'

const Footer =()=> {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
            <div className={`${styles.flexStart} md:flex-row flex-col my-4 w-full`}>
                <div className={`flex flex-1 flex-col justify-start mr-10`}>
                    <img alt='logo' src={logo} className={`w-[266px] h-[72px] object-contain`}/>
                    <p className={`${styles.paragraph} max-w-[310px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
                </div>

                <div className={`flex-col ss:flex-row flex w-full flex-[2] justify-between my-4 flex-wrap mr-10 text-white`}>
                    {
                       footerLinks.map((fLinks) => (
                            <div key={fLinks.key} className='flex-col flex my-4 min-w-[150px]'>
                                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                                    {fLinks.title}
                                </h4>
                                <ul className='font-poppins font-normal mt-4 text-[16px]  leading-[24px]'>
                                        {fLinks.links.map((fLinksLists) => (
                                            <li key={fLinksLists.name} className='hover:text-secondary text-dimWhite list-none'>{fLinksLists.name}</li>
                                        ))}
                                </ul>
                            </div>
                       )) 
                    }   
                </div>
            </div>
        </section>
    )
}

export default Footer
