import { Flame, Target, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      {/* Header with streak */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Maobai</h1>
          <p className="text-gray-600 text-sm mt-1">Ready to learn Chinese?</p>
        </div>
        <div className="flex items-center space-x-1 bg-orange-100 px-3 py-1 rounded-full">
          <Flame size={20} className="text-orange-500" />
          <span className="font-bold text-orange-700">0</span>
        </div>
      </div>

      {/* Panda Mascot Placeholder */}
      <div className="bg-white rounded-3xl shadow-lg p-8 text-center border-2 border-dashed border-bamboo">
        <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">🐼</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">MaoBai the Panda</h2>
        <p className="text-gray-500 text-sm mt-2">Your learning companion</p>
        <div className="mt-4 inline-block bg-bamboo text-white px-4 py-2 rounded-full text-sm font-medium">
          Start Learning
        </div>
      </div>

      {/* Daily Goals */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Daily Goals</h3>
        <div className="grid grid-cols-2 gap-3">
          <GoalCard 
            icon={<Target size={20} className="text-bamboo" />}
            label="New Words"
            current={0}
            target={15}
          />
          <GoalCard 
            icon={<Zap size={20} className="text-gold" />}
            label="Review"
            current={0}
            target={30}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Quick Start</h3>
        <button className="w-full bg-bamboo hover:bg-bamboo-dark text-white font-semibold py-4 rounded-2xl transition-colors shadow-md">
          Continue Lesson
        </button>
        <button className="w-full bg-white border-2 border-gray-200 hover:border-bamboo text-gray-700 font-semibold py-4 rounded-2xl transition-colors">
          Placement Test
        </button>
      </div>
    </div>
  );
}

function GoalCard({ 
  icon, 
  label, 
  current, 
  target 
}: { 
  icon: React.ReactNode; 
  label: string; 
  current: number; 
  target: number; 
}) {
  const progress = Math.min((current / target) * 100, 100);
  
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-2">
        {icon}
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <div className="flex items-baseline space-x-1">
        <span className="text-2xl font-bold text-gray-900">{current}</span>
        <span className="text-sm text-gray-400">/ {target}</span>
      </div>
      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-bamboo rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
