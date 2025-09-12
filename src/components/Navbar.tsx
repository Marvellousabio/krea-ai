'use client'

import { Home, Image as ImageIcon, Video, Sparkle, PenTool, Download, Folder, Eye, HelpCircle, Bell, Moon, User } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [username] = useState('John Doe') // Placeholder; fetch from auth/context

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900">
      {/* Left: Logo */}
      <div className="flex items-center">
        <div >
          <Image 
          src="/krea-logo.png"
          alt="Krea Logo"
          width={25}
          height={40}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          />
          
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{username}</span>
      </div>

      {/* Middle: Username + Icons */}
      <div className="hidden md:flex items-center space-x-6">
        
        <div className="flex space-x-2">
          <button type="button" title="Home" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Home className="w-5 h-5" />
          </button>
          <button type="button" title="Images" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ImageIcon className="w-5 h-5" />
          </button>
          <button type="button" title="Videos" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button type="button" title="Sparkle" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Sparkle className="w-5 h-5" />
          </button>
          <button type="button" title="Pen Tool" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <PenTool className="w-5 h-5" />
          </button>
          <button type="button" title="Download" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button type="button" title="Folder" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Folder className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right: Gallery Button, Support, Toggle, Profile */}
      <div className="flex items-center space-x-4">
        {/* Gallery Button - Light background */}
        <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Eye className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">Gallery</span>
        </button>

        {/* Support with Notification */}
        <div className="relative">
          <button
            type="button"
            title="Support"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <Bell className="w-2 h-2 text-white" />
          </div>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Profile */}
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
          <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </nav>
  )
}