import styled from 'styled-components'
import Image from '../../assets/40123.jpg'

const Background = styled.div`
  background-image: ${`url(${Image})`};
  background-size: cover;
  background-position: top;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  position: fixed;
  // background-color: #ff0000;
  top: 0;
`

export { Background }
