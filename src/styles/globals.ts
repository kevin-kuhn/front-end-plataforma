import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
  	box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	input[type=datetime-local]:required:invalid::-webkit-datetime-edit {
    color: transparent;
	}

	input[type=datetime-local]:focus::-webkit-datetime-edit {
    	color: black;
	}

	body, html, #root {
 	 	width: 100%;
  	height: 100%;
		background-color: #F3F2F1;
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: normal;

		--white: #ffffff;
		--black: #000000;
		--primary: #00796B;
		--primary-action: #00A98E;
		--dark-grey: #7d7d7d;
		--light-grey: #F5F5F5;
		--error: #D32F2F;
	}
`
