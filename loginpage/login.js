var form=document.querySelector("form");
    var userDatas=JSON.parse(localStorage.getItem("userDatas"));

    console.log(userDatas)
    form.addEventListener("submit",function(event){
        event.preventDefault();

        var data={
            email:form.email.value,
            password :form.password.value
        }
        if(userDatas===null)
        {
            alert("Please Register an account");
            // window.location.href="Signup.html"
        }
        else{
            var found=false;
            userDatas.forEach(function(ele){
                if(ele.email==data.email && ele.password==data.password)
                {
                    found=true;
                }
            })
            if (found)
            {   
                var login = data.email;
        
                localStorage.setItem("login",JSON.stringify(login));
                alert("Login Successful")
                window.location.href="/Natures_Basket/index.html"
            }
            else{
                alert("Invalid email-ID or Password")
            }

        }

       
       
    });
    // window.location.href="index.html"
    // localStorage.setItem("userDatas",JSON.stringify(userArr));
    //     window.location.href="register.html"