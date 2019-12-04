import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  border-collapse: collapse;

  header {
    margin-left: 5px;
    padding-left: 5px;
    margin-top: 10px;

    strong {
      font-size: 16px;
      text-transform: uppercase;
    }
  }

  div + div {
    border-top: 1px solid #eee;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px 20px 10px;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }
`;
