import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import Image from "next/image";
import Button from "../Button";

const Immergiti = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: t("newReality_Heading"),
      para: t("newReality_para"),
    },
  ];

  return (
    <div className="bg-[#FBFBFD]">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap gap-10 py-10 sm:py-[150px]">
          <div>
            <div className="max-w-[765px]">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-[40px] sm:text-[45px] text-[#333333] font-bold leading-[42px] sm:leading-[65px] pb-4 sm:pb-0">
                      {item.heading}
                    </h2>
                    <p className="text-base text-[#666666] font-medium py-3">
                      {item.para}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <Link href={'/richiesta-preventivo'}>
                <Button
                  text={t("newReality_Btn")}
                  color={"white"}
                  backgroundColor={"#5412BC"}
                  minWidth={undefined}
                />
              </Link>
            </div>
          </div>
          <div className="max-w-[500px] pt-14 mx-auto">
            <Image
              loading="lazy"
              src={"/herolaptop.png"}
              alt={t("alt_img_mobile_remote_interpretation_system")}
              width={1000}
              height={0}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immergiti;
