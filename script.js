function yearsArray(num) {
    let years=document.getElementById("years")
    let year=[...Array(num+1).keys()]
    year.shift()
    year.forEach(element => {years.add(new Option(element))})
}