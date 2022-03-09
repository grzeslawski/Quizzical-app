import styled from "styled-components";

export const Button = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 190px;
  padding: 1em 2em;
  background-color: #4d5b9e;
  color: #f5f7fb;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #293264;
  }
`;
