export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test</h1>
      <div className="space-y-4">
        <div>
          <p>Image 1:</p>
          <img src="/projects/changokushi-gameplay.jpg" alt="test" className="w-64" />
        </div>
        <div>
          <p>Image 2:</p>
          <img src="/projects/changokushi-characters.jpg" alt="test" className="w-64" />
        </div>
        <div>
          <p>Image 3:</p>
          <img src="/projects/changokushi-app-store.jpg" alt="test" className="w-64" />
        </div>
      </div>
    </div>
  );
}