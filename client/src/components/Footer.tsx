import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <img 
            src={logo}
            alt="J.S. Servicios Logo" 
            className="h-25 w-auto object-contain mx-auto md:mx-0" 
          />
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}
