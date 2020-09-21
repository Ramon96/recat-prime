import styled from 'styled-components';

const SliderComponent = styled.div`
  position:relative;
  width: 300px;
  margin: 30px auto;
  display: block;
  label{
    display: block;
    background: #eee;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    white-space: nowrap;
      &:before {
        position: absolute;
        right: 100%;
        margin-right: 5px;
        top: 0;
      }
      &:after {
        position: absolute;
        left: 100%;
        margin-left: 5px;
        top: 0;
      }
  }

   #toggle{
    appearance: none;
    background: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    outline: none;
    cursor: pointer;
    z-index: 100;
    ~.emoji:before {
      content: "😼";
      position: absolute;
      left: 0;
      top: 0;
      font-size: 40px;
      z-index: 1;
      transition: 0.2s;
    }

    &:checked{
       ~.emoji:before {
        content: "🐶";
        left: 100%;
        margin-left: -1em;
      }
    }
   }
`;




export default SliderComponent
