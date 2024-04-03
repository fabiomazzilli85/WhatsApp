const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Alice',
          image: 'img/avatar_1.jpg',
          messaggi: [
            "Ciao! Come stai?",
            "Hai sentito la notizia di oggi?",
            "Ci vediamo domani?"
          ]
        },
        {
          name: 'Bob',
          image: 'img/avatar_2.jpg',
          messaggi: [
            "Hey, tutto bene?",
            "Che ne dici di fare una passeggiata questo fine settimana?",
            "Hai visto il nuovo film?"
          ]
        },
        {
          name: 'Diego',
          image: 'img/avatar_3.jpg',
          messaggi: [
            "Che stai facendo?",
            "Sei andato al cinema ieri sera?",
            "Mi sono trovato molto bene con te"
          ]
        },
        {
          name: 'Stefania',
          image: 'img/avatar_4.jpg',
          messaggi: [
            "Davvero bella Genova come città",
            "Ho mangiato il pesto genovese. Meraviglioso",
            "La focaccia che preparano a Genova è immangiabile."
          ]
        },
        {
          name: 'Charlie',
          image: 'img/avatar_5.jpg',
          messaggi: [
            "Ciao a tutti!",
            "Qualcuno ha piani per il prossimo weekend?",
            "Ho appena finito un buon libro, consiglio a tutti!"
          ]
        }
      ]
    }
  }
}).mount('#app');
