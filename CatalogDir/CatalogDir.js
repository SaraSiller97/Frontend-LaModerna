Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data:
    function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }

  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})


var demo = new Vue({
  el: '#demo',
  data: {
    cName:'',
    clientName:'',
    cp:'',
    pais:'',
    rfc:'',
    searchQuery: '',
    gridColumns: ['Compañía', 'Cliente', 'CódigoPostal', 'País', 'RFC'],
    gridData: [
      {Compañía: "Zara", Cliente:"José Luis Ramírez", CódigoPostal:"52165", País:"México", RFC:"MAPA630726BI8" },
      {Compañía: "Toyota", Cliente:"Jorge Luis Pérez", CódigoPostal:"52200", País:"México", RFC:"MAPA630726BI8" },
      {Compañía: "Chrysler", Cliente:"Gabriel Lozano", CódigoPostal:"53200", País:"México", RFC:"MAPA630726BI8" }
    ]
  },
  methods:{
    signUpCompany(){
        //da de alta con conexión a backend
    }
  }
})