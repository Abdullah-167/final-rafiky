import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqApp = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("FAQParticipant_pageTitle")}
        description={t("FAQParticipant_pageDesc")}
      />
      <Index id={3} />
    </div>
  );
};

export default FaqApp;
