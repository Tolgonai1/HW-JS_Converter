const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// som.addEventListener('input',()=>{
//     const request = new XMLHttpRequest()
//     request.open("GET", 'data.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//     request.addEventListener('load',()=>{
//         const respons = JSON.parse(request.response)
//         usd.value = (som.value / respons.usd).toFixed(2)
//
//     })
// })
//
// usd.addEventListener('input',()=>{
//     const request = new XMLHttpRequest()
//     request.open("GET", 'data.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//     request.addEventListener('load',()=>{
//         const respons = JSON.parse(request.response)
//         som.value = (usd.value * respons.usd).toFixed(2)
//
//     })
// })

const convert = (elem,target,currency)=> {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", 'data.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2)
                if (elem === som)
                    currency.value = (elem.value / response.eurSom).toFixed(2)
            }else if(elem === usd){
                target.value = (elem.value * response.usd).toFixed(2)
                if(elem === usd)
                    currency.value = (elem.value / response.eurUsd).toFixed(2)
                }else if(elem === eur){
                    target.value = (elem.value * response.eurSom).toFixed(2)
                    if(elem === eur)
                        currency.value = (elem.value * response.eurUsd)
                }
                  elem.value === '' ? currency.value = '' : null
                  elem.value === '' && (target.value = '')
            }

        }
    }

convert(som,usd,eur)
convert(usd,som,eur)
convert(eur,som,usd)




