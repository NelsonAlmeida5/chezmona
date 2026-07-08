export interface OpeningHours {
  day: string
  hours: string
  closed?: boolean
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: OpeningHours[]
  /** Lien de réservation Fresha — placeholder en attendant le lien réel du client. */
  bookingUrl: string
}

export const contactInfo: ContactInfo = {
  // Ville confirmée via les visuels tarifs de la cliente (docs/references/prestations-source.md) ;
  // adresse complète (rue, numéro) encore à compléter.
  address: '2830 Courrendlin (adresse complète à compléter)',
  // Numéro confirmé via les mêmes visuels.
  phone: '078 795 18 55',
  email: 'à compléter',
  hours: [
    { day: 'Du lundi au samedi', hours: 'Sur rendez-vous' }
  ],
  bookingUrl: '#reservation'
}
