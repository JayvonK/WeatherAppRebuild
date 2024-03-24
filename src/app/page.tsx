import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen weatherBg px-16 py-8">
      <div className="boxBg h-full w-full py-6 px-10 rounded-lg">

        {/* First row of the page */}
        <div className="grid grid-cols-[52%_6%_42%] ">

          <div className="flex justify-between">
            <input className="min-h-12 w-full" type="text" placeholder="Search for a city"/>
            <img src="" alt="" />
          </div>

          <div>

          </div>


          <div>

          </div>

        </div>


        {/* Second Row of the page */}
        <div className="grid grid-cols-[52%_6%_42%]">
          <div>

          </div>

          <div className="flex justify-center">
            <div className="line"></div>
          </div>

          <div className="p-5 boxTwoBg w-full rounded-lg">

            <div className="">
              <h1>5 Day Forecast</h1>
            </div>

          </div>
        </div>
      </div>
    </ div>
  );
}
