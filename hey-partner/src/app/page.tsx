export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Hey Partner
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Your Personal Concierge Service
        </p>
        <div className="space-x-4">
          <a 
            href="/login" 
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </a>
          <a 
            href="/register" 
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}
