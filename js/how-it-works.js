// Image paths for student and company steps
const studentImages = [
    "img/mobile0.png",
    "img/mobile1.png",
    "img/mobile2.png",
    "img/mobile3.png",
    "img/assss.png",
    "img/mobile5.png",
  ];
  
  const companyImages = [
    "img/mobile0.png",
    "img/comp1.png",
    "img/comp2.png",
    "img/comp3.png",
    "img/comp4.png",
    "img/comp5.png",
  ];
  
  let studentIndex = 0;
  let companyIndex = 0;
  
  // Function to change the active step
  function changeStep(index, type) {
    const steps = document.querySelectorAll(`#${type}Steps .step`);
    document.getElementById(`${type}Image`).src = type === 'student' ? studentImages[index] : companyImages[index];
    
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");
    
    // Update the current index
    if (type === 'student') {
      studentIndex = index;
    } else {
      companyIndex = index;
    }
  }
  
  // Auto-rotate through steps
  function autoChangeSteps() {
    setInterval(() => {
      studentIndex = (studentIndex + 1) % studentImages.length;
      companyIndex = (companyIndex + 1) % companyImages.length;
      
      changeStep(studentIndex, 'student');
      changeStep(companyIndex, 'company');
    }, 1700);
  }
  
  // Initialize the auto-rotation
  document.addEventListener('DOMContentLoaded', function() {
    autoChangeSteps();
  });
