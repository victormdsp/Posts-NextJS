import { Box } from '@mui/material';

interface IProps {
    direction?: string;
    children: any;
    backgroundColor? : string;
}

export default function CenteredBox(props: IProps) {
    const defaultProps = {
        direction: props.direction ?? 'column',
        backgroundColor: props.backgroundColor ?? 'transparent',
    }

    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: defaultProps.direction, width: 1, height: 1, backgroundColor: defaultProps.backgroundColor}}>
            {props.children}
        </Box>
    )
}