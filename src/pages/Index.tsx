import { VitalinNavbar } from "@/components/VitalinNavbar";
import { VitalinHero } from "@/components/VitalinHero";
import { VitalinFeatures } from "@/components/VitalinFeatures";
import { VitalinAbout } from "@/components/VitalinAbout";
import { VitalinBenefits } from "@/components/VitalinBenefits";
import { VitalinGallery } from "@/components/VitalinGallery";
import { VitalinCertification } from "@/components/VitalinCertification";
import { VitalinTestimonials } from "@/components/VitalinTestimonials";
import { VitalinOrder } from "@/components/VitalinOrder";
import { VitalinFooter } from "@/components/VitalinFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VitalinNavbar />
      <VitalinHero />
      <VitalinFeatures />
      <VitalinAbout />
      <VitalinBenefits />
      <VitalinGallery />
      <VitalinCertification />
      <VitalinTestimonials />
      <VitalinOrder />
      <VitalinFooter />
    </div>
  );
};

export default Index;
