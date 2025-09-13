'use client'

import { ImageIcon, Video, Zap, Sparkles, FolderOpen, Palette, Brain, MessageSquare } from 'lucide-react'

import { useNavigation } from '../../NavigationContext'
const cards = [
  { 
    key: 'generate', 
    label: 'Generate images with custom prompts', 
    icon: ImageIcon,
    color: 'bg-orange-500',
    new: true
  },
  { 
    key: 'video', 
    label: 'Generate videos with Flux Pro', 
    icon: Video,
    color: 'bg-yellow-500'
  },
  { 
    key: 'realtime', 
    label: 'Realtime rendering and canvas editing', 
    icon: Zap,
    color: 'bg-blue-500'
  },
  { 
    key: 'enhance', 
    label: 'Enhance images up to 2K resolution', 
    icon: Sparkles,
    color: 'bg-gray-600',
    new: true
  },
  { 
    key: 'color-lawyer', 
    label: 'Color Lawyer removes color from images', 
    icon: Palette,
    color: 'bg-green-600',
    new: true
  },
  { 
    key: 'minium-training', 
    label: 'Minium Training train custom models', 
    icon: Brain,
    color: 'bg-black'
  },
  { 
    key: 'truth', 
    label: 'Truth checks and validates image data', 
    icon: MessageSquare,
    color: 'bg-gray-500'
  },
  { 
    key: 'show-all', 
    label: 'Show all available tools and features', 
    icon: FolderOpen,
    color: 'bg-gray-600'
  }
]


export default function Generate() {
  const {navigate}=useNavigation()
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-800">Generate</h1>
        <button onClick={()=>navigate("/")}
        className="text-blue-600 hover:text-blue-800 text-sm">
          ← Show all
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div 
              key={card.key}
              className=" p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group relative"
            >
              {/* Icon and New Badge Row */}
              <div className="flex items-center justify-between mb-4">
                <div className={`${card.color} rounded-lg p-3 flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                    {card.key}
                </div>
                <div className="flex items-center gap-2">
                    
                  {card.new && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                      New
                    </span>
                  )}
                  <button 
                  onClick={()=>navigate("/")}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    Open
                  </button>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {card.label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}