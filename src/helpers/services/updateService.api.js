import { url } from "../utils.helpers";

const updateServiceApi = async (id, service) => {

    const response = await fetch(`${url}/cande_api/service/update/${id}`, {
        method: 'PUT',
        body: service,
        headers: {
            'Accept': 'application/json'
        }
    });

    const content = await response.json();
    if (content.error) return content.error;
    if (content.data.status === 'success') return content.data.status;
};

export { updateServiceApi };