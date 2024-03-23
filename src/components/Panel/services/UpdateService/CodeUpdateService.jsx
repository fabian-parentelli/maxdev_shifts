import './codeUpdateService.scss';
import Load from '../../../utils/Load';
import SnackbarAlert from '../../../utils/Alerts';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CodeUpdateService = ({ handleImgChange, handleSubmit, image, message, loading, open, formData }) => {

    return (
        <form className='codeUpdateService' onSubmit={handleSubmit}>
            <div className='newServiceInside'>
                <div className='newServiceData'>
                    <div className='newServiceInp'>
                        <label htmlFor="name">Nombre del servicio</label>
                        <input type="text" name='name' value={formData.name} required onChange={handleImgChange} />
                    </div>

                    <div className='newServiceInp'>
                        <label htmlFor="description">Descripción del servicio</label>
                        <textarea 
                            name="description" 
                            cols="30" rows="10" 
                            value={formData.description}
                            required 
                            onChange={handleImgChange}>
                        </textarea>
                    </div>

                    <button className='btn' type="submit">Modificar</button>
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

export default CodeUpdateService;