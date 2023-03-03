import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <main>
        <div className="mt-40 mx-5 md:w-5/12 md:mx-auto">
          {/* header section */}
          <div className=" h-20 bg-yellow-400  centered">
            <p className="text-4xl capitalize font-bold">
              Undergraduate application
            </p>
          </div>

          {/* accordion title section */}
          <div
            className=" h-20 bg-white border-yellow-400 border-2 flex justify-between items-center px-5"
            onClick={toggleAccordion}
          >
            <div>
              <p className="text-3xl font-semibold ">Application Deadline</p>
            </div>
            <div className="text-2xl text-yellow-500">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </div>
          </div>

          {/* accordion content section */}
          <div>
            {isOpen && (
              <div className="border-2 border-yellow-400 border-t-0">
                <p className="px-3 py-3">
                  Completed applications for the fall semester (late August
                  through December) must be received by June 1; completed
                  applications for the spring semester (January through May)
                  must be received by November 1. Begin the process early and
                  beware of all steps that must be taken in order to gain
                  acceptance.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
