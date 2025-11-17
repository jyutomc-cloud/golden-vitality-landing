import { Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const VitalinCertification = () => {
  const certifications = [
    {
      icon: Shield,
      title: "BPOM RI",
      number: "MD 071211001300105",
      description: "Terdaftar di BPOM RI"
    },
    {
      icon: Award,
      title: "Halal MUI",
      number: "ID 34110000753490522",
      description: "Bersertifikat Halal MUI"
    }
  ];

  return (
    <section id="sertifikasi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sertifikasi Resmi
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produk terpercaya dengan sertifikasi resmi untuk keamanan dan kualitas terjamin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-gold/30 hover:border-gold bg-card"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gold/10 rounded-full">
                <cert.icon className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2 text-foreground">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {cert.description}
              </p>
              <div className="inline-block px-4 py-2 bg-gold-light border border-gold/30 rounded-lg">
                <code className="text-sm font-mono text-gold-dark font-semibold">
                  {cert.number}
                </code>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
