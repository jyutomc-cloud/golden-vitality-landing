import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import promo1 from "@/assets/promo-1.jpg";
import promo3 from "@/assets/promo-3.jpg";

export const VitalinHero = () => {
  const whatsappLink = "https://wa.me/6289513980460?text=Halo,%20saya%20mau%20pesan%20Vitalin%20Platinum";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-gold-light to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gold/10 border border-gold/30 rounded-full">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">Terdaftar BPOM & Bersertifikat Halal MUI</span>
            </div>

            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Vitalin Platinum
            </h1>
            
            <p className="font-['Playfair_Display'] text-2xl md:text-3xl mb-4 text-gold-dark font-semibold">
              Susu Kambing Premium dengan Royal Jelly
            </p>

            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Kombinasi sempurna susu kambing asli dan royal jelly premium yang membantu meningkatkan energi, 
              memperkuat daya tahan tubuh, dan menunjang vitalitas optimal untuk seluruh keluarga Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Pesan Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold text-gold-dark hover:bg-gold-light px-8 py-6 text-lg rounded-full"
                onClick={() => document.getElementById('manfaat')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Manfaat
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>100% Susu Kambing Asli</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Royal Jelly Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Nutrisi Lengkap</span>
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={promo1} 
                alt="Vitalin Platinum - Susu Sendi & Tulang"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={promo3} 
                alt="Vitalin Platinum - Best Seller"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gold text-primary-foreground px-6 py-3 rounded-full shadow-lg transform rotate-12 animate-pulse">
              <span className="font-bold text-sm">BEST SELLER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
