import { Phone, Mail, MapPin } from "lucide-react";

export const VitalinFooter = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-gold">
              Vitalin Platinum
            </h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Susu kambing premium dengan royal jelly untuk energi dan vitalitas optimal keluarga Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-gold">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Tentang", "Manfaat", "Testimoni"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-background/80 hover:text-gold transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-gold">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-gold" />
                <span className="text-background/80">+62 89513980460</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-gold" />
                <a href="mailto:info@vitalinplatinum.com" className="text-background/80 hover:text-gold transition-colors">
                  info@vitalinplatinum.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold" />
                <span className="text-background/80">Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-gold">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-gold transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-gold transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2025 Vitalin Platinum. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
