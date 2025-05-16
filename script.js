document.getElementById("voting-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form refresh

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "" || age === "") {
    alert("Please enter valid details");
    return;
  }

  // Create a Promise
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
