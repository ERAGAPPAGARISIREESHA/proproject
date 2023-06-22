// Store the maximum number of registrations per day for each center
const maxRegistrationsPerDay = {
  center1: 10,
  center2: 10,
};

// Store the current number of registrations for each center
let registrations = {
  center1: 0,
  center2: 0,
};

function showCenters() {
  const regionSelect = document.getElementById('region');
  const selectedRegion = regionSelect.value;
  
  // Hide all centers
  const centers = document.getElementsByClassName('center');
  for (let i = 0; i < centers.length; i++) {
    centers[i].style.display = ' ';
  }
  
  // Show centers for the selected region
  if (selectedRegion) {
    const regionCenters = document.getElementsByClassName(selectedRegion);
    for (let i = 0; i < regionCenters.length; i++) {
      regionCenters[i].style.display = 'block';
    }
    
    document.getElementById('centers').style.display = 'block';
  } else {
    document.getElementById('centers').style.display = 'none';
  }
  
  // Hide registration form and success message
  document.getElementById('registration-form').style.display = 'none';
  document.getElementById('success-message').style.display = 'none';
}

function register(center) {
  // Check if the center has reached the maximum number of registrations
  if (registrations[center] >= maxRegistrationsPerDay[center]) {
    alert('Sorry, this center has reached its maximum registrations for today.');
    return;
  }
  
  // Show the registration form
  document.getElementById('registration-form').style.display = 'block';
  
  // Update the registration details
  document.getElementById('registration-details').textContent = `Center: ${center}`;
  
  // Store the selected center in a hidden input field
  const centerInput = document.createElement('input');
  centerInput.type = 'hidden';
  centerInput.name = 'center';
  centerInput.value = center;
  
  // Add the hidden input field to the registration form
  document.getElementById('registration-form').appendChild(centerInput);
}

function submitRegistration() {
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();
  const centerInput = document.querySelector('#registration-form input[name="center"]');
  const center = centerInput.value;
  
  if (!name) {
    alert('Please enter your name.');
    return;
  }
  
  // Perform the registration (you can replace this with your own logic)
  // Here, we simply increment the registration count for the selected center
  registrations[center]++;
  
  // Show the success message
  document.getElementById('success-message').style.display = 'block';
  
  // Update the registration details in the success message
  document.getElementById('registration-details').textContent = `Name: ${name}\nCenter: ${center}`;
  
  // Clear the name input
  nameInput.value = '';
  
  // Hide the registration form
  document.getElementById('registration-form').style.display = 'none';
}