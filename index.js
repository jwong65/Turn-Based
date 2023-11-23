var pHealth = 15
let eHealth = 15
// Function to displayHealth in the HTML
function displayHealth(healthNumber, idname){
    let innerHealth = healthNumber
    document.getElementById(idname).textContent = healthNumber
}
// For testing purposes
displayHealth(pHealth, 'playerHealthInfo')

// Function to check if player health or enemy is dropped to 0 or below.
function gameOverHealth(){

}