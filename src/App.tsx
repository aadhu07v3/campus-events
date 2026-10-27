import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventCard } from './components/EventCard';
import events from './events.json';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;