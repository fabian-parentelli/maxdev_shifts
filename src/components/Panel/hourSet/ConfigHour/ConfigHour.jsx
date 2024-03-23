import HourConfig from "./HourConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { configShiftApi } from '../../../../helpers/shifts/configShift.api.js';

const ConfHour = () => {

    const navigate = useNavigate();
    const [shift, setShift] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

    useEffect(() => {
        if (shift) {
            setLoading(true);
            const fetchData = async () => {
                const response = await configShiftApi(shift);
                if (response.error) {
                    setLoading(false);
                    setOpen(true);
                    setMessage({ status: 'error', mess: response.error });
                    setTimeout(() => { setOpen(false) }, 2000);
                } else {
                    setLoading(false);
                    setOpen(true);
                    setMessage({ status: 'success', mess: 'Configuracion correcta' });
                    setTimeout(() => { navigate('/panel') }, 2000);
                };
            }; fetchData();
        };
    }, [shift]);

    return (
        <HourConfig
            setShift={setShift}
            loading={loading}
            open={open}
            message={message}
        />
    );
};

export default ConfHour;