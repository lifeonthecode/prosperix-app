import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Brand from '../../Components/Brand/Brand';
import Expertise from '../../Components/Expertise/Expertise';
import OurService from '../../Components/OurService/OurService';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Team from '../../Components/Team/Team';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div className='w-full bg-white'>
            <div className="lg:container mx-auto lg:px-0 px-4">


                {/* banner component  */}
                <div>
                    <Banner/>
                </div>

                {/* brand component  */}
                <div>
                    <Brand/>
                </div>

                {/* expertise component  */}
                <div>
                    <Expertise/>
                </div>

                {/* our service component  */}
                <div id='service'>
                    <OurService/>
                </div>

                {/* testimonial component  */}
                <div>
                    <Testimonial/>
                </div>

                {/* team component  */}
                <div>
                    <Team/>
                </div>

                {/* contact component  */}
                <div id='contact'>
                    <Contact/>
                </div>

            </div>
        </div>
    );
};

export default Home;