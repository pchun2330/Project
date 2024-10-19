if (localStorage.getItem("me")) {
  var me = JSON.parse(localStorage.getItem("me"));
  alert('hello, ' + me.name + ' (' + me.age + ')');
}

function save()
{
  var name = document.querySelectorAll('input')[0].value;

  var age = document.querySelectorAll('input')[1].value;

  var me = {
    name: name,
    age: age
  };

  localStorage.setItem("me", JSON.stringify(me));

  alert('saved');
}