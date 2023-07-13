document.getElementById('add-medication-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var medicationName = document.getElementById('medication-name').value;
    var medicationDosage = document.getElementById('medication-dosage').value;
    var medicationNotes = document.getElementById('medication-notes').value;
  
    // Create new medication list item
    var medicationLi = document.createElement('li');
    medicationLi.innerHTML = `
      <div class="medication-info">
        <span class="medication-name">${medicationName}</span>
        <span class="medication-dosage">${medicationDosage}</span>
        <p class="medication-notes">Notes: ${medicationNotes}</p>
        <span class="reminder">⏰</span>
        <span class="completed-status">Incomplete</span>
      </div>
    `;
  
    // Append the new medication list item to the medication list
    document.getElementById('medication-list').appendChild(medicationLi);
  
    // Create new reminder list item
    var reminderLi = document.createElement('li');
    reminderLi.innerHTML = `
      <div class="medication-info">
        <label class="checkbox-label">
          <input type="checkbox" class="completed-checkbox">
          <span class="medication-name">${medicationName}</span>
          <span class="medication-dosage">${medicationDosage}</span>
          <p class="medication-notes">Notes: ${medicationNotes}</p>
        </label>
        <span class="completed-status">Incomplete</span>
      </div>
    `;
  
    // Append the new reminder list item to the reminder list
    document.getElementById('reminder-list').appendChild(reminderLi);
  
    // Clear the input fields
    document.getElementById('medication-name').value = '';
    document.getElementById('medication-dosage').value = '';
    document.getElementById('medication-notes').value = '';
  });
  
  document.getElementById('medication-list').addEventListener('change', function(event) {
    var checkbox = event.target.closest('.completed-checkbox');
    if (checkbox) {
      var listItem = checkbox.closest('li');
      var completedStatus = listItem.querySelector('.completed-status');
      completedStatus.textContent = checkbox.checked ? 'Completed' : 'Incomplete';
      
      var reminderListItem = document.querySelector(`#reminder-list li:nth-child(${listItem.dataset.index})`);
      if (reminderListItem) {
        var reminderCompletedStatus = reminderListItem.querySelector('.completed-status');
        reminderCompletedStatus.textContent = checkbox.checked ? 'Completed' : 'Incomplete';
      }
    }
  });
  
  document.getElementById('reminder-list').addEventListener('change', function(event) {
    var checkbox = event.target.closest('.completed-checkbox');
    if (checkbox) {
      var listItem = checkbox.closest('li');
      var completedStatus = listItem.querySelector('.completed-status');
      completedStatus.textContent = checkbox.checked ? 'Completed' : 'Incomplete';
      
      var medicationListItem = document.querySelector(`#medication-list li:nth-child(${listItem.dataset.index})`);
      if (medicationListItem) {
        var medicationCompletedStatus = medicationListItem.querySelector('.completed-status');
        medicationCompletedStatus.textContent = checkbox.checked ? 'Completed' : 'Incomplete';
      }
    }
  });
  