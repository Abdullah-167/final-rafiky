import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqTechEquipment = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("FAQAttrezzaturaTecnica_pageTitle")}
        description={t("FAQAttrezzaturaTecnica_pageDesc")}
      />
      <Index id={4} />
    </div>
  );
};

export default FaqTechEquipment;
