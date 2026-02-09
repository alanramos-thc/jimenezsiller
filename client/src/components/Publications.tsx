import { Newspaper, BookOpen, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Publications() {
  const articles = [
    {
      author: "Rodrigo Pacheco",
      title: "Impacto del Mercado Global en la Economía Local",
      excerpt: "Un análisis profundo sobre las tendencias de comercio exterior y la resiliencia financiera en México.",
      date: "Feb 2024"
    },
    {
      author: "David Páramo",
      title: "Análisis Crítico de la Reforma Fiscal",
      excerpt: "Explorando las implicaciones para las personas físicas y morales en el nuevo ejercicio fiscal.",
      date: "Ene 2024"
    }
  ];

  const resources = [
    { name: "Ley del Impuesto sobre la Renta (LISR)", type: "PDF" },
    { name: "Código Fiscal de la Federación", type: "PDF" },
    { name: "Ley del Impuesto al Valor Agregado", type: "PDF" },
    { name: "Miscelánea Fiscal 2024", type: "PDF" }
  ];

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Articles Section */}
          <div>
            <h2 className="text-primary uppercase tracking-widest text-sm font-semibold mb-3 flex items-center gap-2">
              <Newspaper className="w-4 h-4" /> Opinión y Análisis
            </h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-8">Informes Editoriales</h3>
            
            <div className="space-y-6">
              {articles.map((art, i) => (
                <Card key={i} className="bg-card border-white/5 hover:border-primary/20 transition-all group">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">Colaboración Especial</span>
                      <span className="text-gray-500 text-xs">{art.date}</span>
                    </div>
                    <CardTitle className="text-2xl font-serif text-white group-hover:text-primary transition-colors leading-snug">
                      "{art.title}"
                    </CardTitle>
                    <p className="text-sm text-gray-500 italic mt-1">Por {art.author}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {art.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 text-white group-hover:text-primary">Continuar leyendo</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Legal Resources Section */}
          <div>
            <h2 className="text-primary uppercase tracking-widest text-sm font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Recursos Legales
            </h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-8">Códigos y Leyes</h3>
            
            <div className="bg-card/50 rounded-xl border border-white/5 p-8">
              <ul className="space-y-4">
                {resources.map((res, i) => (
                  <li key={i} className="flex items-center justify-between p-4 rounded-lg bg-background border border-white/5 hover:border-primary/30 transition-all group">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{res.name}</span>
                    <Button size="sm" variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-black">
                      <Download className="w-4 h-4 mr-2" /> {res.type}
                    </Button>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-8 italic text-center">
                * Material de consulta pública actualizado al marco legal vigente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
