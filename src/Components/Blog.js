import React from 'react';
import { Grid, Cell } from 'react-mdl';
import styled from 'styled-components';


const Spacer=styled.div`
  padding-left: 2vw;
`
const Article1 = () => (

      <div>
         <Grid >
            <Cell col={6}>
                <h3> Hey! Im Tari </h3>
                <p>
                    I am a frontend-developer a compendium of the things I have learned and created, and anything else I want to write about.
                </p>
            </Cell>
         </Grid>
     </div>

)
const Wrap=styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1em;
  background-color: #c7ebea;
`

const Primary=styled.div`
  max-width: 670px;
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
     <div className="container">
         <div className= "blog">
                    <Wrap>
                        <Primary>
                            <Spacer>
                            <Block><Article1/></Block>
                            </Spacer>
                        </Primary>
                    </Wrap>
           </div>
     </div>
  );
}

export default Blog;
