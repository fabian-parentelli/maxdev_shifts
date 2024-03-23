import { url } from "../utils.helpers";

const updateConfShiftApi = async (id, shift) => {

    const response = await fetch(`${url}/cande_api/shift/${id}`, {
        method: 'PUT',
        body: JSON.stringify(shift),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    if(content.error) return content;
    if(content.data.status = 'success') return content.data;
};

export { updateConfShiftApi };