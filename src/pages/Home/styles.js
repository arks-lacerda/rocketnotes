import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  padding: 6.4rem;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > li {
    margin-bottom: 2.4rem;
    list-style: none;
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 6.4rem;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
  grid-area: newnote;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  svg {
    margin-right: 0.8rem;
  }
`;
