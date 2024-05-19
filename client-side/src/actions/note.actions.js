import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success : isSuccess,
        data: data || null,
    };
};

export const createNote = async (formData) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/createNote`,
            formData
        );
        console.log("Response from server");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const getAllNotes = async () => {
    try{
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/getAllNotes`
        );

        console.log("Response from server");
        console.log(response.data);
        return baseApiResponse(response.data, true);

    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const updateNote = async (id, formData) => {
    try{
        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/updateNote/${id}`, formData
        );
        console.log("Response from server");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}

export const deleteNote = async (id) => {
    try{
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/deleteNote/${id}`
        );
        console.log("Response from server");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}