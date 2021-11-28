const urlGet = "http://127.0.0.1:3000/bruh";

// get
const optionsGet = {
  method: "GET"
}

let getFromExpress = async () => {
  let fromServer = await fetch(urlGet, optionsGet)
  .then(response => {
    return response.json();   // or "response.text();"
  })
  .then(data => {
    console.log(data);
  });
}

getFromExpress();

// post
const urlPost = "http://127.0.0.1:3000/process_post";
const inputData = document.querySelector("[input-data]");
const inputButton = document.querySelector("[input-button]");

let readInputField = (InputField) => {
  return {bixby: InputField.value};
}

const optionsPost = {
  method: "POST",
  body: JSON.stringify(readInputField(inputData)),
  headers: {
    "Content-Type": "application/json"
  }
}

let postToExpress = async () => {
  let toServer = await fetch(urlPost, optionsPost)
    .then(response => {
      response.json();
    })
    .then(data => {
      console.log(data);
    });
}

inputButton.addEventListener("click", () => {
  postToExpress();
});