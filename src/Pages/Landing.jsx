/* eslint-disable react/prop-types */
import React from "react";
import { CiGlobe } from "react-icons/ci";
import backgroundImage from "../Assets/careTakerNepali.jpg";
import aboutImg from "../Assets/landingpagejpt.jpg";
import { Link } from "react-router-dom";
import Logo from "../Assets/LogoWhitetext.png";

const Landing = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-start p-8 sm:pl-16 sm:pb-28">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#009C65] w-2 h-12 sm:h-24"></div>
              <div className="text-white text-2xl sm:text-4xl font-bold">
                <p>A place where</p>
                <p>&quot;AGEING IS A BLESSING&quot;</p>
              </div>
            </div>
            <p className="w-full sm:w-96 text-sm sm:text-md text-white">
              HHEC is staffed by geriatric trained professionals that offer full
              range of services to elderly ensuring their physical, mental and
              psychological well-being.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="my-12 px-6 sm:my-24 sm:px-16 lg:px-64 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-40">
          <div>
            <h2 className="text-[#009C65] mb-4 sm:mb-8 text-xl sm:text-2xl font-semibold">
              About Us
            </h2>
            <p className="text-gray-500">
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
            <h3 className="font-semibold mt-8 sm:mt-12 mb-4 sm:mb-6 text-lg">
              Recreation Activities
            </h3>
            <ol className="text-gray-500 list-disc pl-4 space-y-2">
              <li>Regular Tai-chi, yoga and meditation class</li>
              <li>Enjoy audio and Video</li>
              <li>Participate in health-related awareness programs</li>
              <li>Participate in health-related camp</li>
              <li>Enjoy reading daily newspapers</li>
              <li>Write articles and poems for monthly newspapers</li>
            </ol>
            <button className="bg-[#009C65] text-white px-5 py-3 rounded-lg mt-8 hover:text-[#009C65] hover:bg-gray-100 border-solid border-2 border-transparent hover:border-[#009C65] transition-all">
              <a href="#">About Us</a>
            </button>
          </div>
          <div className="overflow-hidden max-h-[400px] lg:max-h-[600px]">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-28 px-6 sm:px-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-4 gap-y-8 sm:gap-y-16 bg-white">
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
        <MyComponent
          title="Block A / CriticalNursing 24/7 care"
          description="Critical care, Alzheimer’s & related dementia care, post hospital recovery care, long term palliative care, disability care and physiotherapy...."
          readMoreLink="/read-more"
          icon={<CiGlobe color="white" size={36} />} // Pass CiGlobe icon component
        />
      </div>

      <footer className="bg-[#009C65] text-white py-12 mt-16">
        <div className="container mx-auto px-6 lg:px-64 grid grid-cols-1 md:grid-cols-4 gap-8">
          <img src={Logo} className="w-24" alt="hello" />
          <div>
            <h3 className="text-xl font-bold mb-4">
              Hope Hermitage Elderly Care
            </h3>
            <p>
              Providing compassionate and comprehensive care to the elderly,
              ensuring their dignity and well-being.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Elderly Care St, Kathmandu, Nepal</p>
            <p>Email: info@hopehermitage.com</p>
            <p>Phone: +977-1-1234567</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-200">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Hope Hermitage Elderly Care. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

function MyComponent({ title, description, readMoreLink, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-50 px-4 py-10 w-full sm:w-96 relative">
      <div className="p-4 bg-green-500 -top-10 absolute">{icon}</div>
      <h1 className="text-black font-bold text-xl sm:text-2xl text-center">{title}</h1>
      <p className="text-gray-500 line-clamp-5 text-center">{description}</p>
      <a href={readMoreLink} className="text-orange-600">
        Read More &#8594;
      </a>
    </div>
  );
}

export default Landing;
