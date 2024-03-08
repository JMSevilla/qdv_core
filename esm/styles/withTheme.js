import { withThemeCreator } from '@qodev/styles';
import defaultTheme from './defaultTheme';
var withTheme = withThemeCreator({
  defaultTheme: defaultTheme
});
export default withTheme;