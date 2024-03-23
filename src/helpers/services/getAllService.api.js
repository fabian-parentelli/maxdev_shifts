import { url } from "../utils.helpers";

const getAllServiceApi = async () => {

    const response = await fetch(`${url}/cande_api/service`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    if(content.error) return content;
    if(content.status = 'success') return content.data;
};

export { getAllServiceApi };