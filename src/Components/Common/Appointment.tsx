import { useEffect } from "react";

const Appointment = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h2 className="text-center bg-[#8C59F9] pt-20 pb-5 text-[#ffffff] text-4xl font-semibold">
        Talk to sales
      </h2>
      <div className="flex justify-center bg-[#8C59F9] pb-5">
        <p className="text-xl text-center text-[#ffffff] max-w-3xl">
          Every event is unique. Schedule a 15-min call with us to discuss your
          upcoming event and how we can tailor a solution and quote that matches
          your needs.
        </p>
      </div>
      <div
        className="meetings-iframe-container bg-[#8C59F9]"
        data-src="https://meetings-eu1.hubspot.com/chiara-moschitta?embed=true"
      ></div>
    </>
  );
};

export default Appointment;
