console.log(1)
window.onload = (function() {
$('.block')
 if ($(document).scrollTop() > 0) {
       document.querySelector('header').addClass("animate");
   } else {
     document.querySelector('header').removeClass("animate");
    }
    console.log()
});

fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates?currencyCode=840,978')
.then(response => response.json())
.then(currencyExchange => {
    allValyuti = currencyExchange
    const valyuta = {
        usd: {},
        eur: {},
        rub: {}
    };
    console.log('allValyuti', allValyuti);
    valyuta.usd = allValyuti.rates.find((rate) => rate.iso === 'USD')
    valyuta.usd = allValyuti.rates.find((rate) => rate.iso === 'EUR')
    valyuta.usd = allValyuti.rates.find((rate) => rate.iso === 'RUB')
    document.querySelector('.currency-usd').innerHTML = valyuta.usd.rate;
    document.querySelector('.currency-eur').innerHTML = valyuta.eur.rate;
    document.querySelector('.currency-rub').innerHTML = valyuta.rub.rate;
    console.log(valyuta);
});