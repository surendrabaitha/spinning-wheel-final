let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let sections = document.querySelectorAll('.number span');
let winner = document.querySelector('#winner');
let modalContent = document.querySelector('#modalContent');

let totalSections = sections.length;
let rotation = 0;

spinBtn.addEventListener('click', () => {
    let randomSpin = Math.ceil(Math.random() * 3600); // Random spin value
    rotation += randomSpin; // Accumulate total rotation
    wheel.style.transform = `rotate(${rotation}deg)`; // Apply rotation

    console.log(wheel.style.transform);
    

    setTimeout(() => {
        let finalRotation = rotation % 360; // Normalize rotation
        let sectionIndex = Math.floor((360 - finalRotation + 18) / (360 / totalSections)) % totalSections;
        let result = sections[sectionIndex].textContent;
        // winner.innerHTML = `${result}`; // Display the result
        modalContent.innerHTML = ` You could be celebrating your shaadi in ${result} `; // Display the result


 //  sparkales





setTimeout(()=>{
    // Show modal function
  function showModal() {
    document.getElementById("modalOverlay").style.display = "flex";
  }

  // Close modal function
  function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
  }

  // Open modal when page loads
   showModal();


   // do this for 30 seconds
var duration = 3 * 1000;
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 3,
    angle: 60,
    spread: 35,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 3,
    angle: 120,
    spread: 35,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());


}, 500)
// modal for congrational
// Show the modal using Bootstrap 5's Modal class


    }, 5000); // Wait for the animation to finish
});



