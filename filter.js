

// const allow =()=> console.log("allow")
const wordFiltered=()=>{
    var input,lu,li,i,enteredValue
     input=document.getElementById("search")
     enteredValue=input.value.toUpperCase()
     console.log("this is entered value")
     lu=document.getElementById("menu")
     li=lu.getElementsByTagName("li")

     for(i=0;i<li.length;i++){
        var aFound=li[i].getElementsByTagName("a")[0]
        if(aFound.innerHTML.toUpperCase().indexOf(enteredValue) > -1){
            li[i].style.display=""
        }else li[i].style.display="none"
     }

    }