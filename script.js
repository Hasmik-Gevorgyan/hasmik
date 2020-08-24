let container = document.createElement("div");
let form = document.createElement("form");
let div_log = document.createElement("div");
let div_pass = document.createElement("div");
let div_buttons = document.createElement("div");
let label_log = document.createElement("label");
let label_pass = document.createElement("label");
let input_log = document.createElement("input");
let input_pass = document.createElement("input");
let input_signin = document.createElement("input");
let input_reg = document.createElement("input");
label_log.innerText = "login";
label_pass.innerText = "Password";



input_log.setAttribute("type","text");
input_log.setAttribute("name","login");
input_pass.setAttribute("type","password");
input_pass.setAttribute("name","password");
div_log.appendChild(label_log);
div_log.appendChild(input_log);
div_pass.appendChild(label_pass);
div_pass.appendChild(input_pass);
input_signin.setAttribute("type","submit");
input_signin.setAttribute("value","Sing In");
input_signin.setAttribute("name","sign");
input_reg.setAttribute("type","submit");
input_reg.setAttribute("value","Register");
input_reg.setAttribute("name","register");
div_buttons.appendChild(input_signin);
div_buttons.appendChild(input_reg);
form.appendChild(div_log);
form.appendChild(div_pass);
form.appendChild(div_buttons);
container.appendChild(form);
if(document.body != null){
    document.body.appendChild(container);
}
container.style.width = "30%";
container.style.background = "rgb(42, 132, 167)";
container.style.padding = "2%";
container.style.fontSize = "22px";
container.style.color = "white";
container.style.borderRadius = "10px";
div_log.style.margin = "20px 0";
div_log.style.display = "flex";
div_log.style.justifyContent = "space-between";
div_pass.style.margin = "20px 0";
div_pass.style.display = "flex";
div_pass.style.justifyContent = "space-between";
div_buttons.style.margin = "20px 0";
div_buttons.style.display = "flex";
div_buttons.style.justifyContent = "space-between";
label_log.style.display = "inline-block";
label_log.style.width = "28%";
label_pass.style.display = "inline-block";
label_pass.style.width = "28%";
input_log.style.width = "65%";
input_log.style.fontSize = "22px";
input_log.style.padding = "5px 10px";
input_pass.style.width = "65%";
input_pass.style.fontSize = "22px";
input_pass.style.padding = "5px 10px";
div_buttons.style.marginTop = "70px";
input_signin.style.width = "35%";
input_signin.style.fontSize = "22px";
input_signin.style.padding = "5px";
input_signin.style.color = "#2a84a7";
input_signin.style.border = "none";
input_signin.style.borderRadius = "5px";
input_reg.style.width = "35%";
input_reg.style.fontSize = "22px";
input_reg.style.padding = "5px";
input_reg.style.color = "#2a84a7";
input_reg.style.border = "none";
input_reg.style.borderRadius = "5px";
input_signin.style.borderRadius = "5px";
input_reg.style.width = "35%";
input_reg.style.fontSize = "22px";
input_reg.style.padding = "5px";
input_reg.style.color = "#2a84a7";
input_reg.style.border = "none";
input_reg.style.borderRadius = "5px";



