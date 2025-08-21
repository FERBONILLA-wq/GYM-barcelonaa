import React from 'react';
import { FaBicycle, FaSpa, FaFistRaised, FaRunning, FaMusic, FaHeartbeat, FaLeaf, FaGripHorizontal } from 'react-icons/fa';

const classes = [
  {
    name: 'Spinning',
    icon: <FaBicycle className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento cardiovascular intenso sobre bicicleta fija, ideal para quemar calorías y mejorar resistencia.',
    bg: 'https://ataasports.com/img/cms/PLAN-DE-ENTRENAMIENTO-SPINNING2.jpg',
  },
  {
    name: 'Yoga',
    icon: <FaSpa className="text-dorado text-4xl mb-2" />,
    description: 'Mejora tu flexibilidad, equilibrio y bienestar mental con sesiones de yoga guiadas.',
    bg: 'https://www.beyouhealthstudios.co.uk/wp-content/uploads/2020/02/yoga-classes-peterborough.jpg',
  },
  {
    name: 'Boxeo',
    icon: <FaFistRaised className="text-dorado text-4xl mb-2" />,
    description: 'Clases de boxeo para todos los niveles, mejora tu fuerza, coordinación y confianza.',
    bg: 'https://allforboxgym.es/wp-content/uploads/2022/03/DSC09261-scaled.jpg',
  },
  {
    name: 'Crossfit',
    icon: <FaRunning className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento funcional de alta intensidad para desarrollar fuerza y condición física.',
    bg: 'https://static.wixstatic.com/media/9e9e9b_ea72224372be4b50ba41de3499b7c19d~mv2_d_3000_1873_s_2.jpg/v1/fill/w_2500,h_1560,al_c/9e9e9b_ea72224372be4b50ba41de3499b7c19d~mv2_d_3000_1873_s_2.jpg',
  },
  {
    name: 'Zumba',
    icon: <FaMusic className="text-dorado text-4xl mb-2" />,
    description: 'Clases de baile fitness llenas de energía y diversión para quemar calorías.',
    bg: 'https://adelgazarencasa.co/wp-content/uploads/2023/02/personas-activas-que-participan-clase-zumba.jpg',
  },
  {
    name: 'HIIT',
    icon: <FaHeartbeat className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamientos cortos e intensos para maximizar la quema de grasa y mejorar tu resistencia.',
    bg: 'https://i.ytimg.com/vi/Tm6AvuIdi9M/maxresdefault.jpg',
  },
  {
    name: 'Pilates',
    icon: <FaLeaf className="text-dorado text-4xl mb-2" />,
    description: 'Fortalece tu core, mejora tu postura y flexibilidad con pilates.',
    bg: 'https://www.centroelpatio.com/wp-content/uploads/2021/05/clases-pilates-madrid.jpg',
  },
  {
    name: 'TRX',
    icon: <FaGripHorizontal className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento en suspensión para trabajar todo el cuerpo usando tu propio peso.',
    bg: 'https://eldiariony.com/wp-content/uploads/sites/2/2019/02/trx.jpg?quality=80&strip=all',
  },
];

export default function Location() {
  return (
    <div className="bg-[#181818] min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-dorado text-center">Clases Adicionales</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
        {classes.map((clase, idx) => (
          <div
            key={clase.name}
            className="relative group rounded-2xl overflow-hidden w-80 h-96 flex flex-col justify-end p-8 m-2 bg-black border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80"
            style={{ backgroundImage: `url(${clase.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-start">
              {clase.icon}
              <h3 className="text-xl font-bold text-white mb-2">{clase.name}</h3>
              <p className="text-white mb-2">{clase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 