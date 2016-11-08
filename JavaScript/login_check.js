var form = document.forms.loginForm;
function md5(msg){
  msg = hex_md5(msg);
  return msg;
}
function showMessage(show){
  var node = document.getElementById('errorMsg');
  var arr = show?'visible':'hidden';
  node.style.visibility = arr;
}
function disableSumitBtn(disabled){
  form.loginBtn.disabled = !!disabled;
}
function errorInput(node){
  node.parentNode.parentNode.classList.add("error");
}

function resetInput(node){
  node.parentNode.parentNode.classList.remove("error");
}
form.account.addEventListener(
  'invalid',function(event){
    event.preventDefault();
    var input = form.account;
    errorInput(input);
  }
);
form.account.addEventListener(
  'input',function(event){
    event.preventDefault();
    var input = form.account;
    resetInput(input);
    showMessage(false);
  }
);
form.password.addEventListener(
  'invalid',function(event){
    event.preventDefault();
    var input = form.password;
    errorInput(input);
  }
);
form.password.addEventListener(
  'input',function(event){
    event.preventDefault();
    var input = form.password;
    resetInput(input);
    showMessage(false);
  }
);
form.addEventListener(
  'submit',function(event){
    var password = form.password;
    msg = password.value;
    //使用md5进行加密
    password.value = md5(msg);
    disableSubmitBtn(true);
  }
)
