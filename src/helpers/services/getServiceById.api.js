import { url } from "../utils.helpers";

const getServiceByIdApi = async (id) => {

    const response = await fetch(`${url}/cande_api/service/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    if (content.error) return content;
    if (content.data.status === 'success') return content.data.result;
};

export { getServiceByIdApi };