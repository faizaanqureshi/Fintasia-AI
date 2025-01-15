import { AuroraBackground } from "@/components/ui/aurora-background";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="min-h-screen overflow-auto relative">
      <AuroraBackground className="absolute inset-0 h-full w-full"><></></AuroraBackground>
      <div className="relative z-50 flex h-full flex-col p-4">
        <Menu darkLogo={false} linkText="Try our app" />
        <Hero />
      </div>
    </div>
  );
}
