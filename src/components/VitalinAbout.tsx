export const VitalinAbout = () => {
  return (
    <section id="tentang" className="py-20 bg-gradient-to-br from-gold-light to-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Tentang Vitalin Platinum
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              <strong>Vitalin Platinum</strong> hadir dengan komitmen memberikan produk susu kambing premium berkualitas tinggi 
              yang diperkaya dengan royal jelly untuk mendukung kesehatan dan vitalitas keluarga Indonesia.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Melalui proses produksi yang higienis dan pemilihan bahan baku terbaik, kami menghadirkan produk yang 
              tidak hanya membantu meningkatkan energi dan daya tahan tubuh, tetapi juga mendukung kesehatan pencernaan 
              dan fokus mental.
            </p>

            <p className="text-lg text-foreground leading-relaxed italic">
              "Karena sehatnya berasa, senyumnya juga terpoles emas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
