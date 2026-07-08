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
    description: 'Technologie nouvelle génération, adaptée à chaque type de peau.',
    href: '/prestations'
  },
  {
    id: 'soins-visage',
    title: 'Soins du visage',
    description: 'Nettoyage, éclat et anti-âge, selon vos besoins.',
    href: '/prestations'
  },
  {
    id: 'soins-corps',
    title: 'Soins du corps',
    description: 'Gommages et modelages pour une vraie détente.',
    href: '/prestations'
  },
  {
    id: 'forfaits',
    title: 'Forfaits',
    description: 'Des formules avantageuses pour prendre soin de vous régulièrement.',
    href: '/prestations'
  }
]
