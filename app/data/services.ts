export interface Service {
  id: string
  title: string
  description: string
  href: string
}

export const services: Service[] = [
  {
    id: 'epilation-laser',
    title: 'Épilation laser',
    description: 'Technologie nouvelle génération, confortable et durable, adaptée à chaque type de peau.',
    href: '/prestations'
  },
  {
    id: 'soins-visage',
    title: 'Soins du visage',
    description: 'Nettoyage profond, éclat, anti-âge : des protocoles ciblés selon vos besoins.',
    href: '/prestations'
  },
  {
    id: 'soins-corps',
    title: 'Soins du corps',
    description: 'Gommages, modelages et soins raffermissants pour une parenthèse de détente.',
    href: '/prestations'
  },
  {
    id: 'forfaits',
    title: 'Forfaits',
    description: 'Des formules avantageuses pour prolonger les résultats et prendre soin de vous régulièrement.',
    href: '/prestations'
  }
]
