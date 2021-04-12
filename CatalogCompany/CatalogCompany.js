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
    cId:'',
    cName:'',
    searchQuery: '',
    gridColumns: ['ID', 'Compañía'],
    gridData: [
      { ID: '0', Compañía: "Zara" },
      { ID: '1', Compañía: "Nestle" },
      { ID: '2', Compañía: "Barcel" },
      { ID: '3', Compañía: "Plásticos Inc" },
      { ID: '4', Compañía: "Empacadora Inc" }
    ]
  },
  methods:{
    signUpCompany(){
        //da de alta con conexión a backend
    }
  }
})
