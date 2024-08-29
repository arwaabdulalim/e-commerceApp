import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

// Intercept all requests
apiClient.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

// Intercept all responses
export function extractAPIErrorResponse(axiosInstance) {
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            error.originalMessage = error.message;
            Object.defineProperty(error, 'message', {
                get: function () {
                    return `${error.response?.data?.message || error.originalMessage}`;
                },
            });
            return Promise.reject(error);
        }
    );
}

extractAPIErrorResponse(apiClient);

export const apiService = () => {
    return apiClient;
};
