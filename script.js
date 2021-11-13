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
function compute() {
    let principal=document.getElementById("principal")
    let rate=document.getElementsByTagName("output")[0]
    let yearNum=document.getElementById("years")
    let amount = principal * years * rate /100
    let futureYear = new Date().getFullYear()+parseInt(years)
    let result=document.getElementById("result")
    result.innerHTML=`If you deposit ${principal} <br>
                    at a rate of ${rate} <br> 
                    You will receive an amount of ${amount} <br> 
                    in the year ${futureYear}`
}