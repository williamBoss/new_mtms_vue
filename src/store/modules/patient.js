const patient = {
  state: {
    patientName: '',
    phone: '',
    patientId: ''
  },
  mutations: {
    SET_INFO: (state, data) => {
      state.patientName = data.patientName
      state.phone = data.phone
      state.patientId = data.patientName
    },
    CLEAR_INFO: (state) => {
      state = {
        patientName: '',
        phone: '',
        patientId: ''
      }
    }
  }
}
export default patient
