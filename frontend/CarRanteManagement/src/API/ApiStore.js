import {create} from 'zustand'
import axios from 'axios'

const API_URL = "http://127.0.0.1:8001"

axios.defaults.withCredentials = true;

export const CarsAPiStore = create((set) => ({
    car: [],
    loading: false,
    error: null,
    message: null,

    Create_car: async (brand, module, year, licensePlate, dailyPrice, status, category_name) => {
        try {
            const response = await axios.post(`${API_URL}/car/newCar`, {brand, module, year: year, licensePlate, dailyPrice: dailyPrice, status, category_name})
            set({car: response.data.car, message: "car created"})
        } catch (error) {
            set({error: error, message: "error in creating a new car"});
        }
    },

    update_car : async (id, brand, module, year, licensePlate, dailyPrice, status) => {
        try {
            const response = await axios.post(`${API_URL}/car/updateCar/${id}`, {brand, module, year, licensePlate, dailyPrice, status})
            set({car: response.data.car, message: "car updated"});
        } catch (error) {
            set({error: error, message: "error in updating a car"});
        }
    },

    delete_car: async (id) => {
        try {
            const response = await axios.post(`${API_URL}/car/deleteCar/${id}`,);
            set({car: response.data.car, message: "car deleted "})
        } catch (error) {
            set({error: error, message: "error in deleting a car"});
        }
    },

    list_cars: async () => {
        set({loading: true});
        try {
            const response = await axios.get(`${API_URL}/car/allCars`);
            set({car: response.data, loading: false});
        } catch (error) {
            set({ error: error.message, loading: false, car: [] });
        }
    }

}))

export const CustomerApiStore = create((set) => ({
    customer: [],
    loading: false,
    error: false,
    message: false,

    list_customers: async () => {
        set({loading: true});
        try {
            const response = await axios.get(`${API_URL}/cutomer/allcustomers`);
            set({customer: response.data, loading: false});
        } catch (error) {
            set({error: error.message, message:"customers", loading: false, customer: []});
        }
    },

    delete_customer: async (id) => {
        set({loading: true});
        try {
            const response = await axios.post(`${API_URL}/delete/${id}`);
            set({customer: response.data,loading:false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },

    create_customer: async (name, firstname,address,email,telephone) => {
        set({loading: true});
        try {
            const response = await axios.post(`${API_URL}/newCustomer`, {name, firstname,address,email,telephone})
            set({customer: response.data,message: "new customer created successfully", loading: false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    }
    

}))
 
export const LeaseAgreementApiStore = create((set) => ({
    LeaseAgreement: [],
    loading: false,
    error: false,
    message: false,

    list_LeaseAgreements: async () => {
        set({loading: true});
        try {
            const response = await axios.get(`${API_URL}/LeaseAgreement/allLeaseAgreement`);
            set({LeaseAgreement: response.data, loading: false});
        } catch (error) {
            set({error: error.message, message:"LeaseAgreement deleted", loading: false});
        }
    },

    create_LeaseAgreement: async (brand, name, StartDate, EndDate, TotalPrice, Status) => {
        set({loading: true});
        try {
            const response = await axios.post(`${API_URL}/newLeaseAgreement`, {car_name: brand, customer_name: name, StartDate, EndDate, TotalPrice, Status})
            set({LeaseAgreement: response.data,message: "new LeaseAgreement created successfully", loading: false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },

    delete_LeaseAgreement: async (id) => {
        set({loading: true});
        try {
            const response = await axios.post(`${API_URL}/LeaseAgreement/delete/${id}`);
            set({LeaseAgreement: response.data,loading:false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },

}))