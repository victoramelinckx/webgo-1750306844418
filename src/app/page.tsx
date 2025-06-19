
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Transformamos tus ventas con una web rápida y soporte 24/7, para que puedas crecer sin preocupaciones." cta1="Comienza Ahora" />
<How step1Title="Solicita tu web" step1Desc="Completa un formulario fácil y rápido." step2Title="Desarrollo express" step2Desc="Creamos tu sitio en menos de 24 horas." step3Title="Soporte constante" step3Desc="Asistencia 24/7 para tu negocio digital." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Fácilmente" subheadline="WebGo crea y gestiona tu web para aumentar tus ventas online sin complicaciones" beneficiotitulo1="Gestión Completa" beneficio1="Nos ocupamos de todo por ti" beneficiotitulo2="Ventas Aumentadas" beneficio2="Transforma recomendaciones en ventas online" />
<Services heading="Impulsa Tu Negocio al Mundo Digital" description="WebGo crea tu tienda online en 24 horas y gestiona tus ventas sin esfuerzo." services={[{"name":"Creación Rápida","icon":"rocket","description":"Lanzamiento en menos de 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Atrae más clientes orgánicos."},{"name":"Soporte 24/7","icon":"support","description":"Asistencia continua para tu web."},{"name":"Gestión de Contenidos","icon":"edit","description":"Actualización fácil de tu catálogo."},{"name":"Integración de Pagos","icon":"credit-card","description":"Cobros seguros y sin complicaciones."},{"name":"Análisis de Ventas","icon":"chart-bar","description":"Conoce y mejora tus resultados."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales impresionantes y efectivas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo te ayuda a crear una presencia online sólida con un sitio web profesional que atrae clientes nuevos. Nos encargamos de todo, para que tú te enfoques en lo que mejor haces: tu negocio."},{"pregunta":"¿Es complicado gestionar un sitio web con WebGo si no tengo experiencia?","respuesta":"No te preocupes, en WebGo hacemos todo el trabajo duro. Diseñamos, mantenemos y optimizamos tu sitio web para que tú no tengas que preocuparte por nada técnico."},{"pregunta":"¿Cuánto cuesta el servicio de digitalización de ventas con WebGo?","respuesta":"El precio de nuestro servicio comienza en 123a. Ofrecemos soluciones asequibles para cada tipo de negocio, asegurando que obtengas un gran retorno de inversión."},{"pregunta":"¿Cómo puedo generar ventas online si nunca lo he hecho antes?","respuesta":"WebGo no solo crea tu sitio web, también te ayuda a implementarlo con estrategias que convierten visitas en ventas. Tu éxito online es nuestra prioridad."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, tendrás un sitio web optimizado para atraer más clientes. Ahorrarás tiempo y esfuerzo, y podrás ver cómo tu negocio crece en el mundo digital sin complicaciones."}]} />
<BookAppointment 
                      heading="Digitaliza Tus Ventas en Santiago" 
                      description="Transforma tus recomendaciones en ventas online con WebGo. Deja que nosotros gestionemos tu sitio web y atrae más clientes hoy mismo."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
