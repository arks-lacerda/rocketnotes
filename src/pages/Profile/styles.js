import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 12.4rem;

    h1 {
      font-size: 3rem;

      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    button {
      background-color: transparent;
      border: none;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
    object-fit: cover;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      object-fit: cover;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;

export const Form = styled.form`
  max-width: 30rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > img {
    width: 5.6rem;
    height: 5.6rem;
  }
`;
