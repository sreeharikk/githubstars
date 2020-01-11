import styled from "styled-components";

const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
        img{
          width: 100px;
          height: 100px;
          margin-right: 5px;
        }
      }
      li:first-child {
        border-top: 1px solid #EAEAEA;
      }
    }
`;

export default UsersWrapper;