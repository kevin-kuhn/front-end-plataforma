import { ContainerStyled, HelperMessageStyled } from './styles'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  name: string
  error: boolean
  value: string
  helperText?: string
  onClick: () => void
  label: string
  required?: boolean
  hasIcon?: boolean
  onClickIcon?: () => void
}

const FakeSelect: React.FC<Props> = ({
  error,
  value,
  label,
  helperText = '',
  onClick,
  required = false,
  hasIcon = false,
  ...props
}) => {
  return (
    <>
      <ContainerStyled
        error={error}
        hasValue={!!value?.length}
        onClick={onClick}
      >
        <div>
          <p className="label">
            {label}
            {required && ' *'}
          </p>
          <p className="value">{value}</p>
        </div>
        {hasIcon && (
          <IconButton
            onClick={props.onClickIcon}
            sx={{
              marginRight: '30px',
              padding: '0px'
            }}
            edge="end"
          >
            <CloseIcon />
          </IconButton>
        )}
      </ContainerStyled>
      <HelperMessageStyled error={error}>
        {error ? 'Error' : helperText}
      </HelperMessageStyled>
    </>
  )
}

export default FakeSelect
