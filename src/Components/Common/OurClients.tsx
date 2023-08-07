import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";

const OurClients = () => {
  
  const { t } = useTranslation();

  const data = [
    {
      img: "/generali_logo.png",
    },
    {
      img: "/Terrazza-Martini-Milano.png",
    },
    {
      img: "/Armani_Hotel_Milano.png",
    },

    {
      img: "/Logo_Banca_dItalia.png",
    },
    {
      img: "/logo-gog.png",
    },
    {
      img: "/Mercedes-Benz.png",
    },
    {
      img: "/R-1.png",
    },
    {
      img: "/logo-alfasigma.png",
    },
    {
      img: "/stc_logo.png",
    },
    {
      img: "/politecnico-di-torino-logo.png",
    },
    {
      img: "/Honda_Logo.png",
    },
    {
      img: "/toyota-log.png",
    },
  ];

  return (
    <div className="container">
      <div className="pt-10 pb-10 ">
        <h2 className="text-[35px] sm:text-[45px] text-[#333333]  font-bold text-center pb-8">
          {t("ourCustomer")}
        </h2>

        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {data.map((item, index) => {
            return (
              <div
                className={`flex justify-center items-center px-10 py-1 border-r border-b brand_logo`}
                key={index}
              >
                <Image
                  loading="lazy"
                  className="flex justify-center mx-auto pb-1"
                  src={item.img}
                  alt={t("ourCustomerLogo")}
                  width={150}
                  height={150}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
