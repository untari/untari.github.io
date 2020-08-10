import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';


const Spacer=styled.div`
  padding-left: 2vw;
`

const Google = () => (

     <div>
            <h2>Hey! I'm Tari.</h2>
            <p>
                I am a frontend-developer a compendium of the things I have learned and created, and anything else I want to write about.
            </p>
     </div>

)
const Amazon = () => (

     <div>
      <h2>Introduction to programming language</h2>
   
   
     </div>

)
const Wrap=styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
`

const Primary=styled.div`
  max-width: 650px;
  margin: 0 auto;
  font-family: 'Sen', sans-serif;
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
    <div id="blog" >
      <Wrap>
          <Primary>
            <Spacer>

             <Block><Google/></Block>
            <Block><Amazon /></Block>

            </Spacer>
          </Primary>
      </Wrap>
    </div>
  );
}

export default Blog;
