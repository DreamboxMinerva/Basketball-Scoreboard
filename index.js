let homeStoreEl = document.getElementById("home-score")
let guestStoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function augmenteDeUn(){
  homeScore += 1
  homeStoreEl.textContent = homeScore   
}

function augmenteDeDeux(){
  homeScore += 2
  homeStoreEl.textContent = homeScore   
}

function augmenteDeTrois(){
  homeScore += 3
  homeStoreEl.textContent = homeScore   
}

function augmenteDeUnbis(){
  guestScore += 1
  guestStoreEl.textContent = guestScore   
}

function augmenteDeDeuxbis(){
  guestScore += 2
  guestStoreEl.textContent = guestScore   
}

function augmenteDeTroisbis(){
  guestScore += 3
  guestStoreEl.textContent = guestScore   
}


// Score de l'équipe Guest