import { useEffect, useState } from 'react'
import { LaboratorioValue, PropriedadeValue } from '../models/form'
import { useApi } from './useApi'

export const useUserApi = () => {
  const { getPropriedadesInfo, getLaboratoriosInfo } = useApi()

  const [propriedades, setPropriedades] = useState<PropriedadeValue[]>([])
  const [laboratorios, setLaboratorios] = useState<LaboratorioValue[]>([])

  useEffect(() => {
    const getUserInfo = async () => {
      const [propriedades, laboratorios] = await Promise.all([
        getPropriedadesInfo(),
        getLaboratoriosInfo()
      ])

      setLaboratorios(laboratorios)
      setPropriedades(propriedades)
    }
    getUserInfo()
  }, [])

  return { propriedades, laboratorios }
}
