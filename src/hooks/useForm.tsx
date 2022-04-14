/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

import { useFormik } from 'formik'
import { FormValues, LaboratorioValue, PropriedadeValue } from '../models/form'

const defaultInitialValues: FormValues = {
  nome: '',
  dataInicial: '',
  dataFinal: '',
  infosPropriedade: null,
  laboratorio: null,
  observacoes: '',
  selectedPropriedade: {} as PropriedadeValue,
  selectedLaboratorio: {} as LaboratorioValue
}

const defaultValidation = (values: FormValues) => {
  const errors: any = {}

  if (!values.nome?.trim()) {
    errors.nome = 'Required'
  } else if (values.nome?.trim().length > 40) {
    errors.nome = 'Must be 40 characters or less'
  }

  if (!values.dataInicial) {
    errors.dataInicial = 'Required'
  }

  if (!values.dataFinal) {
    errors.dataFinal = 'Required'
  } else if (new Date(values.dataInicial) > new Date(values.dataFinal)) {
    errors.dataFinal = 'Must be after data inicial'
  }

  if (!values.infosPropriedade) {
    errors.infosPropriedade = 'Required'
  }

  if (!values.laboratorio) {
    errors.laboratorio = 'Required'
  }

  if (values.observacoes?.length > 1000) {
    errors.observacoes = 'Must be 1000 characters or less'
  }

  return errors
}

interface Props {
  initialValues?: FormValues
  validate?: (values: FormValues) => any
  onSubmit: (values: FormValues) => void
  propriedades: PropriedadeValue[]
  laboratorios: LaboratorioValue[]
}

export const useForm = ({
  initialValues = defaultInitialValues,
  validate = defaultValidation,
  onSubmit,
  propriedades,
  laboratorios
}: Props) => {
  const [showPropriedadesOptions, setShowPropriedadesOptions] = useState(false)
  const [showLaboratoriosOptions, setShowLaboratoriosOptions] = useState(false)

  const formik = useFormik<FormValues>({
    initialValues,
    validate,
    onSubmit
  })

  const getFieldProps = (field: string) => {
    return formik.getFieldProps(field)
  }

  const setFieldValue = (field: string, value: any) => {
    formik.setFieldValue(field, value)
  }

  const handlePropriedadesClick = () => {
    setShowPropriedadesOptions(show => !show)
  }

  const handleLaboratoriosClick = () => {
    setShowLaboratoriosOptions(show => !show)
  }

  const handlePropriedadesChange = (value: any) => {
    formik.setFieldValue('infosPropriedade', value)
    formik.setFieldValue(
      'selectedPropriedade',
      propriedades.find(propriedade => propriedade.id === value) ??
        ({} as PropriedadeValue)
    )

    setShowPropriedadesOptions(false)
  }

  const handleLaboratoriosChange = (value: any) => {
    formik.setFieldValue('laboratorio', value)
    formik.setFieldValue(
      'selectedLaboratorio',
      laboratorios.find(laboratorio => laboratorio.id === value) ??
        ({} as LaboratorioValue)
    )

    setShowLaboratoriosOptions(false)
  }

	const setIsSubmiting = (isSubmiting: boolean) => {
		formik.setSubmitting(isSubmiting)
	}

  return {
    errors: formik.errors,
    isValid: formik.isValid,
    touched: formik.touched,
    values: formik.values,
    isSubmitting: formik.isSubmitting,
    isValidating: formik.isValidating,
    showPropriedadesOptions,
    showLaboratoriosOptions,
		setIsSubmiting,
    handleSubmit: formik.handleSubmit,
    getFieldProps,
    setFieldValue,
    handlePropriedadesClick,
    handleLaboratoriosClick,
    handlePropriedadesChange,
    handleLaboratoriosChange
  }
}
