<!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>

      <script language="javascript">
      var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      var email = document.getElementById("email");

      if(email.value == 0) {
           alert("이메일을 입력해 주세요");
           email.focus();
           return false;
       }
    </script>

  </body>
</html>
