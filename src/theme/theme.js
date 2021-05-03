import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    status: {

    },
    overrides:{
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