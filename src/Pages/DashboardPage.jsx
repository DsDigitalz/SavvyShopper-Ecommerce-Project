import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader';
import DashboardContent from '../Components/DashboardContent';
// import Loader from '../components/Loader';
// import DashboardContent from '../components/DashboardContent';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is where you would fetch your data, for example from an API
    // Replace this setTimeout with your actual data fetching logic (e.g., axios.get or fetch)
    setTimeout(() => {
      console.log('Data has been loaded!');
      setIsLoading(false); // Once data is fetched, set isLoading to false
    }, 2500);
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <>
      {isLoading ? <Loader /> : <DashboardContent />}
    </>
  );
}