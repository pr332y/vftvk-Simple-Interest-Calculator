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