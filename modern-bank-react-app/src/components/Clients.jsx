import React from 'react'
import styles from '../style'
import {clients} from '../constants'

const Clients =()=>  (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`flex flex-wrap w-full ${styles.flexCenter} `}>
                {clients.map((brand) => (
                    <div key={brand.id} className={`py-4 px-4 rounded-[20px] hover:bg-[white] flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                        <img src={brand.logo} alt={client} className={` object-contain sm:w-[192px] w-[100px]`} />
                    </div>
                ))}
            </div>
        </section>
    )


export default Clients
