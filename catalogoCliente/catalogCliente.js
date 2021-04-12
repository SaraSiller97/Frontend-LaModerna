//Table component functions and data
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
  //complex logic goes in computed:
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

//functions and data for the Vue app
var demo = new Vue({
  el: '#demo',
  data: {
    cId:'',
    cName:'',
    searchQuery: '',
    //modify this to change the table columns' names
    gridColumns: ['Compañía','Cliente','NombreA','NombreB','Estatus'],
    ////modify this to change the table rows' values
    //gridData: [
    //  { ID: '0', Compañía: "Zara" },
    //  { ID: '1', Compañía: "Nestle" },
    //  { ID: '2', Compañía: "Barcel" },
    //  { ID: '3', Compañía: "Plásticos Inc" },
    //  { ID: '4', Compañía: "Empacadora Inc" }
    //]
  },
  methods:{
    signUpClient(){
        //there will be a method here to establish connection with backend and sign up the companies' id and name, some day....
    }
    Reporte(){
      //logica para el reporte
    }
  }
})
