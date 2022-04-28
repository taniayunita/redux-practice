import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export const getContacts = async () => axios.get('/contacts')
export const getContactById = async (id) => axios.get(`/contacts/${id}`)
export const createContact = async (contact) => axios.post(`/contacts`, contact)
export const updateContact = async (contact) => axios.put(`contacts/${contact.id}`, contact)
export const deleteContact = async (id) => axios.delete(`/contacts/${id}`)
