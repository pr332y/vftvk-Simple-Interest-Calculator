function yearsArray(num) {
    let years=document.getElementById("years")
    let year=[...Array(num+1).keys()]
    year.shift()
    year.shift()
    year.forEach(element => {
        switch (element) {
            case 1:
                years.add(new Option(element,element,true))
                break;
            default:
                years.add(new Option(element,element,false))
                break;
        }
    })
}
let principal=document.getElementById("principal").value
let rate=document.getElementById("rate").value
let years=document.getElementById("years").value
let interest = principal * years * rate /100
let year = new Date().getFullYear()+parseInt(years)
function updateRate() {
    let rate=document.getElementById("rate").value
    document.getElementById("rate_val").innerText=rate
}