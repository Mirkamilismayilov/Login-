
let ad = document.querySelector("#ad");
let parol = document.querySelector("#pass");
let mail = document.querySelector("#mail");
const btn = document.querySelector("#btn");

const form = document.querySelector("#form");

let obj = {
    ad: "" , 
    parol: "" ,
    mail: "" 

}


form?.addEventListener("submit" , (e)=>{
    e.preventDefault();
});


btn?.addEventListener("click" , () =>  {
    obj.ad = ad.value;
    obj.parol = parol.value;
    obj.mail = mail.value;

    
localStorage.setItem("Objdata" , JSON.stringify(obj))
    // localStorage.setItem("istifadecinin adi" , ad)
    // localStorage.setItem("istifadecinin parolu" , parol)
    // localStorage.setItem("istifadecinin maili" , mail)

})

let girisAd = document.querySelector("#girisAd");
let girispass = document.querySelector("#girpass");
let girisbtn = document.querySelector("#girisbtn");



let form1 = document.querySelector("#form1");

form1.addEventListener("submit" , (event)=>{
    event.preventDefault();
});

let girisobj = JSON.parse( localStorage.getItem("Objdata"));


console.log(girisobj);

girisbtn?.addEventListener("click" , ()=>{
    girisAd = girisAd.value;
    girispass = girispass.value;
    console.log(girisAd , girispass );

    if (girisAd == girisobj.ad && girispass == girisobj.parol   ) {
        console.log("success");
        girisbtn.setAttribute("href" ,"Giris.html")
    }else{
        girisbtn.setAttribute("href" ,"Wrong.html")
        console.log("Parol sehvdi");
    }
})

