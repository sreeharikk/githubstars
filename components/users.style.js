import styled from "styled-components";

const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    .form-fields{
      display: flex;
      justify-content: center;
      padding: 20px 0;
      input{
        width: 200px;
        height: 25px;
        line-height:25px;
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