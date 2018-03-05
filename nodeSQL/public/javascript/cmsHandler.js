(() => {
  //cms handler stub
  console.log('cms handler loaded');

  let submitButton = document.querySelector('.add-data'),
      targetform = document.querySelector('form');

  function addRecord(event) {
    event.preventDefault(); // stop the default from happening
    // debugger;

    var formdata= new FormData(targetform);
        strData = {};

    for (var [key, value] of formdata.entries()) {
      console.log(key, value);

      strData[key] = value;
    }

    // run a fetch and do a post
    let url = "/api";
    fetch(url, {
      method : 'post',
      headers : {
        'Accept' : 'application/json, text-plain, */*', // esas estrellitas a saber q ondas
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(strData)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(err => {
      console.log(error);
    });
  }

  submitButton.addEventListener('click', addRecord, false); // you can add false
})();
