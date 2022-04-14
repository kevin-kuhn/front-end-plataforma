import {
  HeaderStyled,
  MainStyled,
  FormContainerStyled,
  OptionsStyled
} from './styles'

import { FormValues } from '../../../models/form'

import toast, { Toaster } from 'react-hot-toast'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { useForm } from '../../../hooks/useForm'
import { useUserApi } from '../../../hooks/useUserApi'

import FakeSelect from '../fake-select'
import { useEffect } from 'react'

const Board: React.FC = () => {
  const onSubmit = (values: FormValues) => {
    const formattedValues = {
      nome: values.nome,
      dataInicial: values.dataInicial,
      dataFinal: values.dataFinal,
      infosPropriedade: {
        id: values.selectedPropriedade.id,
        nome: values.selectedPropriedade.nome
      },
      cnpj: values.selectedPropriedade.cnpj,
      laboratorio: {
        id: values.selectedLaboratorio.id,
        nome: values.selectedLaboratorio.nome
      },
      observacoes: values.observacoes
    }

    console.log(formattedValues)
  }

  const { propriedades, laboratorios } = useUserApi()

  const {
    errors,
    values,
    touched,
    isSubmitting,
    isValidating,
    showPropriedadesOptions,
    showLaboratoriosOptions,
		setIsSubmiting,
    handleSubmit,
    getFieldProps,
    handlePropriedadesClick,
    handleLaboratoriosClick,
    handlePropriedadesChange,
    handleLaboratoriosChange
  } = useForm({
    onSubmit,
    propriedades,
    laboratorios
  })

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      Object.keys(errors).length
        ? toast.error('Preencha todos os campos corretamente!')
        : toast.success('Cadastro realizado com sucesso!')
			
			setIsSubmiting(false)
    }
  }, [isSubmitting, isValidating])

  return (
    <>
      <HeaderStyled />
      <MainStyled>
        <FormContainerStyled onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>Teste front-end</h2>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              sx={{
                height: '50px',
                color: 'secondary.main'
              }}
            >
              SALVAR
            </Button>
          </div>
          <div className="form-body">
            <div className="item nome">
              <TextField
                id="nome"
                color="primary"
                fullWidth
                required
                label="Nome"
                variant="standard"
                helperText={
                  <span style={{ textAlign: 'end', display: 'block' }}>
                    {values['nome'].length} / 40
                  </span>
                }
                error={!!touched['nome'] && !!errors['nome']}
                {...getFieldProps('nome')}
              />
            </div>
            <div className="item data-inicial">
              <TextField
                id="dataInitial"
                color="primary"
                fullWidth
                type="datetime-local"
                required
                label="Data Inicial"
                variant="standard"
                error={!!touched['dataInicial'] && !!errors['dataInicial']}
                {...getFieldProps('dataInicial')}
              />
            </div>
            <div className="item data-final">
              <TextField
                id="dataFinal"
                color="primary"
                fullWidth
                type="datetime-local"
                required
                label="Data Final"
                variant="standard"
                error={!!touched['dataFinal'] && !!errors['dataFinal']}
                {...getFieldProps('dataFinal')}
              />
            </div>
            <div className="item propriedades">
              <FakeSelect
                name="infosPropriedade"
                label="Propriedades"
                required
                hasIcon
                onClickIcon={() => handlePropriedadesChange(null)}
                error={
                  !!touched['infosPropriedade'] && !!errors['infosPropriedade']
                }
                onClick={handlePropriedadesClick}
                value={values['selectedPropriedade'].nome}
                helperText={values['selectedPropriedade'].cnpj}
              />
            </div>
            <div className="item laboratorio">
              <FakeSelect
                name="laboratorio"
                label="Laboratório"
                required
                error={!!touched['laboratorio'] && !!errors['laboratorio']}
                onClick={handleLaboratoriosClick}
                value={values['selectedLaboratorio'].nome}
              />
            </div>
            <div className="item observacoes">
              <TextField
                id="observacoes"
                color="primary"
                fullWidth
                label="Observacoes"
                variant="standard"
                multiline
                maxRows={5}
                minRows={5}
                helperText={
                  <span style={{ textAlign: 'end', display: 'block' }}>
                    {values['observacoes'].length} / 1000
                  </span>
                }
                error={!!touched['observacoes'] && !!errors['observacoes']}
                {...getFieldProps('observacoes')}
              />
            </div>
          </div>
        </FormContainerStyled>
        <OptionsStyled
          showPropriedadesOptions={showPropriedadesOptions}
          showLaboratoriosOptions={showLaboratoriosOptions}
        >
          <div>
            {showPropriedadesOptions &&
              propriedades.map(propriedade => (
                <div
                  key={propriedade.id}
                  className="prop-options"
                  onClick={() => handlePropriedadesChange(propriedade.id)}
                >
                  <p>{propriedade.nome}</p>
                  <p className="helper-text">CNPJ: {propriedade.cnpj}</p>
                </div>
              ))}
          </div>
          <div>
            {showLaboratoriosOptions &&
              laboratorios.map(laboratorio => (
                <div
                  key={laboratorio.id}
                  onClick={() => handleLaboratoriosChange(laboratorio.id)}
                >
                  <p>{laboratorio.nome}</p>
                </div>
              ))}
          </div>
        </OptionsStyled>
      </MainStyled>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  )
}

export default Board
