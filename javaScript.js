console.log("Helllloo");

function myFunction()
{    
    verifUserName();
    verifMail();
    verifierAge()
    //verifPW();
}

function calculeAge(date) {
    var todayYear=new Date();
    var BirthYear=new Date(date);
    var utc1 = Date.UTC(BirthYear.getFullYear(), BirthYear.getMonth(), BirthYear.getDate());
    var utc2 = Date.UTC(todayYear.getFullYear(), todayYear.getMonth(), todayYear.getDate());   
    var age = Math.floor((utc2 - utc1) / (365.24*24*3600*1000));    
    return age;
}

function classificationAge(age){
if(age>18)
console.log("La personn est majeur");
else
console.log("La personne est mineur");
}

function verifierAge() {
    var date = document.getElementById("idDateBirth").value;
    console.log("la date entré est : "+ date);
    var age = calculeAge(date);    
    classificationAge(age);
    console.log("l'age est ", age);    
    document.getElementById("RepAge").innerHTML = age;
}

function verifUserName(){  
    var username=document.getElementById("idUsername").value;
    var msgUsername="";    
    if(username.length<=0) 
    {
        msgUsername="Entrer le username";
        console.log(msgUsername);
        document.getElementById("repName").innerHTML=msgUsername;
    }
    else     
    {   
        if(username.indexOf(' ')>-1){
            msgUsername="il y a un espace dans le mot entrer";
            
        }
        for(i=0; i<username.length; i++){            
            if(username[i].trim()==0){
                console.log(msgUsername);
                document.getElementById("repName").innerHTML=msgUsername;
                break;        
            }
            else{                
                msgUsername="";                
                document.getElementById("repName").innerHTML=msgUsername;
            }
        }
    }    
}

function verifMail(){
    var mail= document.getElementById("idMail").value;
    var msgMail="";
    if(mail.length==0)
    {
        msgMail="Entrer  le mail"
        console.log(msgMail);
        document.getElementById("RepMail").innerHTML=msgMail;
    }
    else{
        var Email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(Email.test(mail)==false)
        {
            msgMail="Mail non valide";
            console.log(msgMail);
            document.getElementById("RepMail").innerHTML=msgMail;
        }
        else 
        {    
            //msgMail="Mail valide";
            msgMail="";
            console.log(msgMail);
           document.getElementById("RepMail").innerHTML=msgMail;
        }
    }
}

function blurFunction()
{    //var msg=document.getElementById("RepPass").value;
    //document.getElementById("RepPass").style.background="yellow" ;
    document.getElementById("idPassword").style.background = "red";
}
function focusFunction() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("idPassword").style.background = "yellow";
}
function passwordLongueur(password){
    if(password.length<=0)
        return true;    
    else
        return false;
}
function comptePassword(password){
    var count=0;
    var pass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;                
    if(password.match(/(?=.*[A-Z])/))
        count++;
    if(password.match(/(?=.*\d)/))
        count++;
    if(password.match(/[?=.*[a-z]/))
        count++;
    if(password.match(/[a-zA-Z0-9]{8,}/))
        count++;
    return count;
}

function securityPassword(count){ 
    console.log("la longueyr est : "+count);   
    if(count==1) 
    {
        msgPassWord="Mot de passe faible";
        console.log(msgPassWord);
        document.getElementById("RepPass").innerHTML=msgPassWord;
    }
    else if((count==2)||(count==3)) 
    {
        msgPassWord="Mot de passe moyenne";
        console.log(msgPassWord);
        document.getElementById("RepPass").innerHTML=msgPassWord;
    }
    else if(count=4) 
    {
        msgPassWord="Mot de passe forte";
        console.log(msgPassWord);
        document.getElementById("RepPass").innerHTML=msgPassWord;
    }        
}

function verifPassword(){
    var password= document.getElementById("idPassword").value;
    var msgPassWord="";
    if(passwordLongueur(password)==true)
    {
        msgPassWord="Entrer password"
        console.log(msgPassWord);        
        document.getElementById("RepPass").innerHTML=msgPassWord;
    }
    else
    {        
        var nbreSecurity=comptePassword(password)
        console.log("le compteur est : ", nbreSecurity);
        securityPassword(nbreSecurity); 
        /* /^ (?=.*\d)          // should contain at least one digit
        (?=.*[a-z])       // should contain at least one lower case
        (?=.*[A-Z])       // should contain at least one upper case
        [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters $/ */
    //   if(pass.test(password)) test opposé de match
    //     console.log("Password  Valide");
    //   else console.log("password non Valide");  
    }
}

function verifPW(){
    var pw = document.getElementById("idPW").value;
    compteur=0;
    if(majuscule(pw)==true)
        compteur++;
    if(minuscule(pw)==true)
        compteur++;
    if(PWisNumber(pw))
        compteur++;
    if(pw.length>=8)
        compteur++;
    console.log(pw , " le compteur est : ", compteur);
    if(compteur>3){
        var msgMail2="le mot de passe fort";
        console.log(msgMail2);
        document.getElementById("RepPass2").innerHTML= msgMail2;
        document.getElementById("idPW").style.backgroundColor = "red";
    }
        
    else if(compteur==2 || compteur==3){
        var msgMail2="le mot de passe moyenne";
        console.log(msgMail2);
        document.getElementById("RepPass2").innerHTML= msgMail2; 
        document.getElementById("idPW").style.backgroundColor = "green";
    }
        
    else if(compteur==1){
        var msgMail2="le mot de passe faible";
        console.log(msgMail2);
        document.getElementById("RepPass2").innerHTML= msgMail2; 
        document.getElementById("idPW").style.backgroundColor = "yellow";
    }
        


}
  

function PWisNumber(pw){
    var test = false;
    for(i=0; i< pw.length; i++){
        if(!isNaN(pw.charAt(i))){           //if the string is a number, do the following
            test= true;
            break;
        }        
    }
    if(test==true)
        return true;
    else
        return false;
}
function minuscule(pw){
    var test= false;
    for( i=0 ; i< pw.length; i++){       
        if(pw.charAt(i)===pw.charAt(i).toLowerCase()){                        
            test=true;
            break;
        }
    }
    if(test==true)
        return true;
    else
        return false;
}

function majuscule(pw){
    var test= false;
    for( i=0 ; i< pw.length; i++){       
        if(pw.charAt(i)===pw.charAt(i).toUpperCase()){                        
            test=true;
            break;
        }
    }
    if(test==true)
        return true;
    else
        return false;
}

 /* 
 dans l'input on ajoute oninput="test()" pour faire la connexion avec la fonction
 
 function test(){
    var a = document.getElementById("idPassword").value;
    document.getElementById("res").innerHTML = a ;*/
  