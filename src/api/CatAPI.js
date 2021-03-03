const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            const errorData = await response.json();
            throw errorData;
        }
    }
    catch(error) {
        throw {
            message: error.message,
            status: error.status
        }
    }
};

const api = {
    fetchCats: async (keyword) => {
        try {
            const result = await request(`${API_ENDPOINT}/images/search?limit=20`);
            return {isError: false, data: result};
        }
        catch(error) {
            return {isError: true, data: error};
        }
    }
};

export { api };