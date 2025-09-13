'use client'

import {
  Home,
  Image as ImageIcon,
  Video,
  Sparkle,
  PenTool,
  Download,
  Folder,
  Album,
  HelpCircle,
  Bell,
  User,
} from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [username] = useState('benevolentnimblebat') // Replace with real user data later

  return (
    <nav className="px-6 py-3 flex justify-between items-center ">
      {/* Left: Logo + Username */}
      <div className="flex items-center space-x-2">
        <Image
          src="/krea-logo.png" // replace with your logo
          alt="Krea Logo"
          width={25}
          height={25}
          className="rounded dark:bg-gray-600 "
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {username}
        </span>
      </div>

      {/* Middle: Nav Icons */}
      <div className="hidden md:flex items-center space-x-1 bg-gray-200 dark:bg-gray-600 rounded-lg px-2 py-1">
        {[
          { Icon: Home, label: 'Home' },
          { Icon: ImageIcon, label: 'Images' },
          { Icon: Video, label: 'Videos' },
          { Icon: Sparkle, label: 'Sparkle' },
          { Icon: PenTool, label: 'Pen Tool' },
          { Icon: Download, label: 'Download' },
          { Icon: Folder, label: 'Folder' },
        ].map(({ Icon, label }, idx) => (
          <button
            key={idx}
            aria-label={label}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Right: Gallery, Support, Notifications, Theme, Profile */}
      <div className="flex items-center space-x-1.5">
        <button className="flex items-center space-x-1 px-2 py-1  bg-gray-200 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors">
          <Album className="w-4 h-4" />
          <span className="hidden sm:inline">Gallery</span>
        </button>

        <button className="flex items-center space-x-1 px-2 py-1 rounded-md text-sm bg-gray-200 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Support</span>
        </button>

        {/* Notification Bell with red dot */}
        <div className="relative">
          <button
            aria-label="Notifications"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Bell className="w-5 h-5" />
          </button>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Profile Avatar */}
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
          <User className="w-5 h-5 text-gray-600 dark:text-gray-200" />
        </div>
      </div>
    </nav>
  )
}
