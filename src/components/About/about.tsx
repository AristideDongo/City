'use client'
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import communesAbidjan from '@/data/communes';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

// Configuration de l'icône par défaut de Leaflet
const customIcon = L.icon({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


export default function AboutSection() {
  const [selectedCommune, setSelectedCommune] = useState<number>(0);

  const handleChangeCommune = (direction: 'next' | 'prev') => {
    setSelectedCommune((prev) => {
      if (direction === 'next') {
        return (prev + 1) % communesAbidjan.length; // Boucle au début
      } else {
        return (prev - 1 + communesAbidjan.length) % communesAbidjan.length; // Boucle à la fin
      }
    });
  };

  return (
    <section className="py-12">
      {/* Titre principal */}
      <div className="text-center">
        <h2 className="text-4xl ml-14 text-start font-bold text-black">À Propos des Communes d&apos;Abidjan</h2>
        <p className="text-black text-xl mt-4 text-start font-semibold ml-16">
          Apprenez-en plus sur les communes principales d’Abidjan et leurs caractéristiques uniques.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start mt-8 gap-8">
        {/* Informations sur la commune sélectionnée (à gauche) */}
        <div className="w-full md:w-1/3  ml-10 border-2 border-black shadow-lg rounded-lg p-6">
          <h3 className="text-2xl text-center font-bold text-black">
            {communesAbidjan[selectedCommune].name}
          </h3>
          <p className="text-black font-semibold text-lg mt-2">
            {communesAbidjan[selectedCommune].description}
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <button 
              className="px-6 py-4 border-2 border-black bg-green-400 hover:bg-green-600 text-black rounded"
              onClick={() => handleChangeCommune('prev')}
            >
              <GrLinkPrevious />
            </button>
            <button 
              className="px-6 py-4 border-2 border-black bg-green-400 hover:bg-green-600 text-black rounded"
              onClick={() => handleChangeCommune('next')}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>

        {/* Carte avec marqueurs pour chaque commune (à droite) */}
        <div className="w-full md:w-2/3 mt-6 mr-5 bg-transparent border-2 border-black shadow-lg rounded-lg">
          <div>
            <MapContainer
              center={[communesAbidjan[selectedCommune].lat, communesAbidjan[selectedCommune].lng]}  // Centrer la carte sur la commune sélectionnée
              zoom={11}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {communesAbidjan.map((commune, index) => (
                <Marker 
                  key={index} 
                  position={[commune.lat, commune.lng]} 
                  icon={customIcon}  // Utilisation de l'icône personnalisée
                >
                  <Popup>{commune.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
