document.getElementsByTagName("select")[0].addEventListener("change",yearsArray(10))
document.getElementById("calculate").addEventListener("click",()=>{
    let principal=Number(document.getElementById("principal").value)
    let rate=Number(document.getElementsByTagName("output")[0].value)
    let years=parseInt(document.getElementById("years").value)
    let interest = principal * years * rate /100
    let futureYear = new Date().getFullYear()+years
    let result=document.getElementById("result")
    if (principal<=0) {
        alert('Enter a positive number')
        document.getElementById('principal').focus()
    } else {
        //display result and add html elements with class called highlighted to target for css formatting
        result.innerHTML='If you deposit <span class="highlighted">'+principal+'</span><br/>'+
                         'at a rate of <span class="highlighted">'+rate+'%</span><br/>'+
                         'You will receive an amount of <span class="highlighted">'+interest+'</span><br/>'+
                         'in the year <span class="highlighted">'+futureYear+'</span><br/>'
        result.style.display="block"        
    }
    
})
//Dynamically create new option items for years input
function yearsArray(num) {
    let years=document.getElementById("years")
    let year=[...Array(num+1).keys()]
    year.shift()
    year.forEach(element => {
        switch (element) {
            //use 1 as the default selection
            case 1:
                years.add(new Option(element,element,true))
                break;
            default:
                years.add(new Option(element,element,false))
                break;
        }
    })
}