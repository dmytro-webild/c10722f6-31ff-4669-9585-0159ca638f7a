import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Streetwear Auténtico"
      title="Ropa urbana nacida de la superación"
      description="Diseños que cuentan historias de resiliencia y poder. Cada prenda es un recordatorio de que tu lucha es tu fuerza."
      primaryButton={{
        text: "Ver Colección",
        href: "#products",
      }}
      secondaryButton={{
        text: "Nuestra Historia",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G2CxsdCRR7J9evZvOP56uaOGb1/uploaded-1783699287745-wzvkf17h.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hipster-model-with-long-hair_158595-2378.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Filosofía"
      title="Identidad y Resiliencia en Cada Hilo"
      description="AriasCreative no es solo ropa; es un manifiesto de fuerza. Creamos prendas para quienes no se rinden, para quienes convierten el dolor en arte y la superación en su estilo diario. Nuestras modelos visten la actitud que nos define."
      imageSrc="http://img.b2bpic.net/free-photo/view-new-york-city-rain_23-2151278860.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="Drops Limitados"
      title="Piezas Exclusivas"
      description="Explora nuestra selección cuidadosamente diseñada con calidad premium."
      items={[
        {
          title: "Camiseta Limitada I",
          description: "Resiliencia hecha algodón.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/t-shirt-poster_1284-49478.jpg",
        },
        {
          title: "Sudaderas Poder",
          description: "Diseñadas para durar.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/person-using-eco-transport-new-york_23-2149219983.jpg",
        },
        {
          title: "Edición Especial",
          description: "Diseño exclusivo Arias.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/pink-hair-girl-avantgarde-style-wearing-sunglasses_114579-17766.jpg",
        },
        {
          title: "Streetwear Pro",
          description: "Ajuste perfecto urbano.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-outdoors_23-2150204423.jpg",
        },
        {
          title: "Polo Resiliencia",
          description: "La elegancia del guerrero.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/spring-wardrobe-switch-high-angle_23-2150264184.jpg",
        },
        {
          title: "Chaqueta Técnica",
          description: "Defensa urbana diaria.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-hipster-stylish-female-with-round-sunglasses-posing-street_181624-54031.jpg",
        },
        {
          title: "Accesorio Clave",
          description: "Complementa tu estilo.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-wearing-trucker-hat_23-2149432328.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesComparison
      tag="Calidad Real"
      title="Por qué elegir AriasCreative"
      description="Nos diferenciamos del drop-shipping genérico mediante estándares éticos y diseño real."
      negativeItems={[
        "Diseños genéricos sin alma",
        "Tiempos de espera inciertos",
        "Falta de transparencia",
      ]}
      positiveItems={[
        "Diseños urbanos originales",
        "Producción ética y local",
        "Calidad premium garantizada",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Impacto"
      title="Nuestra Huella"
      description="Datos que avalan nuestra dedicación y crecimiento."
      metrics={[
        {
          value: "100%",
          title: "Diseño Original",
          features: [
            "Hecho con propósito",
            "Estilo urbano",
          ],
        },
        {
          value: "24h",
          title: "Respuesta al Cliente",
          features: [
            "Apoyo constante",
            "Resolución rápida",
          ],
        },
        {
          value: "1000+",
          title: "Guerreros Arias",
          features: [
            "Comunidad real",
            "Identidad compartida",
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Comunidad"
      title="Voces de la Tribu"
      description="Lo que dicen quienes visten nuestra resiliencia."
      testimonials={[
        {
          name: "Carlos M.",
          role: "Cliente Real",
          quote: "La calidad es otro nivel, se siente la historia en la tela.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/view-young-man-smiling-camera_197531-33438.jpg",
        },
        {
          name: "Ana R.",
          role: "Entusiasta",
          quote: "Finalmente una marca que entiende el street style real.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-wonam-sits-summer-outdoor-cafe_1153-5298.jpg",
        },
        {
          name: "Luis F.",
          role: "Guerrero Arias",
          quote: "Más que ropa, es una motivación para mi día.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-talking-video-call_23-2150812787.jpg",
        },
        {
          name: "Sofía G.",
          role: "Compradora",
          quote: "Excelente atención y el diseño es simplemente brutal.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-penny-board_23-2148950658.jpg",
        },
        {
          name: "Javier L.",
          role: "Fan",
          quote: "Auténtico y con propósito. Súper recomendado.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-with-pink-hairs-going-from-shopping_114579-19327.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Alianzas"
      title="Nuestra Red"
      names={[
        "Calidad",
        "Resiliencia",
        "Estilo",
        "Urban",
        "Ética",
        "Poder",
        "Identidad",
      ]}
      textAnimation="fade"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Preguntas"
      title="Dudas sobre la marca"
      categories={[
        {
          name: "Envíos",
          items: [
            {
              question: "¿Cuándo llega mi ropa?",
              answer: "Procesamos tu pedido en 24-48 horas.",
            },
          ],
        },
        {
          name: "Cambios",
          items: [
            {
              question: "¿Puedo cambiar mi talla?",
              answer: "Sí, tienes 15 días tras recibir el pedido.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contáctanos"
      text="¿Listo para unirte a la tribu de la superación?"
      primaryButton={{
        text: "Hablar con Nosotros",
        href: "mailto:contacto@ariascreative.com",
      }}
      secondaryButton={{
        text: "Explorar FAQ",
        href: "#faq",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
