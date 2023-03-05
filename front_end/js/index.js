const url = 'https://api.npoint.io/d6f34835d78c362d3636';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const users = data.users;
    const usersList = users.map(user => `<li>${user.name}</li>`).join('');
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = `<ul>${usersList}</ul>`;
  })
  .catch(error => console.log(error));