import styles, {layout} from "../style"
import {apple, bill, google} from  "../assets"


const Billing =()=> {
    return (
        <section id="product" className={`${layout.sectionReverse} flex-1 flex flex-row p-6`}>
            <div className={`${layout.sectionImgReverse}`}>
                 <img src={bill} className={`w-[100%] h-[100%]`} />
            </div>
           
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

                <div>
                    <div className={`flex flex-1  flex-row sm:mt-10 mt-6`}>
                        <img src={apple} className={`w=[130px] mr-5 h-[45px]`} />
                        <img src={google} className={`w=[130px] h-[45px]`} />                        
                    </div>  
                </div>
            </div>
           
        </section>
    )
}

export default Billing
