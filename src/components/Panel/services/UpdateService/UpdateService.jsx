import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeUpdateService from "./CodeUpdateService";
import { getServiceByIdApi } from '../../../../helpers/services/getServiceById.api.js';
import { updateServiceApi } from '../../../../helpers/services/updateService.api.js';

const UpdateService = () => {

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', file: null });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchData = async (id) => {
            const response = await getServiceByIdApi(id);
            setFormData({ name: response.name, description: response.description })
            setLoading(false);
        }; fetchData(id);
    }, []);

    const handleImgChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files[0]) {
            setImage(URL.createObjectURL(files[0]));
            setFormData(prevState => ({ ...prevState, [name]: files[0] }));
        } else {
            setImage('');
            setFormData(prevState => ({ ...prevState, [name]: value }));
        };
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('file', formData.file);
        const response = await updateServiceApi(id, formDataToSend);
        if (response.error) {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'error', mess: response.error });
        } else {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'success', mess: 'Servico modificado correctamente' });
        };
        setTimeout(() => { navigate('/panel') }, 2000);
    };

    return (
        <CodeUpdateService
            handleImgChange={handleImgChange}
            handleSubmit={handleSubmit}
            image={image}
            message={message}
            loading={loading}
            open={open}
            formData={formData}
        />
    );
};

export default UpdateService;