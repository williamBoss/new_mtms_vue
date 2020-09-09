import { axios } from '@/utils/request'
import qs from 'qs'

const baseUrl = '/mtms'
const api = {
  disease: baseUrl + '/disease',
  assessment: baseUrl + '/assessment',
  patient: baseUrl + '/patient',
  med: baseUrl + '/med'
}
export default api
// disease
export function getDiseaseList (parameter) {
  return axios({
    url: api.disease + '/',
    method: 'get',
    params: parameter
  })
}
export function getAllDiseaseList () {
  return axios({
    url: api.disease + '/allDisease',
    method: 'get'
  })
}
export function saveDisease (parameter) {
  return axios({
    url: api.disease + '/',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export function updateDisease (id, parameter) {
  return axios({
    url: api.disease + '/' + id,
    method: 'put',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export function delDisease (parameter) {
  return axios({
    url: api.disease + '/' + parameter,
    method: 'DELETE'
  })
}
// patient
export function getPatientListByPhone (parameter) {
  return axios({
    url: api.patient + '/listByPhone',
    method: 'get',
    params: parameter
  })
}
export function getPatientInfoByPhone (phone) {
  return axios({
    url: api.patient + '/phone/' + phone,
    method: 'get'
  })
}
export function getPatientInfoById (id) {
  return axios({
    url: api.patient + '/id/' + id,
    method: 'get'
  })
}
export function savePatientInfo (parameter) {
  return axios({
    url: api.patient + '/',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export function updatePatientInfo (id, parameter) {
  return axios({
    url: api.patient + '/' + id,
    method: 'put',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// assessment
export function getAssessmentList (parameter) {
  return axios({
    url: api.assessment + '/',
    method: 'get',
    params: parameter,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}
export function getAssessmentListByPatientId (parameter) {
  return axios({
    url: api.assessment + '/patientId',
    method: 'get',
    params: parameter
  })
}
// lifeStyle
export function saveLifestyle (parameter) {
  return axios({
    url: api.assessment + '/saveLifestyle',
    method: 'post',
    data: parameter
  })
}

export function getUseMedRecordList (data) {
  return axios({
    url: api.assessment + '/getUseMedRecordList',
    method: 'post',
    data
  })
}

export function saveMedicationSideEffect (data) {
  return axios({
    url: api.assessment + '/saveMedicationSideEffect',
    method: 'post',
    data
  })
}

export function saveExistSymptoms (data) {
  return axios({
    url: api.assessment + '/saveExistSymptoms',
    method: 'post',
    data
  })
}
export function saveUseMedRecord (data) {
  return axios({
    url: api.assessment + '/saveUseMedRecord',
    method: 'post',
    data
  })
}

export function getMedicationSideEffectList (params) {
  return axios({
    url: api.assessment + '/getMedicationSideEffectList',
    method: 'get',
    params
  })
}

// med
export function getMedByName (params) {
  return axios({
    url: api.med,
    method: 'get',
    params
  })
}
export function getAllMed () {
  return axios({
    url: api.med + '/allMed',
    method: 'get'
  })
}
