import styled, { css } from 'styled-components'

interface Props {
  error: boolean
  hasValue?: boolean
}

export const ContainerStyled = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid var(--dark-grey);
  padding: 4px 0 5px;
  align-items: flex-end;
	justify-content: space-between;

  div {
    .label {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 115%;
      color: var(--dark-grey);
      transition: all 0.3s;

      ${props =>
        props.hasValue &&
        css`
          transform: translateY(-200%);
          font-size: 12px;
        `}
    }

    .value {
      position: absolute;
      bottom: 4px;
      left: 0;
    }
  }



  cursor: pointer;
  box-sizing: border-box;
  position: relative;

  &::after {
    content: '';
    grid-area: select;
    justify-self: end;
    position: absolute;
    right: 0;
    margin-right: 8px;
    margin-bottom: 8px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--dark-grey);
  }

  ${props =>
    props.error &&
    css`
      border-bottom: 1px solid var(--error);

      .label {
        color: var(--error);
      }
    `}
`

export const HelperMessageStyled = styled.div<Props>`
  display: flex;
  color: var(--dark-grey);
  font-size: 12px;
  height: 30%;
  padding-top: 5px;
  box-sizing: border-box;

  > span {
    min-height: 100%;
    display: inline-flex;
    align-items: center;
  }

  ${props =>
    props.error &&
    css`
      color: var(--error);
    `}
`
