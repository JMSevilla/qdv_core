import {
 borders,
 compose,
 display,
 grid,
 palette,
 positions,
 shadows,
 sizing,
 spacing,
 text,
 styleFunctionSx,
 flexbox
} from '@qodev/system'
import styled from '../styles/styled'
export var qdvstyleFunction = styleFunctionSx(compose(borders, display, flexbox, grid, positions, palette, shadows, sizing, spacing, text));
/**
 * @ignore - no need to document
 */

var Contain = styled('div')(qdvstyleFunction, {
    name: 'QdvContain'
});
export default Contain;