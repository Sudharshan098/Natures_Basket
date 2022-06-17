var userArr=JSON.parse(localStorage.getItem("userDatas")) || [];
    
    
    document.querySelector("#form").addEventListener("submit",function(){
        event.preventDefault();

        var data={
            usermobile:form.mobile.value,
            userotp:form.otp.value,
            email:form.email.value,
            password:form.password.value,
        }    
            // console.log(data)
             userArr.push(data)
        
            //  function getotp(){
            //     let num='1234567890';
            //     let OTP="";
            //     for(let i=0; i<4; i++){
            //         OTP+=[Math.floor(Math.random()*10)];
        
            //     }
            //     document.getElementById("otp").innerHTML=OTP;
            // }
        localStorage.setItem("userDatas",JSON.stringify(userArr));
        window.location.href="login.html"
    })
    // window.onload=function(){
    //     var hidediv=document.getElementById("gitu")
    //     document.onclick=function(div){
    //         if(div.target.id!=="gitu"){
    //             hidediv.style.display="none";
    //         };
    //     };
    // }
