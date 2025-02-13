function addScientist(){
    let person = prompt("Please enter your faviorite scientist:", "Issac Newton");
    if (person == null || person == "") {
        return;
    } else {
        let text = document.getElementById("favorite_scientist").innerHTML;
        if (text.length >0 ){
            text +=";";
        }
        text += person;

        document.getElementById("favorite_scientist").innerHTML = text;
        window.scrollBy(0, 50);
    
  }
  
}