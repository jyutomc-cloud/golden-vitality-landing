import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const VitalinTestimonials = () => {
  const testimonials = [
    {
      name: "Rendi Ahmad",
      role: "Pengusaha",
      content: "Sejak minum Vitalin Platinum, badan terasa lebih bugar dan tidak mudah lelah. Sangat membantu untuk menjalani aktivitas bisnis yang padat setiap hari.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rendi"
    },
    {
      name: "Clara Indah",
      role: "Ibu Rumah Tangga",
      content: "Anak saya jadi jarang sakit setelah rutin minum Vitalin Platinum. Rasanya enak dan anak-anak suka. Recommended banget untuk keluarga!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Clara"
    },
    {
      name: "Reza Orchid",
      role: "Mahasiswa",
      content: "Sebagai pelajar, Vitalin Platinum membantu saya tetap fokus saat belajar dan tidak mudah mengantuk. Cocok untuk yang butuh konsentrasi tinggi.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza"
    }
  ];

  return (
    <section id="testimoni" className="py-20 bg-gradient-to-br from-gold-light to-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Testimoni Pelanggan
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengarkan pengalaman nyata dari pelanggan yang telah merasakan manfaat Vitalin Platinum
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-gold/20 hover:border-gold/40 bg-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full bg-gold-light"
                />
                <div>
                  <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
