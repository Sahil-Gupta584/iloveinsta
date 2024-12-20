import { Copy, Share2, Download, LucideIcon } from 'lucide-react';

const instructions = [
  {
    icon: Copy,
    title: 'Copy URL',
    description: 'Open Instagram and copy the URL of the reel or story you want to download'
  },
  {
    icon: Share2,
    title: 'Paste Link',
    description: 'Paste the copied URL into the input field above'
  },
  {
    icon: Download,
    title: 'Download',
    description: 'Click the download button and save your content'
  }
];

export function Instructions() {
  return (
    <div className="mt-12 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center">How to Download</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instructions.map((instruction) => (
          <InstructionCard key={instruction.title} {...instruction} />
        ))}
      </div>
    </div>
  );
}


interface InstructionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function InstructionCard({ icon: Icon, title, description }: InstructionCardProps) {
  return (
    <div className="dark:bg-gray-800 dark:hover:shadow-xl dark:hover:shadow-gray-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
          <Icon className="text-white" />
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm dark:text-white">{description}</p>
    </div>
  );
}