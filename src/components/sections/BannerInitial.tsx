import bannerLogoDesktop from "@/assets/banner-logo-fuckner-desktop.png";
import bannerLogoMobile from "@/assets/banner-logo-fuckner-mobile.png";
import bannerFormulaDesktop from "@/assets/banner-sem-formula-magica-fuckner-desktop.png";
import bannerFormulaMobile from "@/assets/banner-sem-formula-magica-fuckner-mobile.png";

const BannerInitial = () => {
  return (
    <div className="w-full">
      {/* Logo Section */}
      <div className="w-full">
        <img
          src={bannerLogoDesktop}
          alt="Fuckner - A consultoria em marketing digital e e-commerce que seu negócio precisa"
          className="hidden md:block w-full h-auto"
        />
        <img
          src={bannerLogoMobile}
          alt="Fuckner - A consultoria em marketing digital e e-commerce que seu negócio precisa"
          className="block md:hidden w-full h-auto"
        />
      </div>

      {/* Formula Section */}
      <div className="w-full">
        <img
          src={bannerFormulaDesktop}
          alt="Sem fórmula mágica - Seu projeto precisa de compreensão de mercado, entendimento do comportamento de compra e dados"
          className="hidden md:block w-full h-auto"
        />
        <img
          src={bannerFormulaMobile}
          alt="Sem fórmula mágica - Seu projeto precisa de compreensão de mercado, entendimento do comportamento de compra e dados"
          className="block md:hidden w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BannerInitial;
