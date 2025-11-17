import benefitEnergy from "@/assets/benefit-energy.jpg";
import benefitBones from "@/assets/benefit-bones.jpg";
import benefitBrain from "@/assets/benefit-brain.jpg";
import benefitDigestion from "@/assets/benefit-digestion.jpg";

export const VitalinBenefits = () => {
  const benefits = [
    {
      number: "01",
      title: "Energi Optimal",
      description: "Membantu meningkatkan stamina dan energi untuk aktivitas harian yang lebih produktif",
      image: benefitEnergy
    },
    {
      number: "02",
      title: "Daya Tahan Prima",
      description: "Mendukung sistem imun tubuh agar tetap kuat dan tidak mudah sakit",
      image: benefitBones
    },
    {
      number: "03",
      title: "Fokus Maksimal",
      description: "Menunjang konsentrasi dan fungsi kognitif untuk performa mental yang lebih baik",
      image: benefitBrain
    },
    {
      number: "04",
      title: "Pencernaan Sehat",
      description: "Mendukung kesehatan sistem pencernaan dengan kandungan probiotik alami",
      image: benefitDigestion
    }
  ];

  return (
    <section id="manfaat" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Manfaat Eksklusif
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rasakan manfaat luar biasa dari kombinasi susu kambing dan royal jelly untuk kesehatan optimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.number}
              className="group relative overflow-hidden rounded-2xl bg-card border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="font-['Playfair_Display'] text-6xl font-bold text-gold/20 mb-4">
                  {benefit.number}
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
