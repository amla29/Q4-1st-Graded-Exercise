/*
 to respond to the submit button
*/
function solve(){
    // access the form defined in index and create a form data object using FormData()
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
     // get the name of the celebrant
    console.log(formData.get("name"));
    const name = formData.get('name');
  
    // get and checks the gender
    console.log(formData.get('gender'));
    let gender = formData.get('gender');

  
     // Determine the pronoun
    let pronoun = gender === "male" ? "he's" : gender === "female" ? "she's" : "they're";

    // Happy Birthday Song
    const happyBirthdaySong = [
      "Happy", "birthday", "to", "you.",
      "Happy", "birthday", "to", "you.",
      "Happy", "birthday", "dear", name + ".",
      "Happy", "birthday", "to", "you!"
     ];

    // Jolly Good Fellow Song
       const goodFellowSong = `For ${pronoun} a jolly good fellow. For ${pronoun} a jolly good fellow. For ${pronoun} a jolly good fellow, which nobody can deny!`;

    console.log("Happy Birthday Song:", happyBirthdaySong);
    console.log("Jolly Good Fellow Song:", goodFellowSong);
  
}

  // PLEASE STUDY THE CODES BELOW, BUT DO NOT CHANGE ANYTHING 

  // this function will create the needed input fields and corresponding Going checkboxes for the number of expected guests

  
  // A quick data dump on Output div to show users input on the browser.
  function printFormData() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2> Output <h2>';
    for (let [key, value] of formData.entries()){
      outputDiv.innerHTML += `${key}: ${value} <br>`;
    }
    const myData = Object.fromEntries(formData.entries());
    console.log(myData)
    console.log(formData.entries())
  }
