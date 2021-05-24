// Add your code here

const configurationObject =  {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
body: JSON.stringify({
    dogName: "beep",
    dogBreed: "bop"
})
}
fetch(`http://localhost:3000/dogs`, configurationObject).then(response=> response.json()).then(object => console.log(object)).catch(error => {alert("Bad Things");
 console.log(error.message)})

 

function submitData(a,b) {
    let obj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: a,
            email: b
        })
      }; 
     
     return fetch(`http://localhost:3000/users`, obj).then(response=> response.json()).then(object => document.body.innerHTML = (object["id"])).catch(error => document.body.innerHTML = error.message)
    }
 submitData(`bob`, `bill.com`)