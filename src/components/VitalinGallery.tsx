import processFlow from "@/assets/process-flow.jpg";
import benefitJoints from "@/assets/benefit-joints.jpg";
import benefitMental from "@/assets/benefit-mental.jpg";
import benefitSkin from "@/assets/benefit-skin.jpg";
import { Play } from "lucide-react";

export const VitalinGallery = () => {
  const videos = [
    {
      title: "Proses Produksi",
      description: "Lihat proses produksi Vitalin Platinum yang higienis dan berkualitas",
      thumbnail: processFlow
    },
    {
      title: "Testimoni Pelanggan",
      description: "Dengarkan pengalaman nyata dari pelanggan setia kami",
      thumbnail: benefitJoints
    },
    {
      title: "Cara Konsumsi",
      description: "Panduan lengkap cara mengonsumsi Vitalin Platinum yang tepat",
      thumbnail: benefitMental
    }
  ];

  return (
    <section id="galeri" className="py-20 bg-gradient-to-br from-cream to-gold-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Video Eksklusif
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang Vitalin Platinum melalui video informatif kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2 text-foreground">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Product Image */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={benefitSkin} 
              alt="Vitalin Platinum Benefits"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
