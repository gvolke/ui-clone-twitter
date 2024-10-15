import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  /*Margin 0 pra cima e pra baixo e pra esquerda e direita auto. É um jeito de centralizar componentes */
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;
