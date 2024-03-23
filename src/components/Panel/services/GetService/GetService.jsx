import './getService.scss';
import { Link } from 'react-router-dom';
import Load from '../../../utils/Load.jsx';
import React, { useEffect, useState } from 'react';
import { changeActiveApi } from '../../../../helpers/services/changeActive.api.js';
import { getAllServiceApi } from '../../../../helpers/services/getAllService.api.js';

const GetService = () => {
    const [products, setProducts] = useState(null);
    const [expandedProduct, setExpandedProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getAllServiceApi();
            setProducts(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleSetActive = async (id) => {
        setLoading(true);
        await changeActiveApi(id)
        const response = await getAllServiceApi();
        setProducts(response.result);
        setLoading(false);
    };

    const toggleExpand = (productId) => {
        if (expandedProduct === productId) setExpandedProduct(null);
        else setExpandedProduct(productId);
    };

    return (
        <div className='getService'>
            <table className='gtpTable'>
                <thead>
                    <tr>
                        <th>imagen</th>
                        <th>servicio</th>
                        <th>Update</th>
                        <th>activo</th>
                        <th>Ver</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(prod => (
                        <React.Fragment key={prod._id}>
                            <tr>
                                <td><img src={prod.imgUrl} alt={prod.imgName} /></td>
                                <td>{prod.name}</td>
                                <td>
                                    <Link to={`/panel/updateService/${prod._id}`}>
                                        <button id={prod._id} className='btn'>
                                            Modificar
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        id={prod._id}
                                        onClick={() => handleSetActive(prod._id)}
                                        className='btn'
                                        style={{ color: prod.active ? 'black' : 'red' }}
                                    >
                                        {prod.active === false ? 'activar' : 'desactivar'}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        id={prod._id}
                                        onClick={() => toggleExpand(prod._id)}
                                        className='btn'
                                    >
                                        Ver
                                    </button>
                                </td>
                            </tr>
                            {expandedProduct === prod._id && (
                                <tr key={`${prod._id}-description`}>
                                    <td colSpan="5">
                                        <div>{prod.description}</div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <Load loading={loading} />
        </div>
    );
};

export default GetService;