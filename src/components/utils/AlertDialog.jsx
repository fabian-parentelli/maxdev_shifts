import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function AlertDialog({ open, setOpen, message }) {

    const handleClose = () => { setOpen(false) };

    return (
        <>
            {message &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {`${message.description.hour} - ${message.description.customer.name} - ${message.description.service.name}`}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <strong>Dirección:</strong> {message.description.customer.address}<br />
                            <strong>Teléfono:</strong> {message.description.customer.phone}<br />
                            <strong>Email:</strong> {message.description.customer.email}<br />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{color: '#35374B'}} onClick={handleClose}>Cerrar</Button>
                    </DialogActions>
                </Dialog>
            }
        </>
    );
};