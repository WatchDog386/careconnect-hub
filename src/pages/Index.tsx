import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/public/Navbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { 
  Activity, 
  Calendar, 
  Users, 
  FileText, 
  ShieldCheck, 
  Stethoscope, 
  LayoutDashboard 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                  Streamline Your <span className="text-primary">Medical Practice</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A comprehensive healthcare management system designed for modern hospitals, clinics, and private practitioners.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/login">
                  <Button size="lg" className="h-11 px-8">Get Started</Button>
                </Link>
                <Link to="#features">
                  <Button variant="outline" size="lg" className="h-11 px-8">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-sm font-medium text-muted-foreground">Hospitals</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">10k+</h3>
                <p className="text-sm font-medium text-muted-foreground">Doctors</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">1M+</h3>
                <p className="text-sm font-medium text-muted-foreground">Patients</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">99.9%</h3>
                <p className="text-sm font-medium text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything you need to manage your facility
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  From patient intake to billing, CareConnect handles it all with specific modules for every department.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Patient Management"
                description="Complete patient records, history tracking, and admission management in one secure place."
              />
              <FeatureCard 
                icon={<Calendar className="h-10 w-10 text-primary" />}
                title="Smart Scheduling"
                description="Efficient appointment booking system for doctors, labs, and facility resources."
              />
              <FeatureCard 
                icon={<Stethoscope className="h-10 w-10 text-primary" />}
                title="Doctor Portal"
                description="Dedicated interface for medical professionals to manage specialized tasks and patient notes."
              />
              <FeatureCard 
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="Billing & Invoicing"
                description="Automated billing, insurance processing, and financial reporting for your organization."
              />
              <FeatureCard 
                icon={<LayoutDashboard className="h-10 w-10 text-primary" />}
                title="Visual Dashboard"
                description="Real-time analytics and insights to help you make data-driven decisions."
              />
              <FeatureCard 
                icon={<ShieldCheck className="h-10 w-10 text-primary" />}
                title="Secure & Compliant"
                description="Enterprise-grade security ensuring full HIPAA compliance and data protection."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About CareConnect</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded in 2024, CareConnect is on a mission to simplify healthcare management. We believe that by reducing administrative burden, medical professionals can focus on what really matters: patient care.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our team consists of medical experts and software engineers working together to build the most intuitive and powerful HMS on the market.
                </p>
              </div>
              <div className="flex-1 bg-background p-8 rounded-lg border shadow-sm">
                <blockquote className="space-y-4">
                  <p className="text-xl italic font-medium">
                    "CareConnect has completely transformed how we run our clinic. We spend 50% less time on paperwork and more time with our patients."
                  </p>
                  <footer className="text-sm">
                    <strong>Dr. Sarah Jenkins</strong>
                    <div className="text-muted-foreground">Chief Medical Officer, City Health</div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container max-w-2xl text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
              <p className="text-muted-foreground md:text-lg">
                Have questions? Our team is ready to help you set up the perfect solution for your facility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-6 border rounded-lg bg-background">
                <h3 className="font-semibold mb-2">Sales Inquiries</h3>
                <p className="text-muted-foreground text-sm mb-4">For demos and pricing information.</p>
                <a href="mailto:sales@careconnect.com" className="text-primary hover:underline">sales@careconnect.com</a>
              </div>
              <div className="p-6 border rounded-lg bg-background">
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-muted-foreground text-sm mb-4">For existing customers needing assistance.</p>
                <a href="mailto:support@careconnect.com" className="text-primary hover:underline">support@careconnect.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to transform your healthcare facility?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join thousands of healthcare providers who trust CareConnect.
              </p>
              <div className="pt-4">
                <Link to="/login">
                  <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold">
                    Start Your Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="group relative overflow-hidden rounded-lg border bg-background p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className="flex flex-col space-y-4">
      <div className="bg-primary/10 w-fit p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default Index;
