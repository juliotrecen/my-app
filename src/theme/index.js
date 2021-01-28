import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
        
        type: 'light',
    },

    typography:{
        h6:{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '-0.15px',
        },
    },

});


export default theme;