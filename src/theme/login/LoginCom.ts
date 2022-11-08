import styled from "styled-components";

export const LoginCom = styled.div`
p{
    margin: 0;
    padding: 0;
}
height: 100vh;
.container-fluid{
    height: 100vh;
    .row{
        height: 100vh;
    }
}
.info{
    padding: 32px;
    background: #151D72;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .profile{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 13px;
        p{
            text-align: center;
        }
    }
}
.formDiv{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login {
  width: 80%;
}

.form {
  background: #FFFFFF;
  border-radius: 10px;
  text-align: center;
}

.form input {
  outline: 0;
  width: 100%;
  background: #FFFFFF;
border: 1px solid #D0D5DD;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
  border-radius: 5px;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.form input:focus {
  background: #dbdbdb;
}

.form button {
  outline: 0;
  background:#2E3EA1;;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form button:active {
  background: #395591;
}

.form span {
  font-size: 40px;
  color: #4b6cb7;
  margin-bottom: 25px;
  display: block;
}

.form p.error {
  margin: 0 0 10px 10px;
  text-align: left;
  font-size: 10px;
  color: red;
}
}
`