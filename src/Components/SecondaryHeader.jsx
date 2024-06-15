/* eslint-disable react/prop-types */
export default function SecondaryHeader({ header, className }) {
  return (
    <h2
      className={`text-2xl font-bold text-left my-6 text-blue-800 ${
        className && className
      }`}
    >
      {header}
    </h2>
  );
}
