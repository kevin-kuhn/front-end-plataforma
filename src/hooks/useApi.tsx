/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react'

export const useApi = () => {
  const getPropriedadesInfo = () => {
    const propriedades = [
      {
        id: 1,
        nome: 'Propriedade 1',
        cnpj: 'XXXXXXXXXXX-1'
      },
      {
        id: 2,
        nome: 'Propriedade 2',
        cnpj: 'XXXXXXXXXXX-2'
      },
      {
        id: 3,
        nome: 'Propriedade 3',
        cnpj: 'XXXXXXXXXXX-3'
      },
      {
        id: 4,
        nome: 'Propriedade 4',
        cnpj: 'XXXXXXXXXXX-4'
      },
			{
				id: 5,
				nome: 'Propriedade 5',
				cnpj: 'XXXXXXXXXXX-5'
			},
			{
				id: 6,
				nome: 'Propriedade 6',
				cnpj: 'XXXXXXXXXXX-6'
			},
			{
				id: 7,
				nome: 'Propriedade 7',
				cnpj: 'XXXXXXXXXXX-7'
			}
    ]

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(propriedades)
      }, 250)
    })
  }

  const getLaboratoriosInfo = () => {
    const laboratorios = [
      {
        id: 1,
        nome: 'Laboratório 1'
      },
      {
        id: 2,
        nome: 'Laboratório 2'
      },
      {
        id: 3,
        nome: 'Laboratório 3'
      },
      {
        id: 4,
        nome: 'Laboratório 4'
      },
			{
				id: 5,
				nome: 'Laboratório 5'
			},
			{
				id: 6,
				nome: 'Laboratório 6'
			},
			{
				id: 7,
				nome: 'Laboratório 7'
			},
			{
				id: 8,
				nome: 'Laboratório 8'
			},
			{
				id: 9,
				nome: 'Laboratório 9'
			}
    ]

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(laboratorios)
      }, 250)
    })
  }

  return useCallback<any>({
    getPropriedadesInfo, 
		getLaboratoriosInfo
  }, [])
}
