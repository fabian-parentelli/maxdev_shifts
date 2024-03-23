import './customerShift.scss';

const CustomerShift = ({ setShift }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShift(prevShift => ({
            ...prevShift,
            customer: {
                ...prevShift.customer,
                [name]: value
            }
        }));
    };    

    return (
        <div className='customerShift'>
            <h4>Tus Datos</h4>
            <div className='cusSh'>
                <div className='cusShInp'>
                    <label>Nombre</label>
                    <input type="text" name='name' onChange={handleChange} required />
                </div>
                <div className='cusShInp'>
                    <label>Dirección</label>
                    <input type="text" name='address' onChange={handleChange} required />
                </div>
                <div className='cusShInp'>
                    <label>Email</label>
                    <input type="text" name='email' onChange={handleChange} required />
                </div>
                <div className='cusShInp'>
                    <label>Teléfono</label>
                    <input type="text" name='phone' onChange={handleChange} required />
                </div>
            </div>
        </div>
    );
};

export default CustomerShift;