import React from 'react'

function banner() {
    return (
        <>
            <div className='bg-white '>

                <div className='flex   flex-col md:flex-row'>
                    <div className='basis-1/2 md:m-5 m-3 md:p-5     '>
                        <h1 className='font-bold font-serif mt-[10%] md:mt-[20%]'>Deliciously Affordable Bachelor's Food Shop Now for Easy Meals</h1>
                        <p className='text-[13px]'>Discover a world of convenience and flavor with our Bachelor's Food collection. Whether you're a busy student, a solo professional, or simply looking for quick and tasty meals, our e-commerce store offers a wide range of affordable, ready-to-cook options that will satisfy your cravings and save you time</p>
                        <button className='bg-red-500 hover:bg-green-500 p-3 w-[100px] text-white'>Order Now</button>
                    </div>

                    <div className='flex gap-2 md:m-7 m-2 banner'>
                        <div className='flex gap-[200px] '>
                            <div>
                                <img className='mt-[200px] w-[200px] object-cover h-[160px] animate-bounce rounded-full ' src="https://img.freepik.com/free-psd/top-view-keto-diet-dish-still-life_23-2150634208.jpg?w=740&t=st=1698995187~exp=1698995787~hmac=dda59ba5e2d894aa38aa118f0a487521ae15d86d92a287b242923b19306e2274" alt="" />
                            </div>
                            <div>
                            <img className='w-[200px] object-cover h-[160px] animate-bounce rounded-full' src="https://img.freepik.com/free-psd/top-view-keto-diet-dish-still-life_23-2150634215.jpg?w=740&t=st=1698995196~exp=1698995796~hmac=e82565cd1bc71fd64e6dab2db36ba15ef73a4e3d7a1f0e8857d8f7a213f2e26b" alt="" />
                            </div>
                        </div>
                        




                        {/* <img className='md:p-5' src="https://img.freepik.com/premium-photo/vegan-salad-fresh-vegetables-cabbage-romanesko_2829-18879.jpg?w=740" alt="" /> */}

                    </div>


                </div>
            </div>
        </>
    )
}

export default banner