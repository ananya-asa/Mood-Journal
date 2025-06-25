


 
 
   let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    
   function saveEntry(){
    emoji=document.getElementById("myMood").value;
    description=document.getElementById("desc").value;
    a={
        mood:emoji,
        description:description,
        date:new Date().toISOString(),

    }
    entries.push(a)
    localStorage.setItem("moodEntries",JSON.stringify(entries) );
    document.getElementById("myMood").value = "";
    document.getElementById("desc").value = "";

   
}
 



function showEntries() {
  const container = document.getElementById('entries-container');
  let items = localStorage.getItem('moodEntries');
  if (!items) {
    container.innerHTML = "<p>No entries yet!</p>";
    return;
  }

  const entries = JSON.parse(items);

  
  let cardsHTML = '';

  entries.forEach((entry,index)=> {
    cardsHTML += `
      <div class="card mb-3" style="width: 18rem;">
        <img src="mood.png" class="card-img-top" alt="mood-image">
        <div class="card-body">
          <h5 class="card-title">${entry.mood}</h5>
          <p class="card-text">${entry.description}</p>
          <p class="card-text"><small>${new Date(entry.date).toLocaleString()}</small></p>
          <a href="#" class="btn btn-danger" onclick="deleteEntry(${index})">Delete</a>
        </div>
      </div>
    `;
  });

  
  container.innerHTML = cardsHTML;
}

showEntries();

function deleteEntry(index){
    let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    entries.splice(index,1);
    localStorage.setItem("moodEntries",JSON.stringify(entries) );

    showEntries();

}







