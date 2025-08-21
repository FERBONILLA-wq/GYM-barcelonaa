import React from 'react';
import { FaDumbbell, FaCogs, FaArrowUp, FaArrowDown, FaGripHorizontal, FaHandRock, FaUserFriends, FaWeightHanging, FaArrowsAltH } from 'react-icons/fa';

const machines = [
  {
    name: 'Extensión',
    icon: <FaArrowUp className="text-dorado text-4xl mb-2" />,
    description: 'Fortalece cuádriceps mediante extensión de piernas.',
    bg: 'https://www.bodytone.eu/wp-content/uploads/2023/05/SG52_01-300x300.jpg',
  },
  {
    name: 'Prensa',
    icon: <FaArrowDown className="text-dorado text-4xl mb-2" />,
    description: 'Ejercicio compuesto para piernas y glúteos.',
    bg: 'https://contents.mediadecathlon.com/m11422101/k$a7556358fec4c4b3ee97784e7bcfe1c5/sq/sentadilla-prensa-de-pierna-45-g530-semiprofesional.jpg?format=auto&f=800x0  ',
  },
  {
    name: 'Polea',
    icon: <FaGripHorizontal className="text-dorado text-4xl mb-2" />,
    description: 'Versátil para ejercicios de brazos y espalda.',
    bg: 'https://jbs-fitness.es/wp-content/uploads/2020/07/Placas-Multiestacion-Cruze-de-Poleas-Strength-1024x1024.jpg',
  },
  {
    name: 'Máquina de Pecho',
    icon: <FaHandRock className="text-dorado text-4xl mb-2" />,
    description: 'Aísla y fortalece el pectoral mayor.',
    bg: 'http://hefeztofitness.com/cdn/shop/files/aparato-prensa-de-pecho-con-peso-integrado-linea-g8.jpg?v=1696270507',
  },
  {
    name: 'Máquina de Sentadilla',
    icon: <FaArrowDown className="text-dorado text-4xl mb-2" />,
    description: 'Sentadillas guiadas para piernas y glúteos.',
    bg: 'https://m.media-amazon.com/images/I/41Tx6l5ITGL._SL500_.jpg',
  },
  {
    name: 'Libre',
    icon: <FaUserFriends className="text-dorado text-4xl mb-2" />,
    description: 'Zona de peso libre para ejercicios funcionales.',
    bg: 'https://anubisgym.com/wp-content/uploads/2023/11/7fc18667-ba0c-48de-b2a5-9f7ed5179c52.jpg',
  },
  {
    name: 'Máquina Espalda',
    icon: <FaArrowsAltH className="text-dorado text-4xl mb-2" />,
    description: 'Fortalece dorsales y zona media.',
    bg: 'https://www.marbosport.es/hpeciai/6344cb439036783b59f0e77fb460a712/spa_pl_La-maquina-de-espalda-US-U005-UpForm-28532_1.jpg',
  },
  {
    name: 'Polea de Brazo',
    icon: <FaCogs className="text-dorado text-4xl mb-2" />,
    description: 'Aísla bíceps y tríceps.',
    bg: 'https://m.media-amazon.com/images/I/6158uTW1xrL._AC_SL1500_.jpg',
  },
  {
    name: 'Pesas de Mano y para Máquinas',
    icon: <FaWeightHanging className="text-dorado text-4xl mb-2" />,
    description: 'Variedad de pesas para todos los niveles.',
    bg: 'https://img.freepik.com/fotos-premium/mancuerna-discos-suelo_670147-14478.jpg',
  },
];

export default function Machines() {
  return (
    <div className="bg-[#181818] min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-dorado text-center">Nuestras Máquinas</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
        {machines.map((machine, idx) => (
          <div
            key={machine.name}
            className="relative group rounded-2xl overflow-hidden w-80 h-96 flex flex-col justify-end p-8 m-2 bg-black border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80"
            style={{ backgroundImage: `url(${machine.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-start">
              {machine.icon}
              <h3 className="text-xl font-bold text-white mb-2">{machine.name}</h3>
              <p className="text-white mb-2">{machine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 