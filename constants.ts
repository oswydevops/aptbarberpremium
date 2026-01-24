
import { Service, GalleryItem } from './types';


export const CARD_NUMBER = "9224-0699-9858-2890";
// CONFIGURACIÓN DE CONTACTO - Modifica esto para personalizar tu barbero
export const CONTACT_INFO = {
  phone: "+53 5560 5133",
  whatsappNumber: "53 5560 5133", // Sin símbolos ni espacios
  address: "Calle 2da # 5 E/Calle A y Calle B, Reparto Primero de Mayo, Nuevitas",
  googleMapsUrl: "https://www.google.com/maps/place/21%C2%B032'54.6%22N+77%C2%B016'24.9%22W/@21.5485073,-77.2736534,20.25z/data=!4m4!3m3!8m2!3d21.5485!4d-77.2735833?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
};

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte Normal',
    description: 'Corte tradicional con tijera y máquina, buscando un acabado natural y elegante.',
    price: 200.00,
    icon: 'content_cut'
  },
  {
    id: '2',
    name: 'Machimbrado',
    description: 'Perfilado experto, skin-fade o degradado.',
    price: 400.00,
    icon: 'content_cut'
  },
  {
    id: '3',
    name: 'Barba Completa',
    description: 'Experiencia completa: afeitado, perfilado, degradado de barba y estilizado final.',
    price: 150.00,
    icon: 'content_cut'
  },
  {
    id: '4',
    name: 'Arreglo de Cejas',
    description: 'Afeitado y perfilado de cejas para un look impecable.',
    price: 50.00,
    icon: 'content_cut'
  },
  {
    id: '5',
    name: 'Dibujos',
    description: 'Dibujos en los cortes de su preferencia.',
    price: 150.00,
    icon: 'content_cut'
  },
  {
    id: '6',
    name: 'Peinados',
    description: 'Próximamente.',
    price: 0.00,
    icon: 'content_cut'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', title: 'Machimbrado', imageUrl: '/images/machimbrado.jpg' },
  { id: '2', title: 'Corte Niños', imageUrl: '/images/fade.png' },
  { id: '3', title: 'Corte Clásico', imageUrl: '/images/tijeras.jpg' },
  { id: '4', title: 'Estilo Dibujo', imageUrl: '/images/dibujo.jpeg' }
];
