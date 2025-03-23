import {  useState } from "react";
import { steps } from "./data";
import Step1 from "./sections/Step1";
import Step2 from "./sections/Step2";
import Step3 from "./sections/Step3";
import Step4 from "./sections/Step4";
import ThankYou from "./sections/ThankYou";
import { StepsData, Step1Schema, FormErrors } from "./types";
import { z } from "zod";

const App = () => {
  const [formStep, setFormStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<StepsData>(() => ({
    name: "",
    email: "",
    phoneNumber: "",
    planType: "arcade",
    billing: "monthly",
    addonTypes: [],
  }));
  const [errors, setErrors] = useState<FormErrors>({});

  const updateData = (inputs: Partial<StepsData>) => {
    setFormData((prev) => ({
      ...prev,
      ...inputs,
    }));
  };

  const handleSubmit = () => {
    if (formStep === 0) {
      try {
        const validatedData = Step1Schema.parse(formData);
        setFormStep((prev) => prev + 1);
        setErrors({});
      } catch (error) {
        if (error instanceof z.ZodError) {
          const formattedErrors: Record<string, string> = {};
          error.errors.forEach((err) => {
            formattedErrors[err.path[0]] = err.message;
          });
          setErrors(formattedErrors);
        }
      }
    } else if (formStep === 3) {
      setIsSubmitted(true);
    } else {
      setFormStep((prev) => prev + 1);
    }
  };

  const stepsIndex = [
    <Step1 {...formData} updateData={updateData} errors={errors} />,
    <Step2 {...formData} updateData={updateData} />,
    <Step3 {...formData} updateData={updateData} />,
    <Step4 {...formData} />,
  ];

  return (
    <div className="bg-lightgray flex flex-col md:justify-center md:items-center min-h-screen font-display md:px-4">
      <div className="md:bg-alabaster md:p-3 rounded-lg md:max-w-4xl w-full md:flex justify-between gap-12">
        <section
          className="max-md:bg-[url(./assets/images/bg-sidebar-mobile.svg)] 
          bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover relative md:rounded-lg
        w-full max-md:h-64 md:w-64 flex md:flex-col justify-center md:justify-start md:px-6 pt-12 gap-6 text-lightblue"
        >
          {steps.map((step) => (
            <div key={step.id} className="flex md:items-center gap-4">
              <div
                className={`border-2 w-12 h-12 md:w-10 md:h-10 rounded-full font-medium flex items-center justify-center
                ${
                  formStep == step.id - 1
                    ? "bg-lightblue text-marineblue border-lightblue"
                    : null
                }`}
                role="presentation"
              >
                {step.id}
              </div>

              <div className="max-md:hidden">
                <p className="text-xs text-coolgray font-medium">
                  STEP {step.id}
                </p>
                <p className="uppercase font-bold text-sm text-white">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </section>

        <div
          className="bg-alabaster max-md:absolute w-[90%] md:w-full max-w-md mx-auto top-32 
        max-md:-translate-x-1/2 left-1/2 max-md:p-6 rounded-lg py-10 md:min-h-[600px] z-10 max-md:shadow-xl"
        >
          <form className="md:h-full md:flex md:flex-col md:justify-between">
            {isSubmitted ? (
              <ThankYou />
            ) : (
              <>
                {stepsIndex[formStep]}
                <div className="hidden md:flex justify-end items-center bg-alabaster">
                  {formStep != 0 && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setFormStep((prev) => prev - 1);
                      }}
                      className="text-coolgray cursor-pointer mr-auto"
                    >
                      Go Back
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="bg-marineblue text-white px-4 py-2 rounded cursor-pointer"
                  >
                    Next Step
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="md:hidden flex justify-end items-center p-4 mt-auto bg-alabaster">
        {formStep != 0 && (
          <button
            onClick={() => setFormStep((prev) => prev - 1)}
            className="text-coolgray mr-auto cursor-pointer"
          >
            Go Back
          </button>
        )}
        <button
          onClick={handleSubmit}
          className="bg-marineblue text-white px-4 py-2 rounded cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default App;
