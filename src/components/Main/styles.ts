import styled, { css } from "styled-components";
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /*O container vai crescer até 601px, mas fora disso ele não cresce. Não fica maior que 601px. O mínimo é uma comparação para pegar o menor valor entre dois valores.*/
  width: min(601px, 100%);

  /*Responsividade. Significa que a partir de 500px de largura as propriedades passadas dentro do media serão aplicadas */
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  /*Especificando que a barra do header deve ficar a cima de todos os outros elementos da tela */
  z-index: 2;
  /*Para o header ficar preso na parte de cima da tela */
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  /*8px de padding acima e abaixo do bottom menu. O padding da esquerda e da direita vai ser no mínimo 10px, mas pode ser maior se 10% da largura da viewport (10vw) for maior que 10px. Se  max(10vw, 10px) for menor que 46px, o padding horizontal assume o valor de 46px*/
  padding: 8px min(46px, max(10vw, 10px));

  /*A partir de 500px o menu de baixo some, imitando o comportamento do twitter */
  @media (min-width: 500px) {
    display: none;
  }
`;

/*Como todos os ícones vão ter o mesmo estilo, foi criada uma váriavel iconCSS que é passada para todos os ícones, que evita a repetição de código */
const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
