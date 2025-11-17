import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock } from "lucide-react";
import bankEkspedisi from "@/assets/bank-ekspedisi.jpg";

export const VitalinOrder = () => {
  const whatsappLink = "https://wa.me/6289513980460?text=Halo,%20saya%20mau%20pesan%20Vitalin%20Platinum";
  const emailLink = "mailto:info@vitalinplatinum.com?subject=Pemesanan%20Vitalin%20Platinum";

  const steps = [
    {
      number: "1",
      title: "Pilih Produk",
      description: "Tentukan varian Vitalin Platinum yang Anda inginkan"
    },
    {
      number: "2",
      title: "Hubungi Kami",
      description: "Konfirmasi pesanan via WhatsApp atau email"
    },
    {
      number: "3",
      title: "Terima Pesanan",
      description: "Produk dikirim langsung ke alamat Anda"
    }
  ];

  return (
    <section id="pemesanan" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Cara Pemesanan
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mudah dan cepat, pesan Vitalin Platinum dalam 3 langkah sederhana
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gold text-primary-foreground rounded-full font-['Playfair_Display'] text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-gold/10 to-accent/10 rounded-2xl p-8 border border-gold/30">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-6 text-center text-foreground">
              Pesan Sekarang
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg" 
                className="flex-1 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold rounded-full"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="mr-2" />
                Pesan via WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="flex-1 border-gold text-gold-dark hover:bg-gold-light rounded-full"
                onClick={() => window.location.href = emailLink}
              >
                <Mail className="mr-2" />
                Email Kami
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Senin – Minggu: 8AM – 8PM</span>
            </div>
          </div>
        </div>

        {/* Bank & Expedisi */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2 text-foreground">
              Metode Pembayaran & Pengiriman
            </h3>
            <p className="text-muted-foreground">
              Kami bekerja sama dengan bank dan jasa ekspedisi terpercaya
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={bankEkspedisi} 
              alt="Bank dan Jasa Ekspedisi"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
