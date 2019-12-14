import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

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
    text-transform: uppercase;
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

export const ContainerForm = styled.div`
  width: 900px;
  margin: 0 auto;

  a {
    padding: 10px 40px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #ccc;
    margin-right: 10px;
  }
`;

export const MyForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;

  > label {
    margin-left: 5px;
    align-self: flex-start;
  }

  label {
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: bold;
    text-transform: uppercase;
  }

  input:nth-of-type(1) {
    margin-bottom: 15px;
  }

  input {
    padding: 0.75em;
    width: 840px;
    height: 45px;
    border-radius: 4px;
    border: solid 1px #ddd;
  }
`;

export const NumberInputs = styled.div`
  display: grid;
  margin-top: 20px;
  margin-left: 10px;
  grid-gap: ${props => (props.columns ? '5px' : '10px')};
  grid-template-columns: ${props =>
    props.columns ? '208px 208px 208px 208px' : '275px 275px 275px'};

  input {
    max-width: ${props => (props.columns ? '198px' : '269.3px')};
    margin-top: 5px;
  }

  span {
    text-transform: lowercase;
  }

  input[class='gray'] {
    background: #f5f5f5;
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin: 30px auto 0;

  span {
    font-weight: bold;
    font-size: 18px;
  }

  button {
    background: #ee4d64;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;

    &[disabled] {
      opacity: 0.35;
      cursor: not-allowed;
    }
    &[disabled]:hover {
      opacity: 0.35;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
