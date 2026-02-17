"use client"

import { Button, Progress } from 'antd'
import React, { useEffect, useState } from 'react'

const CompanyProformance = () => {

    const targetPercents = [92, 85, 70, 75];
    const years = [2024,2023,2022,2021];


    const [percents, setPercents] = useState(Array(targetPercents.length).fill(0));

    useEffect(() => {
        const timer = setTimeout(() => {
            setPercents(targetPercents);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-6 bg-white mt-20 py-10 gap-6'>
            <div  data-aos="fade-right" className=''>
                <h1 className='text-4xl font-bold text-[#185e9a] py-6'>
                    Results For The Last 3 Years
                </h1>
                <p className='text-lg italic text-black'>
                    We will strive to meet all your business necessities and plans. You can rely on easy accessibility to our qualified staff.
                </p>
                <p className='text-lg italic py-6 text-black'>
                    Feel free to have a look at the services we are providing and to contact us for a detailed review of your case and a quote. Stay up-to-date and receive professional advice on specific regulatory requirements.
                </p>
                <Button  className='!px-10 !bg-[#185e9a] !text-white !rounded-none !py-5 !font-semibold'>
                    Contact Us
                </Button>
            </div>

            <div style={{ width: '100%' }} className="flex flex-col gap-10 justify-center items-center">
                {percents.map((item, index) => (
                    <div key={index} className='w-full'>
                        <p className="text-sm font-semibold mb-1 text-gray-700">{years[index]}</p>
                        <Progress
                            strokeLinecap="butt"
                            percent={item}
                            size={['undefined', 30]}
                            showInfo={true}
                            strokeColor="#185e9a"
                            className="smooth-progress w-full"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CompanyProformance