import styled from 'styled-components'
import { media } from './../theme'

module.exports = styled.div`
  font-size: 1rem;
	padding: 5px 10px;
	flex: 1;
	margin-right: 4%;
	${media.Mobile`margin-right: 0;`}
  letter-spacing: .1rem;
  display: flex;
	&:last-child{
		margin-right: 0;
	}

	${props => {
		if (props.left) {
			return `
				justify-content: flex-end;
			`;
		} else if (props.center) {
			return `
				justify-content: center;
			`;
		} else if (props.spaceAround) {
			return `
				justify-content: space-around;
			`;
		} else if (props.spaceBetween) {
			return `
				justify-content: space-between;
			`;
		}
	}}
`;
