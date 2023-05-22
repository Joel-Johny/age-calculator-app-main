function error(className,message){
    const element=document.getElementsByClassName(className)[0]
    element.textContent=message

    const childNodes=element.parentNode.children
    const heading=childNodes[0]
    const input =childNodes[1]
    heading.style.color="hsl(0, 100%, 67%)"
    input.style.borderColor="hsl(0, 100%, 67%)";
}

function resetColor(){
    const parent=document.getElementsByClassName("inputs")[0]
    const childNodes=Array.from(parent.children)

    childNodes.forEach(childNode => {

        const heading=childNode.children[0]
        const input =childNode.children[1]
        heading.style.color="hsl(0, 1%, 44%)"
        input.style.borderColor="hsl(0, 0%, 86%)";
        console.log(childNode,heading,input)


    });
}
function validate(){
    let valid=true
    const day=document.getElementById("day").value
    const month=document.getElementById("month").value
    const year=document.getElementById("year").value
    if(day.length==0){
        valid=false
        const className="e-day"
        error(className,"This field is required")
    }

    if(month.length==0){
        valid=false
        const className="e-month"
        error(className,"This field is required")
    }

    if(year.length==0){
        valid=false
        const className="e-year"
        error(className,"This field is required")
    }

    if(valid){
        resetColor()
        const birthDate=new Date(`${year}-${month}-${day}`)
        const nowDate=new Date()
        const dayDiff=nowDate.getDay()-birthDate.getDay()
        const monthList=[31,28,31,30,31,30,31,30,31,30,31,30]
        const ageY=parseInt((nowDate-birthDate)/1000/60/60/24/365)
        const ageM=parseInt(((nowDate-birthDate)/1000/60/60/24/365-ageY)*365/monthList[parseInt(month)])
        const ageD=parseInt((((nowDate-birthDate)/1000/60/60/24/365-ageY)*365/monthList[parseInt(month)]-ageM)*30)+dayDiff+1

        document.getElementById("resultYear").textContent=ageY
        document.getElementById("resultMonth").textContent=ageM
        document.getElementById("resultDay").textContent=ageD
    
    }

}