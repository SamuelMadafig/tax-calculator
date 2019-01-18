function getDOMStrings(){
    return{
        mainInput: '.main-input',
        mainResults: '.main-results .tax',
        mainPercentage: '.percent'
    }
}

function addEvent(){
    document.querySelector(getDOMStrings().mainInput).addEventListener('change', (e)=>{
        console.log(e.target.value)
        updateUI(calcTax(taxRates2018_19, e.target.value),e.target.value) ;
    })
}

function updateUI(taxRate, income){
    let per = ((taxRate/income)*100).toFixed(2);
    
    let amo = taxRate.toFixed(2);
    document.querySelector(getDOMStrings().mainResults).textContent =amo +'';
    document.querySelector(getDOMStrings().mainPercentage).textContent = per + '';
}



function calcTax(taxRates, income){
    let results;
    taxRates.forEach((element, index) => {
        if(index[0] < income && income < index[1]){
             results = index;
        }   
});
console.log
    return ( taxRates.get(results).base + taxRates.get(results).after*income);
}

addEvent();



let taxRates2018_19 = new Map()

taxRates2018_19.set( [0,16200],{
    base: 0,
    after: 0
});
taxRates2018_19.set( [18200,37000],{
    base: 0,
    after: 0.19
});
taxRates2018_19.set([37000, 90000],{
    base: 3572,
    after: 0.325
});
taxRates2018_19.set( [90000,180000],{
    base: 20797,
    after: 0.37
});
taxRates2018_19.set( [180000, Infinity],{
    base:54097,
    after: 0.45
});

 

   
   
calcTax(taxRates2018_19 ,69645).toFixed(2);