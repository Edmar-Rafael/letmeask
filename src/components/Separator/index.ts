import styled from 'styled-components'

interface SeparatorProps {
   x?: number;
   y?: number;
}

const Separator = styled.div<SeparatorProps>`
   height: ${props => props.y || 10}px;
   width: ${props => props.x || 10}px;
`;

export default Separator