'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Generate from '@/components/Generate'
// import Gallery from '@/components/Gallery'
// import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-8 ">
        <Hero />
        <Generate />
        {/* <Gallery /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}


// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'
// import { Image as ImageIcon, Video, Zap, Sparkles, FolderOpen } from 'lucide-react'
// import Navbar from '@/components/Navbar' // New import
// // Remove ThemeToggle import as it's now in Navbar

// export default function Home() {
//   const [activeTab, setActiveTab] = useState('generate')

//   const tabs = [
//     { key: 'generate', label: 'Generate images with custom', icon: ImageIcon },
//     { key: 'video', label: 'Generate videos with Flux', icon: Video },
//     { key: 'realtime', label: 'Realtime rendering', icon: Zap },
//     { key: 'enhance', label: 'Enhance images up to 2K', icon: Sparkles },
//     { key: 'show-all', label: 'Show all', icon: FolderOpen },
//   ]

//   return (
//     <div className={"min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white"}>
    
//       {/* Navbar */}
//       <Navbar />

      // {/* Main Content - Rest remains the same */}
//       <div className="container mx-auto px-6 py-8">
//         {/* Hero Section with Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {/* WAN 2.2 Card */}
//           <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src="/wan.png"
//               alt="WAN 2.2 Image Generation"
//               width={600}
//               height={400}
//               className="w-full h-64 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             <div className="absolute bottom-4 left-4 right-4">
//               <h2 className="text-3xl font-bold text-white mb-2">WAN 2.2</h2>
//               <p className="text-white/90 mb-4">WAN 2.2 Image generation based on new generation WAN 2.2 models. Exceptional prompt adherence and ultra-realistic image generation.</p>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold">
//                 Try WAN 2.2
//               </button>
//             </div>
//           </div>

//           {/* FLUX.1 Card */}
//           <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src="/cor.png"
//               alt="FLUX.1 Open Source"
//               width={600}
//               height={400}
//               className="w-full h-64 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             <div className="absolute bottom-4 left-4 right-4">
//               <h2 className="text-3xl font-bold text-white mb-2">FLUX.1<br />Open Source</h2>
//               <p className="text-white/90 mb-4">FLUX.1 [schnell] weights to run FLUX.1 model weights. Download model weights, read the tech report, or</p>
//               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold">
//                 Download model weights
//               </button>
//             </div>
//           </div>
//         </div>

// //         {/* Generate Tabs Section */}
// //         <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-1 mb-12">
// //           <div className="flex space-x-1 overflow-x-auto">
// //             {tabs.map((tab) => {
//               const Icon = tab.icon
//               return (
//                 <button
//                   key={tab.key}
//                   onClick={() => setActiveTab(tab.key)}
//                   className={`flex items-center space-x-2 px-4 py-3 rounded-md whitespace-nowrap font-medium transition-colors ${
//                     activeTab === tab.key
//                       ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
//                       : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span>{tab.label}</span>
//                 </button>
//               )
//             })}
//           </div>
//         </div>

//         {/* Gallery Section Placeholder */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <div key={i} className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center">
//               Gallery Item {i + 1}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 text-center text-gray-500 dark:text-gray-400">
//         <p>Made with love by <span className="font-semibold">Marvellous Ogunleke</span></p>
//       </footer>
//     </div>
//   )
// }
