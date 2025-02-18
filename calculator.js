var buttons = document.getElementsByClassName("button");
var display1=document.querySelector(".screen1 p");
var display2=document.querySelector(".screen2 p");

for(var i=0;i<buttons.length;i++){
var operand1=0;
var operand2=0;
var operator=null;
var result=null;

  buttons[i].addEventListener("click",function(){
    var id=this.getAttribute("id");
    console.log(id);
    if(id=="ac"){
      operand1=0;
      operand2=0;
      operator=null;
      display1.innerText=0;
      display2.innerText=0;
    }
    
    else if(id==9 || id==8 || id==7 || id==6 || id==5 || id==4 || id==3 || id==2 || id==1 || id==0){
      display1.innerText=display1.innerText + id;
      if(operator==null && operand1==0){
        operand1=id;
        display2.innerText=operand1;
      }
      else if(operator==null && operand1!=0){
        operand1+=id;
        display2.innerText=operand1;
      }
      else if(operator!=null && operand2==0){
        operand2=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
      else if(operator!=null && operand2!=0){
        operand2+=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
    }
    
    else if(id=="."){
      display1.innerText=display1.innerText + id;
      if(operator==null && operand1==0){
        operand1=id;
        display2.innerText=operand1;
      }
      else if(operator==null && operand1!=0){
        operand1+=id;
        display2.innerText=operand1;
      }
      else if(operator!=null && operand2==0){
        operand2=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
      else if(operator!=null && operand2!=0){
        operand2+=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
    }

    else if(id=="^" || id=="/" || id=="*" || id=="-" || id=="+"){
       operator=id
       display1.innerText="";
       display2.innerText= operand1 + " " + operator;
    }

    
    else if(id=="%"){
      result=eval("operand1/100");
      console.log(result);
      display1.innerText=result;
      display2.innerText=result;
      operand1=result;
      operator=null;
      operand2=0;
      }

    else if(id=="+/-"){
      if(operand1!=null){
        operand1=operand1*(-1);
        display1.innerText=operand1;
        display2.innerText=operand1;
      }
      else{
        operand2=operand2*(-1);
        display1.innerText=operand2;
        display2.innerText=operand2;
      } 
    }

    else if(id=="="){
      if(operand1==null || operand2==null || operator==null){
        display1.innerText="ERROR";
        display2.innerText="ERROR";
        operand1=0;
        operand2=0;
        operator=null;
      }

      else if(operator=="^"){
      result=eval(Math.pow(operand1,operand2));
      console.log(result);
      display1.innerText=result;
      display2.innerText=result;
      operand1=result;
      operator=null;
      operand2=0;
      }

      else{
      result=eval(operand1 + operator + operand2);
      display1.innerText=result;
      display2.innerText=result;
      operand1=result;
      operator=null;
      operand2=0;
      }
      
    }
        
  });
  
}

///////////////////////////////////////////////////////////////////////////////////


  document.addEventListener("keypress",function(event){
    var id=event.key;
    console.log(id);
    if(id=="c"){
      operand1=0;
      operand2=0;
      operator=null;
      display1.innerText=0;
      display2.innerText=0;
    }
    
    else if(id==9 || id==8 || id==7 || id==6 || id==5 || id==4 || id==3 || id==2 || id==1 || id==0){
      display1.innerText=display1.innerText + id;
      if(operator==null && operand1==0){
        operand1=id;
        display2.innerText=operand1;
      }
      else if(operator==null && operand1!=0){
        operand1+=id;
        display2.innerText=operand1;
      }
      else if(operator!=null && operand2==0){
        operand2=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
      else if(operator!=null && operand2!=0){
        operand2+=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
    }
    
    else if(id=="."){
      display1.innerText=display1.innerText + id;
      if(operator==null && operand1==0){
        operand1=id;
        display2.innerText=operand1;
      }
      else if(operator==null && operand1!=0){
        operand1+=id;
        display2.innerText=operand1;
      }
      else if(operator!=null && operand2==0){
        operand2=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
      else if(operator!=null && operand2!=0){
        operand2+=id;
        display2.innerText= operand1 + " " + operator + " " + operand2;
      }
    }

    else if(id=="^" || id=="/" || id=="*" || id=="-" || id=="+"){
       operator=id
       display1.innerText="";
       display2.innerText= operand1 + " " + operator;
    }

    
    else if(id=="%"){
      result=eval("operand1/100");
      console.log(result);
      display1.innerText=result;
      display2.innerText=result;
      operand1=result;
      operator=null;
      operand2=0;
      }

    else if(id=="+/-"){
      if(operand1!=null){
        operand1=operand1*(-1);
        display1.innerText=operand1;
        display2.innerText=operand1;
      }
      else{
        operand2=operand2*(-1);
        display1.innerText=operand2;
        display2.innerText=operand2;
      } 
    }

    else if(id=="="){
      if(operand1==null || operand2==null || operator==null){
        display1.innerText="ERROR";
        display2.innerText="ERROR";
        operand1=0;
        operand2=0;
        operator=null;
      }

      else if(operator=="^"){
      result=eval(Math.pow(operand1,operand2));
      console.log(result);
      display1.innerText=result;
      display2.innerText=result;
      operand1=result;
      operator=null;
      operand2=0;
      }

      else{
      result=eval(operand1 + operator + operand2);
      display1.innerText=result;
      display2.innerText=result;
      operand1=result;
      operator=null;
      operand2=0;
      }
      
    }
        
  });
  



