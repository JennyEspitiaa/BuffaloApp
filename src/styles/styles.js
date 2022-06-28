import styled from "styled-components";
import { Form, Field } from "formik";

/* colors:

    main-bg: #1F233E
    white: #FFFFFF
    gray: #9C9C9C
    aqua: #33ccff
    blue: #2E3562*/

/* fonts:
        font-family: 'Racing Sans One', cursive; 
        font-family: 'Raleway', sans-serif; */

export const IntroDiv = styled.div`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  }
`;

export const LogoImg = styled.img`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
  }
`;
export const AppName = styled.p`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    font-family: "Racing Sans One", cursive;
    color: #ffffff;
    font-size: 25px;
  }
`;

// WORKOUT SCREEN

export const WorkoutImg = styled.img`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const WorkoutTitle = styled.p`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    font-weight: 600;
    margin-top: 5%;
  }
`;

export const WokoutPrg = styled.p`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 16px;
    color: #ffffff;
    font-weight: 200;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 2%;
  }
`;

export const UlSlide = styled.ul`
@media screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}
`

export const FirstLi = styled.li`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 50px;
    height: 12px;
    background-color: #2be7e8;
    border-radius: 50px;
    color:#2BE7E8;
    font-size: 0px;
  }
`;

export const OthersLi = styled.li` 
@media screen and (min-width: 320px) and (max-width: 600px) {
    width: 15px;
    height: 12px;
    border-radius: 50px;
    background-color: #2BE7E8;
    color:#2BE7E8;
    font-size: 0px;
}
`

export const SecondLi = styled.li` 
    @media screen and (min-width:320px) and (max-width:600px ){
        width: 30%;
    background-color: #33ccff;
    color:#33ccff;
    font-size: 0px;
    }
`

export const ThirdLi = styled.li` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 30%;
    background-color: #2be7e8;
    color:#33ccff;
    font-size: 0px;
}
`

export const BtnNextOne = styled.button`
@media screen and (min-width:320px) and (max-width:600px ){
    width: 70%;
    border:none;
    background-color: #33ccff;
    color:white;
    border-radius: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    padding: 10px;
    margin-top: 8%;
    text-shadow: 3px 2px 4px rgba(0,0,0,0.5);
    font-size: 16px;
    cursor: pointer;
}
`

// SIGN IN

export const LogoBtn = styled.img` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 40%;
    display: flex;
    margin: 0 auto;
    margin-top: 15%;
}
`

export const SignInText = styled.p` 
@media screen and (min-width:320px) and (max-width:600px ){
    font-size: 25px;
    color:#FFFFFF;
    font-weight: 300;
    text-align: center;
    margin-top: 8%;
}
`
export const FormSignIn = styled(Form)` 
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
    margin: 0 auto;
    margin-top: 8%;
`

export const EmailInput = styled(Field)` 
@media screen and (min-width:320px) and (max-width:600px ){
    color: #FFFFFF;
    font-size: 12px;
    padding: 15px;
    border: none;
    border-radius: 50px;
    background-color: #2E3562;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: #9c9c9c;
        font-size:14px;

    }
}
`

export const PasswordInput = styled(Field)` 
@media screen and (min-width:320px) and (max-width:600px ){
    color: #FFFFFF;
    font-size: 12px;
    padding: 15px;
    border: none;
    border-radius: 50px;
    background-color: #2E3562;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: #9c9c9c;
        font-size:14px;

    }
}
`

export const BtnSignIn = styled.button` 
    @media screen and (min-width:320px) and (max-width:600px ){
        width: 90%;
    border:none;
    background-color: #33ccff;
    color:white;
    border-radius: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    padding: 10px;
    margin-top: 8%;
    text-shadow: 3px 2px 4px rgba(0,0,0,0.5);
    font-size: 16px;
    cursor: pointer;
    }
`

export const ForgotPass = styled.p` 
@media screen and (min-width:320px) and (max-width:600px ){
    font-size: 12px;
    color:#9C9C9C;
    text-align: center;
    margin-top: 5%;
}
` 
export const SingInWith = styled.p` 
@media screen and (min-width:320px) and (max-width:600px ){
    color: #FFFFFF;
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    margin-top: 20%;
}
`

export const IconsMedia = styled.ul` 
@media screen and (min-width:320px) and (max-width:600px ){
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    gap: 20px;
    color: #9c9c9c;
}
`

export const GoogleSignIn = styled.img` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 5%;
    cursor:pointer;
}
`

export const FacebookSignIn = styled.img` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 5%;
    cursor:pointer;
}
`

export const QuestionSignIn = styled.p` 
@media screen and (min-width:320px) and (max-width:600px ){
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 300;
    text-align: center;
    margin-top: 25%;
}
`

// SIGN UP

export const FormSignUp = styled(Form)` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
    margin-top: 5%;
}
`

export const FullNameInput = styled(Field)` 
    @media screen and (min-width:320px) and (max-width:600px ){
    color: #FFFFFF;
    font-size: 12px;
    padding: 15px;
    border: none;
    border-radius: 50px;
    background-color: #2E3562;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: #9c9c9c;
        font-size:14px;

    }
    }
`
export const EmailSignUp = styled(Field)` 
    @media screen and (min-width:320px) and (max-width:600px ){
        color: #FFFFFF;
    font-size: 12px;
    padding: 15px;
    border: none;
    border-radius: 50px;
    background-color: #2E3562;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: #9c9c9c;
        font-size:14px;

    }
    }
`

export const PhoneNumberInput = styled(Field)` 
    @media screen and (min-width:320px) and (max-width:600px ){
        color: #FFFFFF;
    font-size: 12px;
    padding: 15px;
    border: none;
    border-radius: 50px;
    background-color: #2E3562;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: #9c9c9c;
        font-size:14px;

    }
    }
`

export const PassWordSignUp = styled(Field)` 
    @media screen and (min-width:320px) and (max-width:600px ){
        color: #FFFFFF;
    font-size: 12px;
    padding: 15px;
    border: none;
    border-radius: 50px;
    background-color: #2E3562;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: #9c9c9c;
        font-size:14px;
    }
    }
`

export const PassWordSignUp2 = styled(Field)` 
    @media screen and (min-width:320px) and (max-width:600px ){
        color: #FFFFFF;
    font-size: 12px;
    padding: 15px;
    border: none;
    border-radius: 50px;
    background-color: #2E3562;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: #9c9c9c;
        font-size:14px;
    }
    }
`

export const AllRead = styled.p`
 @media screen and (min-width:320px) and (max-width:600px ){
    color:#ffffff;
    font-weight: 300;
    font-size: 12px;
    display: flex;
    gap: 10px;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    margin-top: 3%;
}
`

export const BtnRegister = styled.button` 
     @media screen and (min-width:320px) and (max-width:600px ){
        width: 90%;
    border:none;
    background-color: #33ccff;
    color:white;
    border-radius: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    padding: 12px;
    margin-top: 10%;
    text-shadow: 3px 2px 4px rgba(0,0,0,0.5);
    font-size: 16px;
    cursor: pointer;
    }
`

export const OrSignIn = styled.p` 
    color: #FFFFFF;
    font-weight: 300;
    text-align: center;
    margin-top: 20%;
`


export const IconsMediaSignUp = styled.ul` 
@media screen and (min-width:320px) and (max-width:600px ){
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    gap: 20px;
    color: #9c9c9c;
}
`

export const GoogleSignUp = styled.img` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 5%;
    cursor: pointer;
}
`

export const FacebookSignUp = styled.img` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 5%;
    cursor: pointer;
}
`
