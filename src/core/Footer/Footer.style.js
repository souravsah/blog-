import styled from "styled-components"

export const Footercss = styled.ul`
display:flex;
height:50px;
background-color:#131B27;

    padding:5px 42%;
    width:100vw;
li{
    margin:5px;
    color:#ccc;
    // background-color:#ccc;
}
li:hover{
cursor:pointer;
}
@media(max-width:350px){
    padding:5px 33%;
}
`