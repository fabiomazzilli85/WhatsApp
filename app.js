const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        { name: 'Michele', image: 'img/avatar_1.jpg' },
        { name: 'Pippo', image: 'img/avatar_2.jpg' },
        { name: 'Gianni', image: 'img/avatar_3.jpg' },
        { name: 'Sara', image: 'img/avatar_4.jpg' },
        { name: 'Fabio', image: 'img/avatar_5.jpg' },
        { name: 'Gianluca', image: 'img/avatar_6.jpg' },
        { name: 'Ettore', image: 'img/avatar_7.jpg' }
      ],
      activeName: null,
      sentMessages: [
        'Ciao! Come va?',
        'Sto preparando il pranzo.'
      ],
      receivedMessages: [
        'Domani ci vediamo al parco?',
        'Buonanotte!'
      ]
    };
  },
  methods: {
    setActiveName(name) {
      this.activeName = name;
    }
  }
}).mount('#app');
