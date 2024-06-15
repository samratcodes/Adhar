import React from 'react';

const Card = ({ title, price, description, features, buttonText }) => {
  return (
    <div className="ml-[1rem] mr-[1rem] mt-8 w-80 flex flex-col rounded-md bg-white pt-6 p-10">
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-green-600">{title}</span>
        <span className="text-[3.75rem] leading-none font-bold  text-green-600">{price}</span>
      </div>
      <p className="mt-3 mb-3 leading-[1.625] text-gray-800">
        {description}
      </p>
      <ul className="mb-6 flex-1 text-gray-800">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 flex ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 flex-shrink-0 mr-2 text-black"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="border-none outline-none inline-block rounded-md bg-green-600 px-5 py-3 text-center font-semibold tracking-wide text-white"
      >
        {buttonText}
      </button>
    </div>
  );
};

const Premium = () => {
  const cards = [
    {
      title: 'Basic',
      price: 'Rs.1999',
      description: 'Stay on top of your health with our monthly checkups and personalized diet plans.',
      features: ['Monthly Checkup', 'Diet Planning'],
      buttonText: 'Book Now'
    },
    {
      title: 'Standard',
      price: 'Rs.3499',
      description: 'Enhance your wellness journey with personalized care and collaborative health management.',
      features: ['Basic Plan +', 'Monthly nurse visit for medication and counseling', 'Multiple users can access and manage the dashboard'],
      buttonText: 'Book Now'
    },
    {
      title: 'Advanced',
      price: 'Rs.4999',
      description: 'Experience comprehensive care and innovative wellness solutions with our advanced plan.',
      features: ['Standard  Plan  +',' Recreational activity once a monthMorbi semper', 'transportation  service twice a  month','AI Integration for workout and yoga.'],
      buttonText: 'Go Advanced'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          description={card.description}
          features={card.features}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default Premium;
