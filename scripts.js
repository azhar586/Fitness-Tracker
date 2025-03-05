// Profile Page Logic
const profileForm = document.getElementById("profileForm");
const profilePic = document.getElementById("profilePic");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const profilePicInput = document.getElementById("profilePicInput");

const savedProfilePic = document.getElementById("savedProfilePic");
const savedName = document.getElementById("savedName");
const savedEmail = document.getElementById("savedEmail");

// Load profile data from local storage when the page loads
if (profileForm) {
  window.onload = function() {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedProfilePic = localStorage.getItem("profilePic");

    if (storedName) {
      nameInput.value = storedName;
      savedName.textContent = `Name: ${storedName}`;
    }

    if (storedEmail) {
      emailInput.value = storedEmail;
      savedEmail.textContent = `Email: ${storedEmail}`;
    }

    if (storedProfilePic) {
      profilePic.src = storedProfilePic;
      savedProfilePic.src = storedProfilePic;
    }
  };

  // Save profile data to local storage
  profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const profilePicFile = profilePicInput.files[0];

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    savedName.textContent = `Name: ${name}`;
    savedEmail.textContent = `Email: ${email}`;

    if (profilePicFile) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const profilePicDataUrl = e.target.result;
        localStorage.setItem("profilePic", profilePicDataUrl);
        profilePic.src = profilePicDataUrl;
        savedProfilePic.src = profilePicDataUrl;
      };
      reader.readAsDataURL(profilePicFile);
    } else {
      savedProfilePic.src = profilePic.src;
    }
  });
}

// Exercise Tracker Logic
let totalCalories = 0;
const addedExercises = document.getElementById("addedExercises");
const totalCaloriesDisplay = document.getElementById("totalCalories");
const refreshExerciseDataBtn = document.getElementById("refreshExerciseDataBtn");

function addExercise(name, calories) {
  const listItem = document.createElement("li");
  listItem.textContent = `${name} - ${calories} kcal`;
  addedExercises.appendChild(listItem);

  totalCalories += calories;
  totalCaloriesDisplay.textContent = `Total Calories Burned: ${totalCalories} kcal`;
}

// Refresh Exercise Data
if (refreshExerciseDataBtn) {
  refreshExerciseDataBtn.addEventListener("click", function () {
    totalCalories = 0;
    addedExercises.innerHTML = "";
    totalCaloriesDisplay.textContent = "Total Calories Burned: 0 kcal";
  });
}

// Nutrition Tracker Logic
let totalProtein = 0;
let totalFat = 0;
let totalCarbs = 0;
const addedMeals = document.getElementById("addedMeals");
const totalMacrosDisplay = document.getElementById("totalMacros");
const refreshFoodDataBtn = document.getElementById("refreshFoodDataBtn");

function addMeal(name, protein, fat, carbs) {
  const listItem = document.createElement("li");
  listItem.textContent = `${name} - Protein: ${protein}g, Fat: ${fat}g, Carbs: ${carbs}g`;
  addedMeals.appendChild(listItem);

  totalProtein += protein;
  totalFat += fat;
  totalCarbs += carbs;
  
  totalMacrosDisplay.textContent = `Total Protein: ${totalProtein}g | Total Fat: ${totalFat}g | Total Carbs: ${totalCarbs}g`;
}

// Refresh Nutrition Data
if (refreshFoodDataBtn) {
  refreshFoodDataBtn.addEventListener("click", function () {
    totalProtein = 0;
    totalFat = 0;
    totalCarbs = 0;
    addedMeals.innerHTML = "";
    totalMacrosDisplay.textContent = "Total Protein: 0g | Total Fat: 0g | Total Carbs: 0g";
  });
}
