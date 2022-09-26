import styles from "../style"
import {quotes} from '../assets'

function FeedbackCard({content, name, title, img}) {
    return (
        <div className={`max-w-[370px] justify-between py-12 px-10 mr-0 md:mr-10 sm:mr-5 my-5 rounded-[20px] flex flex-col feedback-card`}>
            <img src={quotes} className={`w-[42px] h-[27px] object-contain`}/>
            <p className={`font-poppins my-10 font-normal text-white text-[18px] leading-[32px]`}>{content}</p>

            <div className="flex flex-row">
                <img src={img} className={`w-[48px] h-[48px] rounded-full`}/>
                <div className="flex flex-col ml-4">
                    <h4 className={`font-poppins font-semibold text-white text-[20px] leading-[32px]`}>{name}</h4>
                    <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px]`}>{title}</p>
                </div>
            </div>

        </div>
    )
}
//hghlight text ctrl+shift+c takes you to cmd prompt

export default FeedbackCard
