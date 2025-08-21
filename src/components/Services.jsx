import React from 'react';
import { FaUserFriends, FaIdCard, FaUsers, FaHome } from 'react-icons/fa';

const plans = [
  {
    name: 'Un mes',
    price: 250,
    description: 'Acceso por un mes',
    icon: <FaIdCard className="text-dorado text-4xl mb-4" />,
    extra: 'A partir de 2+ meses: $300/mes',
    bg: 'https://t1.uc.ltmcdn.com/es/posts/5/8/6/cuantas_calorias_se_queman_en_el_gym_48685_orig.jpg',
  },
  {
    name: 'Estudiante',
    price: 250,
    description: 'Presentando credencial escolar',
    icon: <FaUserFriends className="text-dorado text-4xl mb-4" />,
    extra: 'Solo con credencial escolar',
    bg: 'https://enfoqueweb.uy/wp-content/uploads/2023/04/master14.jpg',
  },
  {
    name: 'Amigo',
    price: 450,
    description: 'Entrena con un amigo',
    icon: <FaUsers className="text-dorado text-4xl mb-4" />,
    extra: 'A partir de 2+ meses: $550/mes',
    bg: 'https://static.vecteezy.com/system/resources/previews/015/254/732/large_2x/young-sportive-people-doing-exercises-and-holding-ball-together-in-the-gym-photo.jpg',
  },
  {
    name: 'Familiar',
    price: 700,
    description: 'Plan para toda la familia',
    icon: <FaHome className="text-dorado text-4xl mb-4" />,
    extra: 'A partir de 2+ meses: $750/mes',
    bg: 'https://thumbs.dreamstime.com/b/multiethnic-group-people-training-gym-trainer-sportive-fit-persons-exercising-multiethnic-group-people-training-257549478.jpg',
  },
];

const whatsappNumber = '6182220246';

function getWhatsappLink(plan) {
  const message = `Hola, me interesa el plan ${plan}. ¿Podrían brindarme más información, por favor?`;
  return `https://wa.me/52${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function Services() {
  return (
    <div className="flex flex-col items-center py-16 bg-[#181818] min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-dorado">Nuestros Servicios y Planes</h2>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className="relative group rounded-2xl overflow-hidden w-80 h-96 flex flex-col justify-end p-8 m-2 bg-black border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80"
            style={{ backgroundImage: `url(${plan.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-start">
              {plan.icon}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white mb-2">{plan.description}</p>
              <div className="mb-2 text-dorado text-xl font-extrabold">${plan.price}<span className="text-white text-base font-normal">/mes</span></div>
              {plan.extra && <div className="mb-4 text-yellow-400 text-sm font-semibold">{plan.extra}</div>}
              <a
                href={getWhatsappLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-dorado text-negro font-bold py-2 px-6 rounded-lg shadow hover:bg-yellow-400 transition"
              >
                Me interesa este plan
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 