const spanone=document.querySelector("#yek")
const spanthree= document.querySelector("#see")
const spancondition=document.querySelector("#doo")
const one=document.getElementById("one")
   one.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(1)
     } else if(!spancondition.textContent==""){
       spanthree.append(1)
     }
   })

   const two=document.getElementById("two")
   two.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(2)
     } else if(!spancondition.textContent==""){
       spanthree.append(2)
     }
   })


   const three=document.getElementById("three")
   three.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(3)
     } else if(!spancondition.textContent==""){
       spanthree.append(3)
     }
   })

   const four=document.getElementById("four")
   four.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(4)
     } else if(!spancondition.textContent==""){
       spanthree.append(4)
     }
   })


   const five=document.getElementById("five")
   five.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(5)
     } else if(!spancondition.textContent==""){
       spanthree.append(5)
     }
   })


   const six=document.getElementById("six")
   six.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(6)
     } else if(!spancondition.textContent==""){
       spanthree.append(6)
     }
   })

   const seven=document.getElementById("seven")
   seven.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(7)
     } else if(!spancondition.textContent==""){
       spanthree.append(7)
     }
   })


   const eight=document.getElementById("egiht")
   eight.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(8)
     } else if(!spancondition.textContent==""){
       spanthree.append(8)
     }
   })


   const nine=document.getElementById("nine")
   nine.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(9)
     } else if(!spancondition.textContent==""){
       spanthree.append(9)
     }
   })

   const zero=document.getElementById("zero")
   zero.addEventListener("click",e=>{
     if(spancondition.textContent==""){
       yek.append(0)
     } else if(!spancondition.textContent==""){
       spanthree.append(0)
     }
   })

const plus=document.querySelector("#plus")
plus.addEventListener("click",e=>{
     if(!spanone.textContent=="" && spancondition.textContent=="" ){
       document.querySelector("#doo").innerHTML=plus.textContent
       
     } else if(!spanone.textContent=="" && !spancondition.textContent=="" && !spanthree.textContent==""){
      equall()
      document.querySelector("#doo").innerHTML=plus.textContent

     } else if(!spanone.textContent=="" && !spancondition.textContent==""){
       document.querySelector("#doo").innerHTML=plus.textContent

     }
 })

 const mines=document.querySelector("#mines")
mines.addEventListener("click",e=>{

      if(!spanone.textContent=="" && spancondition.textContent=="" ){
      document.querySelector("#doo").innerHTML=mines.textContent
       
     } else if(!spanone.textContent=="" && !spancondition.textContent=="" && !spanthree.textContent==""){
      equall()
      document.querySelector("#doo").innerHTML=mines.textContent

     }else if(!spanone.textContent=="" && !spancondition.textContent==""){
       document.querySelector("#doo").innerHTML=mines.textContent

     }

   
 })

 const multiple=document.querySelector("#multiple")
multiple.addEventListener("click",e=>{

 if(!spanone.textContent=="" && spancondition.textContent=="" ){
   document.querySelector("#doo").innerHTML=multiple.textContent
       
     } else if(!spanone.textContent=="" && !spancondition.textContent=="" && !spanthree.textContent==""){
      equall()
      document.querySelector("#doo").innerHTML=multiple.textContent

     }else if(!spanone.textContent=="" && !spancondition.textContent==""){
       document.querySelector("#doo").innerHTML=multiple.textContent

     }
     
 })

 const division=document.querySelector("#division")
division.addEventListener("click",e=>{

 if(!spanone.textContent=="" && spancondition.textContent=="" ){
   document.querySelector("#doo").innerHTML=division.textContent
       
     } else if(!spanone.textContent=="" && !spancondition.textContent=="" && !spanthree.textContent==""){
      equall()
      document.querySelector("#doo").innerHTML=division.textContent

     }else if(!spanone.textContent=="" && !spancondition.textContent==""){
       document.querySelector("#doo").innerHTML=division.textContent

     }
    
 })





 // equal button  run below code when is clicked


  function equall(){
   const shownumer=document.querySelector("#shownumer")
  let firstvalue=document.querySelector("#yek")
   let firstvalueu=parseInt(firstvalue.textContent)
   const secondvalue=document.querySelector("#doo")
   let secondvalueu=secondvalue.textContent
   let thirdvalue=document.querySelector("#see")
  let  thirdvalueu=parseInt(thirdvalue.textContent)
 
   switch(secondvalueu){
     case "+" :firstvalue.innerHTML=firstvalueu+thirdvalueu ,
     thirdvalue.innerHTML="",secondvalue.innerHTML=""
     break;
     case "-" :firstvalue.innerHTML=firstvalueu-thirdvalueu ,
     thirdvalue.innerHTML="",secondvalue.innerHTML=""
     break;
     case "x" :firstvalue.innerHTML=firstvalueu*thirdvalueu ,
     thirdvalue.innerHTML="",secondvalue.innerHTML=""
     break;
     case "/" :firstvalue.innerHTML=firstvalueu/thirdvalueu ,
     thirdvalue.innerHTML="",secondvalue.innerHTML=""
     break;

   }
  }
 const equal=document.querySelector("#equal")

 equal.addEventListener("click",e=>{
   equall()
 
 })

 //clean top number in top box
const clean=document.querySelector("#clean")
clean.addEventListener("click",e=>{
 let firstvalue=document.querySelector("#yek")
 const secondvalue=document.querySelector("#doo")
 let thirdvalue=document.querySelector("#see")
 firstvalue.innerHTML=""
 secondvalue.innerHTML=""
 thirdvalue.innerHTML=""

})