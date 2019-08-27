import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {},
      selectedCurrencyFromEuros: null,
      selectedCurrencyToEuros: null,
      inputCurrencyEuro: null,
      inputCurrencyNotEuro: null
    },
    computed: {
      convertedCurrencyFromEuros: function (){
        return (this.inputCurrencyEuro * this.selectedCurrencyFromEuros).toFixed(2);
      },
      convertedCurrencytoEuros: function (){
        return (this.inputCurrencyNotEuro / this.selectedCurrencyToEuros).toFixed(2);
      }
    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(data => this.currencies = data.rates)
      }
    }
  })
})
