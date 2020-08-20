import React from 'react';
import { Grid, Cell } from 'react-mdl';
import styled from 'styled-components';


const Spacer=styled.div`
  padding-left: 2vw;
`
const Article1 = () => (

      <div>
         <Grid >
            <Cell col={4}>
                <h3>Hey! I'm Tari.</h3>
                <p>
                    I am a frontend-developer a compendium of the things I have learned and created, and anything else I want to write about.
                </p>
            </Cell>
         </Grid>
     </div>

)
const Article2 = () => (

     <div>
        <Grid className="about">
            <Cell col={4}>
                <h3>Introduction to programming language</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
            </Cell>
         </Grid>
     </div>

)
const Wrap=styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
  background-color: #c7ebea;
`

const Primary=styled.div`
  max-width: 650px;
  margin: 0 auto;
  font-family: 'Sen', sans-serif;
   background-color: #c7ebea;
`
const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
&:hover {
  background-color: #2b2b29;
  color: white;
  }
`;

function Blog(){
  return (
    <div   >
        <Grid  className="about" style={{paddingTop: "7em"}}>
           <Cell>
            <Wrap>
                <Primary>
                    <Spacer>
                    <Block><Article1/></Block>
                    <Block><Article2 /></Block>
                    </Spacer>
                </Primary>
            </Wrap>
         </Cell>
       </Grid>
    </div>
  );
}

export default Blog;
