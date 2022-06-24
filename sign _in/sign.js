const submit = document.getElementById('btn');
submit.addEventListener('click', addUsers)

let  user = []
 
function addUsers (e) {
    e.preventDefault()
    let users = {
         first_name:  document.getElementById('fname').value,
         second_name = document.getElementById('sname').value,
         last_name = document.getElementById('lname').value,
         dateofbirth = document.getElementById('dob').value,
         email = document.getElementById('email').value,
        phone_contact = document.getElementById('contact').value,
    }
    user.push(users);  

    console.log(user[])

    function postData(user) {
        fetch('  http://localhost:3000/users' {
            method: 'POST',
            headers: {
             'Content-Type' : 'application/json'
            },
            body:JSON.stringify(user)
    })
    }
    }




