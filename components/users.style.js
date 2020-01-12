import styled from "styled-components";

const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    h1{
      text-align: center;
      font-size: 36px;
    }
    .form-fields{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 20px 0;
      input{
        width: 200px;
        height: 35px;
        line-height:25px;
        margin-right: 5px;
      }
      .button {
        background-color: #4c7daf;
        border: none;
        color: white;
        padding: 7px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
      }
      .error{
        color: #FF0000;
        padding: 8px 0;
      }
    }
    ul{
      list-style: none;
      display: flex;
      flex-direction: column;      
      width: 600px;
      margin: 0 auto;
      li{
        display: flex;
        flex-direction: row;
        padding: 20px 0;
        border-bottom: 1px solid #EAEAEA;
        font-size: 14px;
        img{
          width: 100px;
          height: 100px;
          margin-right: 5px;
        }
        .right{
          display: flex;
          flex-direction: column;
          span{
            padding: 3px 0;
            i{
              margin-right: 3px;
            }
          }
          a{
            olor: #186cb9;
            font-size: 14px;
            font-weight: bold;
            margin-right: 7px;
            text-decoration: none;
          }
        }
      }
      li:first-child {
        border-top: 1px solid #EAEAEA;
      }
    }
`;

export default UsersWrapper;