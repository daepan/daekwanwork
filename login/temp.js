var email=document.querySelector('#email');
var pwd=document.querySelector('#pwd');
var pwd_check=document.querySelector('#pwd_check');
var student_number=document.querySelector('#student-number');
var major=document.querySelector('#major');
var phone_number=document.querySelector('#phone-number');
var submit=document.querySelector('#check');
var cancel=document.querySelector('#cut');
var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

student_number.addEventListener('input',function(){
    if(!(student_number.value.length > 9 && student_number.value.length < 11)){
        major.value = '';
    } else {
        let standard_st = /\d{4}(\d{3})\d{3}/;
        let majornum = standard_st.exec(student_number.value)[1];
        switch (majornum) {
            case '120': 
                major.value = '기계공학부';
                break;
            case '136':
                major.value = '컴퓨터공학부';
                break;
            case '140':
                major.value = '메카트로닉스학부';
                break;
            case '151':
                major.value = '디자인건축공학부';
                break;
            case '161':
                major.value = '전기전자통신공학부';
                break;
            case '174':
                major.value = '에너지신소재화학공학부';
                break;
            case '180':
                major.value = '산업경영학부';
                break;
            default:
                major.value = '';
        }
    }
});


    submit.addEventListener('submit',function(){
        if(email==""||pwd==""||pwd_check==""||student_number==""||phone_number==""){
            alert("빈칸을 입력하여 주십시오.");
          }else if(pwd!=pwd_check){
            alert("패스워드가 서로 다릅니다.");
          }else if(email!=regExp){
            alert("이메일 형식이 알맞지 않습니다.")
          }
          else{
            alert("가입완료");
          }
        });

        