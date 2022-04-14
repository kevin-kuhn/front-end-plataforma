import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 39px;
  background-color: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

export const MainStyled = styled.main`
  width: 100%;
  height: calc(100% - 39px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`

export const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;

  > .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    color: var(--white);
    padding: 18px;
    background-color: var(--primary);

    h2 {
      font-weight: normal;
    }
  }

  > .form-body {
    display: grid;
    padding: 18px;
    background-color: var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    .item {
      padding: 5px;
    }

    .nome {
      grid-area: nome;
    }

    .data-inicial {
      grid-area: data-inicial;
    }

    .data-final {
      grid-area: data-final;
    }

    .propriedades {
      grid-area: propriedades;
    }

    .laboratorio {
      grid-area: laboratorio;
    }

    .observacoes {
      grid-area: observacoes;
    }

    grid:
      'nome nome data-inicial data-final' 1fr
      'propriedades propriedades laboratorio laboratorio' 1fr
      'observacoes observacoes observacoes observacoes' 2fr
      / 1fr 1fr 1fr 1fr;

    @media (max-width: 768px) {
      grid:
        'nome'
        'data-inicial '
        'data-final'
        'propriedades'
        'laboratorio'
        'observacoes';
    }
  }
`

interface OptionsProps {
  showPropriedadesOptions: boolean
  showLaboratoriosOptions: boolean
}

export const OptionsStyled = styled.div<OptionsProps>`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  max-width: 1024px;

  > div {
    width: 50%;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--white);
    padding: 18px 0;
    max-height: 230px;
    overflow-y: scroll;

    > div {
      display: flex;
      cursor: pointer;
      align-items: center;
      padding: 8px 18px;

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 115%;
      }

      &:hover {
        background-color: var(--light-grey);
      }
    }

    > .prop-options {
      flex-direction: column;
      align-items: flex-start;

      .helper-text {
        font-size: 12px;
        color: var(--dark-grey);
      }
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: #bdbdbd;
      border-radius: 25px;
    }

    &::-webkit-scrollbar-thumb:active {
      background: var(--dark-grey);
    }

    &::-webkit-scrollbar-track {
      background: var(--light-grey);
      border-radius: 4px;
    }
  }

  > div:first-of-type{
    opacity: ${props => (props.showPropriedadesOptions ? 1 : 0)};
  }

  > div:last-of-type {
    opacity: ${props => (props.showLaboratoriosOptions ? 1 : 0)};
  }
`
