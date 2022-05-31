import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: #363f5f;
    font-size: ${({ theme }) => theme.spacings.xsmall};
    margin-bottom: 2rem;
  }

  input,
  textarea,
  select {
    resize: none;
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacings.xsmall};
    height: 4rem;
    border-radius: 0.25rem;

    border: ${({ theme }) => theme.border.solid('#d7d7d7')};
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #969cb3;
    }

    /* & + input {
      margin-top: 1rem;
    } */

    margin-top: 1rem;
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacings.xsmall};
    height: 4rem;
    background: ${({ theme }) => theme.colors.neutral.green};
    color: ${({ theme }) => theme.colors.neutral.white};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: ${({ theme }) => theme.spacings.xsmall};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  grid-auto-rows: 6em;
  grid-row-gap: 0.5em;
  padding: 0.2em;
  width: 100%;
  gap: 10px;

  small {
    color: #bb2124;
    padding: 0;
    margin: 0;
    font-size: 0.6rem;
  }
`

export const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
