$('#create').on('click', function(event)
{
  var name = $('#name').val().trim()
  var email = $('#email').val().trim()
  var password = $('#password').val().trim()
  var age = $('#age').val().trim()
  var height = $('#height').val().trim()
  var weight = $('#weight').val().trim()
  var gender = $('#gender').val().trim()

  database.ref('users').once('value', function(snap)
  {
    if (!snap.hasChild('0'))
    {
      database.ref('users/0').set(
      {
        name: name,
        email: email,
        password: password,
        age: age,
        height: height,
        weight: weight,
        gender: gender
      })
    }

    else
    {
      var newEmail = true;
      for (var i=0; i<snap.val().length; i++)
      {
        if (email === snap.val()[i].email)
        {
          newEmail = false;
          console.log("This email is already taken!")
        }
      }

      if (newEmail)
      {
        var userID = snap.val().length
        database.ref('users/'+userID).set(
        {
          name: name,
          email: email,
          password: password,
          age: age,
          height: height,
          weight: weight,
          gender: gender
        })
      }
    }  
  })
})