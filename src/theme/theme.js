import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({

    status: {

    },
    overrides:{
        MuiCard:{
            root: {
                boxShadow: '0px 14px 74px -20px rgba(51, 65, 85, 0.49)',
                borderRadius: 16,
            }
        },
        MuiButton: {
            containedPrimary: {
            }
        }
    },
    props: {
        MuiButton: {
            disableRipple: true
        }
    }
});