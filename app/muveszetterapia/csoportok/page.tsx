import React from 'react';

'use client';


// Define the type for a group session
interface GroupSession {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  spotsAvailable: number;
  spotsTotal: number;
  price: string;
}

// Mock data for available group sessions
const groupSessions: GroupSession[] = [
  {
    id: 1,
    title: 'Önismereti Alkotócsoport',
    description: 'Fedezd fel önmagad a művészet erejével egy támogató, kiscsoportos közösségben. Nincs szükség művészi előképzettségre.',
    date: 'Minden kedden, 2024. Október 15-től',
    time: '18:00 - 20:00',
    duration: '120 perc',
    spotsAvailable: 4,
    spotsTotal: 8,
    price: '12.000 Ft / alkalom',
  },
  {
    id: 2,
    title: 'Stresszkezelés és Relaxáció Művészetterápiával',
    description: 'Tanulj meg hatékony relaxációs technikákat és vezesd le a feszültséget kreatív alkotó folyamatokon keresztül.',
    date: 'Minden csütörtökön, 2024. Október 17-től',
    time: '17:30 - 19:00',
    duration: '90 perc',
    spotsAvailable: 2,
    spotsTotal: 6,
    price: '10.000 Ft / alkalom',
  },
  {
    id: 3,
    title: 'Szülő-Gyermek Kapcsolatépítő Csoport',
    description: 'Erősítsétek meg a köztetek lévő köteléket közös, játékos alkotással. Egy alkalom, egy közös élmény.',
    date: '2024. November 9. (Szombat)',
    time: '10:00 - 12:00',
    duration: '120 perc',
    spotsAvailable: 5,
    spotsTotal: 10,
    price: '15.000 Ft / pár',
  },
];

const GroupCard = ({ session }: { session: GroupSession }) => {
  const handleBookingClick = () => {
    // In a real application, this would open a modal, navigate to a booking form, or call an API.
    alert(`Jelentkezés a "${session.title}" csoportra.\n\nA folytatáshoz kérjük, vegye fel velünk a kapcsolatot a megadott elérhetőségeken.`);
  };

  const spotsRatio = session.spotsAvailable / session.spotsTotal;
  const spotsColor = spotsRatio > 0.5 ? 'bg-green-500' : spotsRatio > 0.25 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{session.title}</h3>
        <p className="text-gray-600 mb-4">{session.description}</p>
        
        <div className="space-y-2 text-gray-700 mb-4">
          <p><strong>Időpont:</strong> {session.date}, {session.time}</p>
          <p><strong>Időtartam:</strong> {session.duration}</p>
          <p><strong>Ár:</strong> {session.price}</p>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
            <span>Szabad helyek</span>
            <span>{session.spotsAvailable} / {session.spotsTotal}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className={`${spotsColor} h-2.5 rounded-full`} 
              style={{ width: `${(session.spotsAvailable / session.spotsTotal) * 100}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={handleBookingClick}
          disabled={session.spotsAvailable === 0}
          className="w-full mt-4 bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {session.spotsAvailable > 0 ? 'Jelentkezem' : 'Betelt'}
        </button>
      </div>
    </div>
  );
};

export default function GroupTherapyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">
            Csoportos Művészetterápia
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fedezze fel a közösségi alkotás erejét! Csoportjaink biztonságos és támogató légkört biztosítanak az önkifejezéshez, a személyes növekedéshez és a kapcsolódáshoz.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupSessions.map((session) => (
              <GroupCard key={session.id} session={session} />
            ))}
          </div>
        </main>

        <footer className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-800">Kérdése van?</h2>
            <p className="text-gray-600 mt-2">
                Vegye fel velünk a kapcsolatot emailben vagy telefonon a további részletekért.
            </p>
            <div className="mt-4">
                <a href="mailto:info@muveszetterapia.hu" className="text-teal-600 hover:text-teal-800 font-semibold">info@muveszetterapia.hu</a>
            </div>
        </footer>
      </div>
    </div>
  );
}