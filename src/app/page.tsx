import Image from "next/image";
import star from '../../public/images/star-fill.svg';
import thermometer from '../../public/images/thermometer-fill.svg';
import calender from '../../public/images/calendar-blank-fill.svg'

export default function Home() {
  return (
    <div className="min-h-screen weatherBg px-16 py-8">
      <div className="boxBg h-full w-full py-10 px-10 rounded-lg">

        {/* First row of the page */}
        <div className="grid grid-cols-[52%_6%_42%] mb-8">

          <div className="flex justify-between">
            <input className="min-h-12 w-full rounded-[25px]" type="text" placeholder="Search for a city" />

          </div>

          <div>

          </div>


          <div>

          </div>

        </div>


        {/* Second Row of the page */}
        <div className="grid grid-cols-[52%_6%_42%]">
          <div>

            <div className="p-8 boxTwoBg w-full rounded-lg">

              <h1 className="josefin text-center text-white text-6xl font-bold mb-8">Current Weather</h1>

              <div className="flex justify-center">

                <h3 className="text-white josefin text-4xl mb-8">Stockton, CA</h3>

                <img src={star.src} alt="" />

              </div>

              <div className="mb-10">
                <h1 className="josefin text-9xl text-center text-white">62</h1>
              </div>

              <h1 className="text-white josefin text-5xl text-center mb-4">Clear Sky</h1>

            </div>

            <div className="p-14">


              <div className="flex justify-between">
                <div className="grid-cols-[45%_10%_45%] flex items-center justify-center min-w-[360px]">
                  <div className="flex mr-9">
                    <p className="josefin text-white text-3xl">Max</p>
                    <img src={thermometer.src} alt="" />
                  </div>
                  <div className="line min-h-[48px]">

                  </div>
                  <div className="ml-9">
                    <p className="josefin text-white text-3xl">65°F</p>
                  </div>
                </div>

                <div className="grid-cols-[45%_10%_45%] flex items-center justify-center min-w-[360px]">
                  <div className="flex mr-9">
                    <p className="josefin text-white text-3xl">Max</p>
                    <img src={thermometer.src} alt="" />
                  </div>
                  <div className="line min-h-[48px]">

                  </div>
                  <div className="ml-9">
                    <p className="josefin text-white text-3xl">65°F</p>
                  </div>
                </div>

              </div>


            </div>

          </div>


          <div className="flex justify-center">
            <div className="line"></div>
          </div>

          <div className="p-8 boxTwoBg w-full rounded-lg min-h-[785px]">

            <div className="flex items-center">
              <img className="min-h-[90px] pb-2 mr-9" src={calender.src} alt="" />
              <h1 className="josefin text-white text-7xl font-bold text-center w-full">5 Day Forecast</h1>
            </div>

            <hr className="my-10"/>

          </div>
        </div>
      </div>
    </ div>
  );
}
