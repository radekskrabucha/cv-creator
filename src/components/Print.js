import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import DisplayCVClass from './DisplayCV';
function capitalize(string) {
   const lowerCase = string.toLowerCase();
   return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}

const Print = ({person}) => {
   const componentRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: `${capitalize(person.firstName)}${capitalize(person.lastName)}CV`
   });

   return (
      <div>
         <div className="cv-container">
            <DisplayCVClass person={person} ref={componentRef}/>
            <button className='print-btn' onClick={handlePrint}>Save to PDF</button>
         </div>
      </div>
   );
};

export default Print