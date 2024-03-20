'use client';
import React, { useState } from 'react';
import Forms from './viewes/Forms';
import PayForms from './viewes/PayForm';
import CarForms from './viewes/CarForms';
import './viewes/Home.css';
import Loader from './viewes/loader';
import BillForms from './viewes/BillMain';
import ThanksPage from './viewes/thanks';
export default function Home2(props: any) {
  const [loading, setLoading] = useState(true);

  const handleElement = (id: number) => {
    switch (id) {
      case 1:
        setElement(
          <Forms
            handleElement={handleElement}
          />
        );

        break;
      case 2:
        setElement(
          <CarForms handleElement={handleElement}  />
        );

        break;
      case 3:
        setElement(
          <BillForms handleElement={handleElement}  />
        );

        break;
      case 4:
        setElement(
          <PayForms handleElement={handleElement}  />
        );
        break;
      default:
        setElement(
          <ThanksPage
            
          />
        );
        break;
    }
  };

 
  const [element, setElement] = useState(
    <Forms
      handleElement={handleElement}
   
      
    />
  );

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {loading ? <Loader /> : element}
      </div>
      <footer>
        <span className="agreement">
          <a href="#"> جميع الحقوق محفوظة لشركة فايدى للتأمين ©</a>
        </span>
      </footer>
    </div>
  );
}
