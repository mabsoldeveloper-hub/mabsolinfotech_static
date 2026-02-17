import React from 'react'

const OurCustomer = () => {
    return (
        <div className='lg:px-20 px-6 py-10 bg-white'>
            <div className='text-center'>
                <h1 className='text-[#185e9a] text-2xl font-bold underline'>
                    # Our Customer
                </h1>

                <p className='text-4xl font-bold font-serif py-6 text-black'>
                    <span className='text-4xl text-[#185e9a]'>See What Our Customer Have to Say:</span> Video Review's
                </p>

                <div className="pt-4 w-full flex justify-center items-center">
                    <hr className="w-[20%] border-t-4 border-blue-800" />
                </div>
                <p className='italic pt-10 max-w-[1200px] text-center mx-auto text-black'>
                    At Mabsol Infotech, our commitment to excellence is reflected in the success
                    stories of our clients. We invite you to explore our collection of video testimonials,
                    where real customers share their firsthand experiences with our software solutions,
                    including Narg, Tally, and Busy. These videos capture genuine feedback from businesses
                    that have leveraged our tools to enhance efficiency, streamline operations, and achieve remarkable results.
                    Watch as our clients describe how our innovative software has made a tangible difference in their daily
                    operations and overall success.
                </p>
            </div>
        </div>
    )
}

export default OurCustomer