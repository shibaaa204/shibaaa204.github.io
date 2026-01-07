function showProfile() {
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value.trim() || "shibaaa204";
  usernameInput.value = username; 

  const profileDiv = document.getElementById('profile');
  profileDiv.innerHTML = `
    <div class="profile">
      <img src="https://github.com/${username}.png" alt="Avatar" class="avatar">
      <div class="stats">
        <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=${username}&layout=compact&custom_title=${username}&hide_border=true&bg_color=161b22&title_color=58a6ff&text_color=c9d1d9" alt="Top Languages">
      </div>
    </div>
  `;
}

window.onload = showProfile;

document.getElementById('username').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        showProfile();
    }
});