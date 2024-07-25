export default function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to Planet Mindful</h1>
        <p className="mt-4 text-xl">
          Your resource for understanding and taking action on climate change
        </p>
      </div>

      {/* First Section */}
      <section className="flex flex-col justify-center items-center text-center p-8 gap-8">
        {/* Featured Data Points */}
        <div className="w-full px-4">
          <h2 className="text-2xl font-bold mb-4">Featured Climate Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded shadow-box">Data Point 1</div>
            <div className="p-4 rounded shadow-box">Data Point 2</div>
            <div className="p-4 rounded shadow-box">Data Point 3</div>
          </div>
        </div>

        {/* Climate News */}
        <div className="mt-8 px-4 w-full">
          <h2 className="text-2xl font-bold mb-4">Climate News</h2>
          <div className="p-4 rounded shadow-box">
            <p>Summary of the first news item goes here...</p>
          </div>
        </div>
      </section>
    </>
  );
}
