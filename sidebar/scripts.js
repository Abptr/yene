// Add dynamic items to the above and below lists
function populateSidebar() {
  const aboveList = document.getElementById('aboveList').querySelector('.sidelist');
  const belowList = document.getElementById('belowList').querySelector('.sidelist');

  // Example items for the "above" list
  const aboveItems = ['Contract A', 'Contract B', 'Contract C'];
  aboveItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => alert(`You clicked on ${item}`)); // Add event listener
    aboveList.appendChild(li);
  });

  // Example items for the "below" list
  const belowItems = ['Contract X', 'Contract Y', 'Contract Z'];
  belowItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => alert(`You clicked on ${item}`)); // Add event listener
    belowList.appendChild(li);
  });
}

// Populate the sidebar on page load
document.addEventListener('DOMContentLoaded', populateSidebar);
