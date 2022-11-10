import styled from "styled-components"

export const Navbarcss = styled.div`
color:#ccc;
display :flex;
justify-content:space-between;
height:60px;
text-align:center;
align-items:center;
background-color:#131B27;
padding:0px 10px;
@media(max-width:350px){
    display:flex;
    flex-direction:column;
    height:90px;
}
`
export const Logo = styled.div`
// padding:10px 10px;
cursor:pointer;
@media(max-width:300px){
    display:flex;
    justify-content:space-between;
    width:100vw;
    height:50px;
    padding:10px 5px;
    h2{
        width:100vw;
    }
}
`
export const Title =styled.div`
ul{
    display:flex;
    li{
        border-radius:5px;
        width:100px;
        padding:10px 5px;
        margin-left:5px;
        cursor:pointer;
    }
    li:hover{
        background-color:#ccc;
        color:black;
    }
    @media(max-width:350px){
        ul{
            flex-direction:column;
            li{
                display:block;
                padding:0;
            }
        }
    }
}
`
export const Ham = styled.li`
display:none;
@media(max-width:350px){
    display:block;
}
`