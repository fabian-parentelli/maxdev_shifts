import './getService.scss';
import { getAllServiceApi } from '../../../helpers/services/getAllService.api.js';
import { useEffect, useState } from 'react';

const GetService = ({ setShift }) => {
    const [services, setServices] = useState([]);
    const [selectedServiceId, setSelectedServiceId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllServiceApi();
            const activeServices = response.result.filter(ser => ser.active);
            setServices(activeServices);
        }; 
        fetchData();
    }, []);

    const handleChange = (event) => {
        setSelectedServiceId(event.target.value);
        const selectedService = services.find(service => service._id === event.target.value);
        setShift(prevShift => ({ ...prevShift, service: selectedService._id }));
    };

    return (
        <div className='getService'>
            <select value={selectedServiceId} onChange={handleChange}>
                <option value="" disabled>Elegir Servicio</option>
                {services.map((service, index) => (
                    <option key={index} value={service._id}>
                        {service.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GetService;
