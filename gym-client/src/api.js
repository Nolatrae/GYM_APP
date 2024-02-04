import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:5000/api'
export const $axios = axios.create({
	baseUrl: '/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('nola') ? `Bearer ${Cookies.get('nola')}` : ''
	}
})
