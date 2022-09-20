import React from 'react'

const Button =({styles})=> {
    return (
        <button type="button" className={`rounded-[7px] outline:none font-poppins font-medium bg-blue-gradient mt-10 text-white px-6 py-4 text-[18px] text-primary ${styles}`}>
            Get Started
        </button>

    )
}

export default Button
