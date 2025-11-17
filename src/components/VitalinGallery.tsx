import processFlow from "@/assets/process-flow.jpg";
import benefitJoints from "@/assets/benefit-joints.jpg";
import benefitMental from "@/assets/benefit-mental.jpg";
import benefitSkin from "@/assets/benefit-skin.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo4 from "@/assets/promo-4.jpg";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const VitalinGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "Proses Produksi",
      description: "Lihat proses produksi Vitalin Platinum yang higienis dan berkualitas",
      thumbnail: processFlow,
      videoUrl: "/videos/proses-produksi.mp4"
    },
    {
      title: "Testimoni Pelanggan",
      description: "Dengarkan pengalaman nyata dari pelanggan setia kami",
      thumbnail: benefitJoints,
      videoUrl: "/videos/testimoni-pelanggan.mp4"
    },
    {
      title: "Cara Konsumsi",
      description: "Panduan lengkap cara mengonsumsi Vitalin Platinum yang tepat",
      thumbnail: benefitMental,
      videoUrl: "/videos/cara-konsumsi.mp4"
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
              onClick={() => setSelectedVideo(video.videoUrl)}
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

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-gold">
            <div className="relative aspect-video">
              {selectedVideo && (
                <video 
                  controls 
                  autoPlay
                  className="w-full h-full"
                  src={selectedVideo}
                >
                  Browser Anda tidak mendukung video player.
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Additional Product Images */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-gold/20 transition-shadow">
              <img 
                src={promo2} 
                alt="Vitalin Platinum - Spesial Promo dengan Informasi Nutrisi"
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-gold/20 transition-shadow">
              <img 
                src={promo4} 
                alt="Vitalin Platinum - Premium Quality dengan COD & Gratis Ongkir"
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
