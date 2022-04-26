import http from './api'

const getContacts = () => {
    return http.get("/contacts");
  };
  const getContactId = id => {
    return http.get(`/contacts/${id}`);
  };
  const createContact = data => {
    return http.post("/contacts", data);
  };
  const updateContact = (id, data) => {
    return http.put(`/contacts/${id}`, data);
  };
  const deleteContact = id => {
    return http.delete(`/contacts/${id}`);
  };

  const ApiService = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
  };
  export default ApiService;