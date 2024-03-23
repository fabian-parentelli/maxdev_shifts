import { url } from "../utils.helpers";

const newServiceApi = async (service) => {

    const response = await fetch(`${url}/cande_api/service`, {
        method: 'POST',
        body: service,
        headers: {
            'Accept': 'application/json'
        }
    });

    const content = await response.json();
    if(content.error) return content;
    if(content.data.status = 'success') return content.data;
};

export { newServiceApi };