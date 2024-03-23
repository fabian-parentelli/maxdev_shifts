import { url } from "../utils.helpers";

const changeActiveApi = async (id) => {

    const response = await fetch(`${url}/cande_api/service/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    return content;
};

export { changeActiveApi };