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