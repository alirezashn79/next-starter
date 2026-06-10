import { httpClient } from '../config/fetch-client';

export function sendOtp(data: unknown) {
    return httpClient.post('/send/otp', data);
}

export function verifyOtp(data: unknown) {
    return httpClient.post('/verify/mobile', data);
}

export function getMe() {
    return httpClient.get('getme');
}

export function editProfile(data: any) {
    return httpClient.post('/edit/profile', { ...data, _method: 'PUT' });
}

export function logout() {
    return httpClient.get('/logout');
}

export function login(data: any) {
    return httpClient.post('/login', data);
}
