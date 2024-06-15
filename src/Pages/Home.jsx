import React, { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import Chart from "react-google-charts";

const Home = () => {
  const [categorySummary, setCategorySummary] = useState([]);

  useEffect(() => {
    // Calculate number of subcategories for each category
    const summaryData = categoriesDoctor.map(category => ({
      category: category.name,
      count: category.subcategories.length
    }));
    setCategorySummary(summaryData);
  }, []);

  const healthData = [
    ['Month', 'Temperature', 'Blood Pressure', 'Cholesterol Levels'],
    ['January', 98.5, 120, 180],
    ['February', 99.1, 118, 175],
    ['March', 97.8, 122, 185]
  ];

  const categoriesDoctor = [
    {
      name: 'General Checkup',
      subcategories: [
        { title: 'Temperature', description: 'Measurement of body temperature.', report: 'Normal: 98.6°F' },
        { title: 'Blood Pressure', description: 'Measurement of blood pressure.', report: '120/80 mmHg' },
        { title: 'Cholesterol Levels', description: 'Evaluates different types of cholesterol in the blood.', report: 'Total Cholesterol: 180 mg/dL' },
        { title: 'SpO2', description: 'Measurement of blood oxygen saturation levels.', report: '98%' },
        { title: 'Respiration per Minute', description: 'Measurement of the number of breaths per minute.', report: '16 breaths/min' },
        { title: 'Pulse', description: 'Measurement of heart rate.', report: '72 bpm' }
      ]
    },
    {
      name: 'Eye Checkup',
      subcategories: [
        { title: 'Visual Acuity Test', description: 'Measurement of how well you can see at various distances.', report: '20/20 vision' },
        { title: 'Refractor Assessment', description: 'Evaluation of the need for corrective lenses.', report: 'Needs corrective lenses' },
        { title: 'Color Vision Test', description: 'Assessment of your ability to distinguish between different colors.', report: 'Normal color vision' },
        { title: 'Eye Muscle Function Test', description: 'Examination of the muscles that control eye movement.', report: 'Normal muscle function' }
      ]
    },
    {
      name: 'Kidney Function Checkup',
      subcategories: [
        { title: 'Serum Creatinine Test', description: 'Measurement of creatinine levels in the blood to assess kidney function.', report: '1.0 mg/dL' },
        { title: 'BUN Test', description: 'Blood urea nitrogen test to evaluate kidney health.', report: '14 mg/dL' },
        { title: 'Urine Creatinine Test', description: 'Measurement of creatinine levels in urine to assess kidney function.', report: '120 mg/dL' },
        { title: 'Kidney Imaging', description: 'Imaging tests like ultrasound or CT scan to visualize the kidneys.', report: 'No abnormalities detected' }
      ]
    },
    {
      name: 'Lung Function Test',
      subcategories: [
        { title: 'Pulmonary Function Tests', description: 'A series of tests to measure how well your lungs work.', report: 'FEV1: 80%' },
        { title: 'Arterial Blood Gas Test', description: 'Measurement of oxygen and carbon dioxide levels in the blood.', report: 'PaO2: 95 mmHg' },
        { title: 'Bronchoscopy', description: 'A procedure to look inside the lungs\' airways using a bronchoscope.', report: 'No obstructions' },
        { title: 'Ventilation-Perfusion Scan', description: 'A scan to examine airflow (ventilation) and blood flow (perfusion) in the lungs.', report: 'Normal V/Q ratio' }
      ]
    }
  ];

  const pieChartData = [
    ['Category', 'Number of Tests'], 
    ...categorySummary.map(item => [item.category, item.count])
  ];

  return (

<div className='flex flex-col items-center justify-center'>
<div className='w-10/12 '>

<div className=" px-4 bg-gray-100 min-h-screen">
<div className='flex w-full items-center  ' id='LogoPage'>
          <FaHome className='text-4xl mr-2 my-4 ' />
          <h1 className='text-2xl font-bold'>Home</h1>
        </div>

      <div className="flex space-x-6 mb-6 justify-between">
      
        <div style={{ width: '600px', height: '400px' }}>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="LineChart"
            loader={<div>Loading Line Chart</div>}
            data={healthData}
            options={{
              title: 'Health Metrics Progress Over Months',
              curveType: 'function',
              legend: { position: 'bottom' }
            }}
          />
        </div>

        {/* Pie Chart */}
        <div style={{ width: '600px', height: '400px' }}>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Pie Chart</div>}
            data={pieChartData}
            options={{
              title: 'Health Category Distribution',
              legend: { position: 'right' }
            }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {categoriesDoctor.map((category, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {category.subcategories.map((sub, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sub.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.report}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan="2" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Tests</td>
                  <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{category.subcategories.length}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ))}
      </div>
    </div>
</div>
</div>
  );
};

export default Home;
