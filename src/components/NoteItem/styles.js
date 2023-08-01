import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `0.1rem dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.2rem;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: 0;
    border-radius: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
