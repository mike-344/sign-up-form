const pw_1 = document.querySelector("#user_password")
const pw_2 = document.querySelector("#password_verify")
const prompt_one = document.querySelector(".error_prompt_one")
const prompt_two = document.querySelector(".error_prompt_two")
let user_password;
let verify_password;

pw_1.addEventListener("input", ()=>{
  user_password = pw_1.value;
  verify_password = pw_2.value;
  if (user_password !== verify_password){
    prompt_one.removeAttribute("hidden", "");
    prompt_two.removeAttribute("hidden", "");
   

}else if (user_password == verify_password){
    prompt_one.setAttribute("hidden", +"");
    prompt_two.setAttribute("hidden", "");
  
} else  if (user_password ===""  && verify_password === ""){
    prompt_one.setAttribute("hidden", "");
    prompt_two.setAttribute("hidden", "");
}

})

pw_2.addEventListener("input", ()=>{
    verify_password = pw_2.value;
    user_password = pw_1.value;
    if (user_password !== verify_password){
        prompt_one.removeAttribute("hidden",  "");
        prompt_two.removeAttribute("hidden", "");
       
    }else if(user_password == verify_password){
        prompt_one.setAttribute("hidden",  "");
        prompt_two.setAttribute("hidden", "");
      
    
}else if(user_password ===""  && verify_password === ""){
    prompt_one.setAttribute("hidden", "");
    prompt_two.setAttribute("hidden", "");
}
})

