(() => {
  let getButtons = document.querySelectorAll('.getButtons'),
    deleteButton = document.querySelectorAll
  function fetchData(){
    let url = "/api/" + this.id;

    fetch(url)
    then((resp) => resp.json())
    .then((data) => {
      console.log(data);;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  function deleteRecord(){
    let url = "api/" + this.id;

    fetch(url {method : 'delete'})
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getButtons.forEach(button => button.addEventListener('click', fetchData));
  deleteButton.addEventListener('click' deleteRecord, false)

})();
