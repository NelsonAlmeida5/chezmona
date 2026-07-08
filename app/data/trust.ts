export interface TrustItem {
  id: string
  title: string
  description: string
}

export const trustItems: TrustItem[] = [
  {
    id: 'accompagnement-personnalise',
    title: 'Accompagnement personnalisé',
    description: 'Une écoute attentive et des conseils adaptés à votre peau et vos objectifs.'
  },
  {
    id: 'cadre-apaisant',
    title: 'Cadre doux et apaisant',
    description: 'Un espace chaleureux et discret pour vivre chaque soin en toute sérénité.'
  },
  {
    id: 'soin-professionnel',
    title: 'Soin professionnel',
    description: 'Des protocoles rigoureux, réalisés avec sérieux à chaque rendez-vous.'
  },
  {
    id: 'reservation-simple',
    title: 'Réservation simple',
    description: 'Prenez rendez-vous en ligne en quelques clics, à tout moment.'
  }
]
