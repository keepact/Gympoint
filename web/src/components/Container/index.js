import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${props => (props.large ? '1440px' : '1200px')};
  width: ${props => (props.small ? '700px' : 'auto')};
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-radius: 4px;
  background: #fff;
  max-width: ${props => (props.large ? '1440px' : '1200px')};
  width: ${props => (props.small ? '700px' : 'auto')};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px auto 30px auto;

  button {
    width: 142px;
    height: 36px;
    border-radius: 4px;
    background-color: #ee4d64;
    color: #fff;
    font-weight: bold;
  }

  input {
    width: 237px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #dddddd;
    background-color: #ffffff;
    margin-left: 10px;

    &::placeholder {
      padding-left: 30px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr + tr {
    border-top: 1px solid #eee;
  }

  tr {
    color: #444;
    font-size: 16px;
  }

  thead th {
    text-align: left;
    padding: 40px 40px 0 40px;
    text-transform: uppercase;
  }

  tbody td {
    padding: 20px 20px 10px 40px;
  }

  div {
    display: flex;
    align-items: center;
    width: 50px;
    padding: 10px;
  }

  a {
    text-decoration: none;
    font-size: 15px;
  }

  button {
    font-size: 15px;
    border: 0;
    margin-left: 15px;
    color: #de3b3b;
  }
`;
