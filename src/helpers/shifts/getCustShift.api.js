import { url } from "../utils.helpers";

const getCustShiftsApi = async () => {

    const response = await fetch(`${url}/cande_api/shift/cust`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.status = 'success') return content.data.result;
};

export { getCustShiftsApi };