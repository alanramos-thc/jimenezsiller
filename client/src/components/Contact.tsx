import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  company: z.string().optional(),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(10, "Número de teléfono inválido"),
  subject: z.string().min(5, "El asunto es requerido"),
  message: z.string().min(10, "El mensaje debe ser más largo"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto con usted a la brevedad.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Contacto</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-8">Hablemos de su Futuro</h3>
            <p className="text-gray-400 mb-12 text-lg">
              Estamos listos para brindarle la asesoría estratégica que necesita. Contáctenos hoy mismo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-card border border-white/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Ubicación</h4>
                  <p className="text-gray-400">Centeno No. 1172 A, Praderas Ote,<br />Saltillo, Coah. CP 25295</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-card border border-white/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Teléfono</h4>
                  <p className="text-gray-400">(844) 662 03 39</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-card border border-white/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Correo Electrónico</h4>
                  <p className="text-gray-400">direccion@jimenezsiller.com.mx</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-sm">Síguenos</h4>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 md:p-10 rounded-xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-serif text-white mb-6">Envíenos un Mensaje</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Nombre Completo</FormLabel>
                        <FormControl>
                          <Input className="bg-background border-white/10 text-white focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Empresa (Opcional)</FormLabel>
                        <FormControl>
                          <Input className="bg-background border-white/10 text-white focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input className="bg-background border-white/10 text-white focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Teléfono</FormLabel>
                        <FormControl>
                          <Input className="bg-background border-white/10 text-white focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Consulta Fiscal..." className="bg-background border-white/10 text-white focus:border-primary/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿En qué podemos ayudarle?" className="bg-background border-white/10 text-white focus:border-primary/50 min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-bold py-6 text-lg">
                  Enviar Mensaje
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
