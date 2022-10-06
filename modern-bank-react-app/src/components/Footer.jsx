import styles from '../style'
import { socialMedia, footerLinks } from '../constants'
import {logo} from '../assets'

const Footer =()=> {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
            <div className={`${styles.flexStart} md:flex-row flex-col my-4 w-full`}>
                <div className={`flex flex-1 flex-col justify-start mr-10  cursor-pointer`}>
                    <img alt='logo' src={logo} className={`w-[266px] h-[72px] object-contain`}/>
                    <p className={`${styles.paragraph} max-w-[310px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
                </div>

                <div className={`flex-col ss:flex-row flex w-full flex-[2] justify-between my-4 flex-wrap mr-10 text-white`}>
                    {
                       footerLinks.map((fLinks) => (
                            <div key={fLinks.key} className='flex-col flex my-4 min-w-[150px]'>
                                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white cursor-pointer'>
                                    {fLinks.title}
                                </h4>
                                <ul className='font-poppins font-normal mt-4 text-[16px]  leading-[24px] cursor-pointer'>
                                        {fLinks.links.map((fLinksLists, index) => (
                                            <li key={fLinksLists.name} className={`hover:text-secondary text-dimWhite list-none ${index === fLinks.links.length - 1 ? "mb-0" : "mb-4"}`}>{fLinksLists.name}</li>    
                                        ))}                                    
                                </ul>
                            </div>
                       )) 
                    }   
                </div>
            </div>
            <div className='flex md:flex-row flex-col w-full justify-between items-center mt-5 border-t-[1px] border-t-[3f3e45] pt-6'>
                <p className=' font-poppins font-normal text-[18px] leading-[27px] text-white cursor-pointer'>2021 HooBank. All Rights Reserved.</p>
                <div className='flex flex-row md:mt-0 mt-5'>
                    {socialMedia.map((icon, index) => (
                        <img src={icon.icon} alt={icon.id} key={icon.id} className={`w-[21px] h-[21px] ${index === socialMedia.length -1 ? "mr-0" : "mr-6"  }`}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Footer
