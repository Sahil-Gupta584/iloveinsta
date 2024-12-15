import { Film, Image, UserCircle, Clock, LucideIcon } from 'lucide-react';
const features = [
  {
    icon: Film,
    title: 'Instagram Reels',
    description: 'Download your favorite reels in high quality to watch offline anytime.'
  },
  {
    icon: Clock,
    title: 'Instagram Stories',
    description: 'Save stories before they disappear in 24 hours. Never miss important moments.'
  },
  {
    icon: Image,
    title: 'Photos & Carousel',
    description: 'Download single photos or entire carousel posts in original quality.'
  },
  {
    icon: UserCircle,
    title: 'Profile Pictures',
    description: 'Save profile pictures in full resolution for your reference.'
  }
];

export function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Download Any Instagram Content</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our powerful downloader supports all types of Instagram content. Select what you want to download and get it in the highest quality possible.
        </p>
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
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl">
          <Icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}