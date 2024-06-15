/* eslint-disable react/prop-types */
import React from "react";
import { CiGlobe } from "react-icons/ci";
import backgroundImage from "../Assets/careTakerNepali.jpg";
import aboutImg from "../Assets/landingpagejpt.jpg";

const Landing = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-start pl-16 pb-28">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#009C65] w-2 h-24"></div>
              <div className="text-white text-4xl font-bold">
                <p>A place where</p>
                <p>&quot;AGEING IS A BLESSING&quot;</p>
              </div>
            </div>
            <p className="w-96 text-md text-white">
              HHEC is staffed by geriatric trained professionals that offer full
              range of services to elderly ensuring their physical, mental and
              psychological well-being.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className=" my-24 gap-5 px-64 grid grid-cols-2">
          <div className="">
            <h2 className=" text-[#009C65] mb-8 text-2xl font-semibold">
              About US
            </h2>
            <p className=" text-gray-500">
              Pioneering in Alzheimer’s and Dementia Care in Nepal, Hope
              Hermitage Elderly Care is a home delivering assurance of living in
              dignity where facilities and comforts are ensured aligned to
              physical, mental and psychological well-being of the elderly.
              After investing years of time in upbringing your children and
              gaining a social status, we now take this pride to call Hope
              Hermitage Elderly Care your second home where we nurture warmth,
              comfort and a surrounding relieved of daily chores that enable
              enjoyment of living and socializing with likeminded residents,
              enjoying old age; adding years to life in good health.
            </p>
            <h3 className=" font-semibold mt-16 mb-6 text-lg">
              Recreation Activities
            </h3>
            <ol className=" text-gray-500 list-disc grid grid-cols-2 pl-4 ">
              <li>Regular Tai-chi, yoga and meditation class</li>
              <li>Enjoy audio and Video</li>
              <li>Participate in health-related awareness programs</li>
              <li>Participate in health-related camp</li>
              <li>Enjoy reading daily newspapers</li>
              <li>Write articles and poems for monthly newspapers</li>
            </ol>
            <button className=" bg-[#009C65] text-white px-5 py-3 rounded-lg mt-8">
              <a href="#">About US</a>
            </button>
          </div>
          <div className="max-w-none max-h-[600px] overflow-hidden ">
            <img
              src={aboutImg}
              alt="img"
              className="w-full h-full transition-all duration-300 hover:scale-[1.02] bg-contain"
            />
          </div>
        </div>
      </div>
      <div className="py-28 px-12 flex flex-gap justify-center items-center gap-x-4 gap-y-16 flex-wrap bg-white">
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />{" "}
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />{" "}
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />{" "}
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />{" "}
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />
      </div>
    </>
  );
};

function MyComponent({ title, description, readMoreLink, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-50 px-4 py-10 w-96 relative">
      <div className="p-4 bg-green-500 -top-10 absolute">{icon}</div>
      <h1 className="text-black font-bold text-2xl">{title}</h1>
      <p className="text-gray-500 line-clamp-5">{description}</p>
      <a href={readMoreLink} className="text-orange-600">
        Read More &#8594;
      </a>
    </div>
  );
}

export default Landing;
