import ThankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="text-center my-auto  space-y-2 py-8">
      <img src={ThankYouIcon} className="mx-auto" alt="thank you icon" />
      <h1 className="text-marineblue font-bold text-3xl">Thank You!</h1>
      <p className="text-coolgray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. IF you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
