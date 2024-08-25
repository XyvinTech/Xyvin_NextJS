"use client"

export default function Three() {
    return (
      <div className="p-8 bg-light-violet mt-2 rounded-xl border bg-purple-200">
    
        <div className="flex flex-col md:flex-row items-center mb-8">
    
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">Leverage Our Custom CRM
            Solutions For Your Company</h1>
          </div>
  
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700">
            Following best industry practices, our CRM software development company helps
            each business solve its unique challenges with a personalized solution.
            </p>
          </div>
        </div>
  
      
        <div className="flex flex-wrap justify-center mb-8">
        
          <div className="flex flex-wrap justify-center mb-4">
            {['Agriculture', 'Construction', 'Education', 'Ecommerce', 'Fintech'].map((text, index) => (
              <button key={index} className="m-2 w-[143.81px] h-[42.19px] rounded-full bg-violet-700 text-white hover:bg-violet-800">
                {text}
              </button>
            ))}
          </div>
  
         
          <div className="flex flex-wrap justify-center">
            {['Healthcare', 'Insurance', 'Retail', 'Logistics', 'Manufacturing'].map((text, index) => (
              <button key={index} className="m-2 w-[143.81px] h-[42.19px] rounded-full bg-violet-700 text-white hover:bg-violet-800">
                {text}
              </button>
            ))}
          </div>
        </div>
  
     
        <div className="text-lg text-gray-700">
          <p>
          Facilitate farm management, automate balance and finance control, and streamline warehouse
accounting. Our company delivers bespoke client platforms for agribusinesses to help you expand
your activities and grow profitability.
          </p>
        </div>
      </div>
    );
  }
  