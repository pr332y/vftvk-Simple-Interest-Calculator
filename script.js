document.getElementsByTagName("select")[0].addEventListener("change",yearsArray(10))
document.getElementById("calculate").addEventListener("click",()=>{
    let principal=Number(document.getElementById("principal").value)
    let rate=Number(document.getElementsByTagName("output")[0].value)
    let years=parseInt(document.getElementById("years").value)
    let interest = principal * years * rate /100
    let futureYear = new Date().getFullYear()+parseInt(years)
    let result=document.getElementById("result")
    result.innerHTML=`If you deposit ${principal},\<br\>
    at a rate of ${rate}%\<br\> 
    You will receive an amount of ${interest} ,\<br\> 
    in the year ${futureYear}`
    result.style.display="block"
})
function yearsArray(num) {
    let years=document.getElementById("years")
    let year=[...Array(num+1).keys()]
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