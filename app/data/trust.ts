export interface TrustItem {
  id: string
  title: string
  description: string
}

export const trustItems: TrustItem[] = [
  {
    id: 'certification',
    title: 'Certification',
    description: "Pratiques conformes aux exigences O-LRNIS & OFSP pour l'épilation laser."
  },
  {
    id: 'hygiene',
    title: 'Hygiène',
    description: "Matériel stérilisé et protocoles d'hygiène stricts à chaque rendez-vous."
  },
  {
    id: 'accompagnement',
    title: 'Accompagnement',
    description: 'Un bilan personnalisé et des conseils adaptés à votre peau et vos objectifs.'
  },
  {
    id: 'cadre-apaisant',
    title: 'Cadre apaisant',
    description: 'Un espace chaleureux et discret pour vivre chaque soin en toute sérénité.'
  }
]
