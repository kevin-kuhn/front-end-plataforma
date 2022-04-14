export interface FormValues {
	nome: string,
	dataInicial: string,
	dataFinal: string,
	infosPropriedade: number | null,
	laboratorio: number | null,
	observacoes: string
	selectedPropriedade: PropriedadeValue
	selectedLaboratorio: LaboratorioValue
}

export interface PropriedadeValue {
	id: number | null,
	nome: string,
	cnpj: string,
}

export interface LaboratorioValue {
	id: number | null,
	nome: string,
}