import Load from '../../../utils/Load.jsx';
import { useState, useEffect } from "react";
import CalendarM from "./Calendar/Calendar";
import { getAllShiftsApi } from '../../../../helpers/shifts/getShifts.api.js';
import { getCustShiftsApi } from '../../../../helpers/shifts/getCustShift.api.js';

const VewShifts = () => {

    const [shiftConfig, setShiftConfig] = useState([]);
    const [shift, setShift] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllShiftsApi();
            const customersRes = await getCustShiftsApi();
            setShiftConfig(response);
            setShift(customersRes);
        }; fetchData();
    }, []);

    return (
        <div>
            {
                shiftConfig.hours ?
                <CalendarM shiftConfig={shiftConfig} shift={shift} />
                : <Load loading={true} />
            }
        </div>
    );
};

export default VewShifts;