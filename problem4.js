let reg_email="abcd@gmail.com";
let reg_pass="1234";
let ent_email="abcdeg@gmail.com";
let ent_pass="1234";

if(ent_email==reg_email){
  if(ent_pass==reg_pass){
    console.log("Login Successful");
  }else{
    console.log("Incorrect Passwoard");
  }
}else{
  console.log("Wrong Email");
}