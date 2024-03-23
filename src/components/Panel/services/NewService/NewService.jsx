import './newService.scss';
import { useState } from 'react';
import Load from '../../../utils/Load';
import { useNavigate } from 'react-router-dom';
import SnackbarAlert from '../../../utils/Alerts';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { newServiceApi } from '../../../../helpers/services/newService.api';

const NewService = () => {

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', file: null });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [loading, setLoading] = useState(false);

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
        const data = new FormData();
        for (let key in formData) { data.append(key, formData[key]) };
        const response = await newServiceApi(data);
        if (response.error) {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'error', mess: response.error });
        } else {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'success', mess: 'Servico agragado correctamente' });
        };
        setTimeout(() => { navigate('/panel') }, 2000);
    };

    return (
        <form className='newService' onSubmit={handleSubmit}>
            <div className='newServiceInside'>
                <div className='newServiceData'>
                    <div className='newServiceInp'>
                        <label htmlFor="name">Nombre del servicio</label>
                        <input type="text" name='name' required onChange={handleImgChange} />
                    </div>

                    <div className='newServiceInp'>
                        <label htmlFor="description">Descripción del servicio</label>
                        <textarea name="description" cols="30" rows="10" required onChange={handleImgChange}></textarea>
                    </div>

                    <button className='btn' type="submit">Crear</button>
                </div>

                <div className='filrForm' onClick={() => document.querySelector('.file-inside').click()}>
                    <input type="file" name="file" accept="image/*" className='file-inside' hidden onChange={handleImgChange} />
                    {image
                        ? <img src={image} className='imgFile' alt="Preview" />
                        : <CloudUploadIcon style={{ fontSize: 90 }} className='cloudUploadIcon' />
                    }
                </div>
            </div>
            <SnackbarAlert message={message} open={open} />
            <Load loading={loading} />
        </form>
    );
};

export default NewService;