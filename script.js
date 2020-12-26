console.log("Hello");
showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click",function(){
    let addTitle = document.getElementById("addTitle");
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    
    if(notes == null || title == null){
        notesObj = [];
        
    }
    else{
        notesObj = JSON.parse(notes);
     
    }
    let obj = {
        title:  addTitle.value,
        text:   addText.value
    }
    notesObj.push(obj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    
    addText.value = "";
    addTitle.value = "";
    console.log(notesObj);
    showNotes();
})

//function to show the notes from localStorage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element,index){
        
        html += `
        <div class="fuck my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.text}.</p>
          <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Notes</button>
        </div>
      </div>
        
        `
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = "<h3>No notes added yet</h3>"
    }
}






// let deleteBtn = document.getElementById("deleteBtn");

// deleteBtn.addEventListener("click",function(){
//     console.log("click",this.index);
//     deleteNote(this.index);
// })

//function to delete a note

function deleteNote(index){
    console.log('I am deleting ',index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}



let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    // console.log('Input event fired');
    let inputVal = search.value;
    

    let noteCards = document.getElementsByClassName('fuck');
    // console.log(noteCards)
    Array.from(noteCards).forEach(function(element){
        console.log(element);
        let cardText = element.getElementsByTagName('p')[0].innerText;
 
        console.log(cardText);
       if(cardText.includes(inputVal)){
           element.style.display = "block";
       } 
       else{
           element.style.display = "none";
       }
     })
 })