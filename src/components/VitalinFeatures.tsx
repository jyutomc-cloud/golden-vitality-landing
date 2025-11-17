import { Milk, Crown, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const VitalinFeatures = () => {
  const features = [
    {
      icon: Milk,
      title: "Susu Kambing Asli",
      description: "100% susu kambing murni dari peternakan terpilih dengan proses higienis dan berkualitas tinggi"
    },
    {
      icon: Crown,
      title: "Royal Jelly Premium",
      description: "Mengandung royal jelly berkualitas premium yang kaya akan nutrisi untuk kesehatan optimal"
    },
    {
      icon: Heart,
      title: "Nutrisi Lengkap",
      description: "Kombinasi sempurna nutrisi yang mendukung energi, daya tahan tubuh, dan vitalitas keluarga"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Kenapa Memilih Vitalin Platinum?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 border-gold/20 hover:border-gold/40 bg-card"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gold/10 rounded-full">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
