const app = new Vue({
  el: `#root`,
  data: {
    mailsArray: [],
  },

  methods: {
    getMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.mailsArray.push(response.data.response);
        });
    },
  },

  beforeMount() {
    for (let i = 0; i < 10; i++) {
      this.getMail();
    }
  },
});
