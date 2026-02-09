import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    category: "FISCAL",
    title: "Análisis de Reforma Fiscal 2024",
    excerpt: "Evaluación técnica de las modificaciones estructurales en la recaudación y sus efectos en el sector privado.",
    date: "12 Feb 2024",
  },
  {
    category: "ECONOMÍA",
    title: "Perspectivas Económicas - Rodrigo Pacheco",
    excerpt: "Análisis editorial sobre la volatilidad de los mercados y las proyecciones de crecimiento para el segundo trimestre.",
    date: "08 Feb 2024",
  },
  {
    category: "LEGAL",
    title: "Nueva Normativa de Teletrabajo",
    excerpt: "Guía esencial para el cumplimiento de las nuevas obligaciones patronales bajo el marco legal vigente.",
    date: "05 Feb 2024",
  },
  {
    category: "COMERCIO",
    title: "Tratados Internacionales y Logística",
    excerpt: "Optimización de la cadena de suministro ante los nuevos acuerdos comerciales en la región norte.",
    date: "01 Feb 2024",
  },
  {
    category: "FINANZAS",
    title: "Gestión de Riesgos Corporativos",
    excerpt: "Estrategias de blindaje financiero para proteger el capital ante la incertidumbre económica global.",
    date: "25 Ene 2024",
  },
];

const infinitePosts = [...posts, ...posts];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Análisis Editorial</h2>
        <h3 className="text-4xl font-serif font-bold text-white mb-4">Actualidad y Perspectivas</h3>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {infinitePosts.map((post, idx) => (
            <div key={idx} className="w-[350px] md:w-[400px] flex-shrink-0">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.1)"
                }}
                className="h-full"
              >
                <Card className="bg-card border-primary/20 h-full flex flex-col transition-colors hover:border-primary/40">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary text-[10px] font-bold tracking-widest uppercase rounded-none px-3">
                        {post.category}
                      </Badge>
                      <span className="text-gray-500 text-[10px] font-medium tracking-wider">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-serif text-white leading-snug">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-8">
                    <button className="text-primary text-xs font-bold uppercase tracking-[0.2em] border-b border-primary/20 pb-1 hover:border-primary transition-all">
                      Leer Artículo
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
