function App() {
  return (
    <div className="w-[550px] max-w-full">
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-5">
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white px-7 py-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <img
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="block h-12 w-12"
          />
          <h1 className="m-0 text-xl font-bold leading-snug text-neutral-950">
            Chrome Extension Boilerplate
          </h1>
          <p className="m-0 text-sm font-normal leading-normal text-gray-500">
            Default Chrome extension boilerplate. Perfect starting point for your
            <br />
            next Chrome extension project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
