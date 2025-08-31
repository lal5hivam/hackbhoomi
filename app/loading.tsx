export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-2">HackBhoomi 2025</h2>
        <p className="text-blue-200/80 text-sm">Loading your innovation journey...</p>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full mx-auto mt-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}