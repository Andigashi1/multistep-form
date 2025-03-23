import { Step1Data, FormErrors } from "../types";

type userData  = Step1Data & {
  updateData: (data: { name?: string; email?: string; phoneNumber?: string }) => void;
  errors?: FormErrors
}

const Step1 = ({name, email, phoneNumber, updateData, errors}: userData) => {


  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-marineblue text-2xl md:text-3xl font-bold mb-2">
          Personal info
        </h1>
        <p className="text-coolgray max-md:max-w-80">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div>
        <label id="name" className="text-marineblue">
        <div className="flex justify-between">
            <span>Name</span>
            {errors?.name && <span className="text-strawberryred">{errors.name}</span> }
          </div>
          <input
            required
            autoFocus
            type="text"
            value={name}
            onChange={e => updateData({name: e.target.value})}
            placeholder="e.g Stephen King"
            className={`px-4 py-2 font-medium border-2 border-lightgray w-full rounded-md 
          focus:border-marineblue outline-none ${errors?.name && 'border-strawberryred'}`}
          />
        </label>
      </div>
      <div>
        <label id="email" className="text-marineblue">
          <div className="flex justify-between">
            <span>Email Address</span>
            {errors?.email && <span className="text-strawberryred">{errors.email}</span> }
          </div>
          <input
            required
            type="email"
            value={email}
            onChange={e => updateData({email: e.target.value})}
            placeholder="e.g stephenking@lorem.com"
            className={`px-4 py-2 font-medium border-2 border-lightgray w-full 
            rounded-md focus:border-marineblue outline-none ${errors?.email && 'border-strawberryred'}`}
          />
        </label>
      </div>
      <div>
        <label id="number" className="text-marineblue">
          <div className="flex justify-between items-center mb-1">
            <span>Phone number</span>
            {errors?.phoneNumber && <span className="text-strawberryred ml-auto">{errors.phoneNumber}</span> }
          </div>
          <input
            required
            type="text"
            value={phoneNumber}
            onChange={e => updateData({phoneNumber: e.target.value})}
            placeholder="e.g +1 234 567 890"
            className={`px-4 py-2 font-medium border-2 border-lightgray
            w-full rounded-md focus:border-marineblue outline-none ${errors?.phoneNumber && 'border-strawberryred'}`}
          />
        </label>
        
      </div>
    </div>
  );
};

export default Step1;
