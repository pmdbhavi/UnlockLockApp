import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-image: linear-gradient(#161617, #3c2940);
`

export const Image = styled.img`
  height: 50%;
  width: 40%;
`

export const Heading = styled.p`
  color: white;
  font-family: 'Roboto';
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: white;
  width: 70px;
  padding: 10px;
  border-width: 0px;
  border-radius: 10px;
`
