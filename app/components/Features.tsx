import { Video, Shield, Zap, Download, LucideIcon } from 'lucide-react';
const features = [
  {
    icon: Video,
    title: 'HD Quality',
    description: 'Download Reels in the highest available quality'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'No registration required, completely secure downloads'
  },
  {
    icon: Zap,
    title: 'Fast Download',
    description: 'Lightning-fast processing and download speeds'
  },
  {
    icon: Download,
    title: 'Easy to Use',
    description: 'Simple process: paste URL, click download'
  }
];

export function Features() {
  return (
    <section className="py-12  ">
      <div className="container mx-auto px-4">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="dark:bg-gray-800 dark:hover:shadow-xl dark:hover:shadow-gray-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl">
          <Icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-white">{description}</p>
    </div>
  );
}