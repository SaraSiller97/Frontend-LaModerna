const app = new Vue({

  el: '#app',
  

  data: {
    errors: [],
    user: null,
    password: null,
    credentials:{
      user:'',
      psw:'',
      body:'This is a post'
      }
  },
  methods:{
    checkForm: function (e) {
      if (this.user && this.password) {
        console.log(user);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.credentials)
                         .then(response=> console.log(response))
                         .then(error=> console.log(error))
      }

      this.errors = [];

      if (!this.user) {
        this.errors.push('Se requiere usuario');
      }
      if (!this.password) {
        this.errors.push('Se requiere contraseña');
      }

      e.preventDefault();
    }
    
  }
})