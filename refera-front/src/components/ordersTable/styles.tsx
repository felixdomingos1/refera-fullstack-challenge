import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: #969cb3;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: ${({ theme }) => theme.spacings.xsmall};
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${({ theme }) => theme.colors.neutral.white};
      color: #969cb3;
      border-radius: 0.25rem;

      cursor: pointer;

      &:first-child {
        color: #363f5f;
      }

      &.deposit{
        color: ${({ theme }) => theme.colors.neutral.green}
      }

      &.withdraw{
        color: ${({ theme }) => theme.colors.neutral.red}
      }
  }
`
