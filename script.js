// Plus Button Modals
document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.getElementsByClassName("plus-button");

  for (let index = 0; index < plusButtons.length; index++) {
    const element = plusButtons[index];

    element.addEventListener("click", () => {
      const modals = document.getElementsByClassName("modal");
      for (let index = 0; index < modals.length; index++) {
        const displayValue = modals[index].style.display;
    
        if (!displayValue || displayValue === "none") {
            modals[index].style.display = "inline-block";
        } else if (displayValue === "inline-block") {
            modals[index].style.display = "none";
        }
      }
    })
  }

  const grayModal = document.getElementById("grayModal");
  const customCondition = document.getElementById("customConditionModal");

  grayModal.addEventListener('click', () => {
    grayModal.style.display = "none";
    document.getElementById("conditionsModal").style.display = "none";
    customCondition.style.display = "none";
  })

  
  //Custom Condition Button Modal
  const customButton = document.getElementById("customButton");

 customButton.addEventListener("click", () => {
    const displayValue = customCondition.style.display;

        if (!displayValue || displayValue === "none") {
            customCondition.style.display = "inline-block";
        } else if (displayValue === "inline-block") {
            customCondition.style.display = "none";
        }
      })

})