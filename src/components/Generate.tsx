'use client'

import { useState } from 'react'
import { Image as ImageIcon, Video, Zap, Sparkles, FolderOpen } from 'lucide-react'

const tabs = [
  { key: 'generate', label: 'Generate images with custom', icon: ImageIcon },
  { key: 'video', label: 'Generate videos with Flux', icon: Video },
  { key: 'realtime', label: 'Realtime rendering', icon: Zap },
  { key: 'enhance', label: 'Enhance images up to 2K', icon: Sparkles },
  { key: 'show-all', label: 'Show all', icon: FolderOpen },
]

export default function Generate() {
  const [activeTab, setActiveTab] = useState('generate')

  return (
    <section className="container mx-auto px-6 py-8">
      {/* Tab Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-8 overflow-x-auto">
        <div className="flex space-x-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md whitespace-nowrap font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300"
          >
            Gallery Item {i + 1}
          </div>
        ))}
      </div>
    </section>
  )
}
