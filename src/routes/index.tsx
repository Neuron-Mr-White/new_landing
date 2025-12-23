import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: DesLandingPage,
})

export function DesLandingPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-amber-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-amber-800 sm:text-5xl md:text-6xl">
            Meet Des
          </h1>
          <p className="mt-4 text-xl text-amber-900">
            The most adorable pet you'll ever meet.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-amber-200">
              <img
                src="https://placehold.co/600x400?text=Des+the+Pet"
                alt="Des the Pet"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-6">Who is Des?</h2>
        <div className="prose prose-lg mx-auto text-gray-700 bg-white p-8 rounded-2xl shadow-sm">
          <p>
            Des is not just a pet; Des is a bundle of joy, energy, and fluff.
            Whether chasing toys, napping in sunbeams, or begging for treats with those big puppy eyes
            (even if Des is not a puppy!), Des captures the hearts of everyone around.
          </p>
          <p className="mt-4">
            Living the good life, Des enjoys long walks, squeaky toys, and endless belly rubs.
          </p>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-10">Fun Facts About Des</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🎾</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Toy Destroyer</h3>
              <p>Can dismantle a squeaky toy in under 5 minutes.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">💤</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Nap Champion</h3>
              <p>Sleeps up to 18 hours a day, preferably on your pillow.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🥕</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Veggie Lover</h3>
              <p>Surprisingly loves crunching on fresh carrots and cucumbers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8 text-center">
        <p>© {new Date().getFullYear()} Des Fan Club. All paws reserved.</p>
      </footer>
    </div>
  )
}
