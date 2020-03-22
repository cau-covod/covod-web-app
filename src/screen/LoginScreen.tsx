import React, { useEffect } from 'react';
import { useAuth } from '../provider/authentication-provider';
import LoginCard from '../components/login/loginCard'
import styled from 'styled-components'

const LoginScreen: React.FC = () => {
  const { login } = useAuth();

  const CenterFlex = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

  return (
    <CenterFlex>
      <div style={{height: "200px" }}/>
      <div style={{ width: "60%", height: "60%" }}>
        <LoginCard onConfirm={(username:string, password:string) => login(username, password)} />
      </div>
    </CenterFlex>
  )

};

export default LoginScreen;
