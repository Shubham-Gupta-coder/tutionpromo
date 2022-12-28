import Head from 'next/head'
// #f90588,#5a2776
import { FaChalkboardTeacher, FaChild } from 'react-icons/fa'
import { BiBuildingHouse } from 'react-icons/bi'
export default function Home() {
  return (
    <>
      <Head>
        <title>India's Best Online / Offline Personal Tution Classes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div>
        <div className="main">
          <div className="landing w-screen h-screen flex-col flex items-center justify-center bg-[url(https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2149017896.jpg?w=996&t=st=1671991157~exp=1671991757~hmac=db41c0b2cfdcc5048148d23ddbe525f69db785f9a3c6d7574d683644defda41c)] bg-cover">
            <h1 className='text-9xl font-semibold text-[#5a2776]'>Need A Tution ?</h1>
            <h2 className='my-5  text-xl w-[60vw] text-center'>With Personal Assistance - Doubt Solving - ExtraTime - No Leaves - And More Benifts At Low Cost - Everything At One Place For Every Class And Subject</h2>
          </div>
          <div className="whyus my-10 w-screen h-screen flex-col flex items-center justify-center">
            <h2 className='text-6xl'>Send Your Child And See The Improvement</h2>
            <p className='w-[60vw] my-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident maiores nisi iste dolore debitis eum dolores, laborum vitae magni ea et tenetur ab, commodi ipsam, repudiandae unde! Reprehenderit corporis quam velit quod aut.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw73B2JTDysTXxwpvJFa6QbCNowYZehjGpA&usqp=CAU"
              className='w-96 my-10 p-10 rounded-xl shadow-[20px_20px_0_#f90588]'   alt="" />
          </div>
          <div className="difference my-10 w-screen h-screen flex-col flex items-center justify-center">
            <h1 className='text-6xl'>Why We Made A Difference ?</h1>
            <p className='w-[60vw] my-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident maiores nisi iste dolore debitis eum dolores, laborum vitae magni ea et tenetur ab, commodi ipsam, repudiandae unde! Reprehenderit corporis quam velit quod aut.</p>
            <div className="cards container bg-[#f90588] h-[300px] my-10 rounded-xl flex justify-center">
              <div className="card bg-white w-1/4 h-[400px] rounded-xl shadow-2xl mt-20 mx-10 flex flex-col items-center justify-center">
                <h1 className='text-3xl uppercase font-bold text-[#5a2776] text-center my-10'>All Subjects</h1>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/175/498/small_2x/school-subjects-icons-set-free-vector.jpg" className='w-[80%] rounded-xl' alt="" />
              </div>
              <div className="card bg-white w-1/4 h-[400px] rounded-xl shadow-2xl mt-20 mx-10 flex flex-col items-center justify-center">
                <h1 className='text-3xl uppercase font-bold text-[#5a2776] text-center my-10'>PYQs DPPs Tests</h1>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/ecological-desktop-icon-library/test-11.png" className='w-[80%] rounded-xl' alt="" />
              </div>
              <div className="card bg-white w-1/4 h-[400px] rounded-xl shadow-2xl mt-20 mx-10 flex flex-col items-center justify-center">
                <h1 className='text-3xl uppercase font-bold text-[#5a2776] text-center my-10'>Extra Classes</h1>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/student-studying-in-classroom-4036137-3345618.png" className='w-[80%] rounded-xl' alt="" />
              </div>
            </div>
          </div>
          <section className="text-gray-600 my-40 mb-20 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-6xl font-medium title-font my-4 text-gray-900">Need A Reason To Trust ?</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">3.7K</h2>
                    <p className="leading-relaxed">Parents Trusted Us</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 flex flex-col items-center px-4 py-6 rounded-lg justidy-around">
                    <FaChild className='text-4xl my-3 text-[#f90588]'/>
                    <h2 className="title-font font-medium text-3xl text-[] text-gray-900">2.3K</h2>
                    <p className="leading-relaxed">Students Got A+</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center justify-around">
                    <FaChalkboardTeacher className='text-4xl my-3 text-[#f90588]' />
                    <h2 className="title-font font-medium text-3xl text-gray-900">14</h2>
                    <p className="leading-relaxed">Years Experience</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center justify-around">
                    <BiBuildingHouse className='text-4xl my-3 text-[#f90588]' />
                    <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                    <p className="leading-relaxed">Places</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-6xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Book a Tution Class For Your Child Now !</p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                      <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                      <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label for="message" className="leading-7 text-sm text-gray-600">Address</label>
                      <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Submit</button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-pink-500">megatutions@email.com</a>
                    <p className="leading-normal my-5">49 Smith St.
                      <br/>Saint Cloud, MN 56301
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
