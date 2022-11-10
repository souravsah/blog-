import styled from "styled-components"

export const Postcss = styled.li`
display:flex;
img{
    width:3vw;
    height:3vw;
    text-align:center;
    border-radius:50%;
}
`
export const Postcss1=styled.div`
width:250px;
height:350px;
padding-left:10px;
padding-top:10px;
border-radius:10px;
border:1px solid #ccc;
margin:10px;
li{
    margin:2px;
}
&:hover{
    box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);
    transform: translateY(-1vmax);
    cursor:pointer;
}
`
export const Postcss2=styled.li`
width:100px;
height:100px;
img{
    height:250px;
    width:220%;
}
@media(max-width:300px){
    img{
        height:250px;
        width:190px;
    }   
}
`