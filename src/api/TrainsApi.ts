import { API_URL } from '../utils/constants';

interface TrainsApiOptions {
  serverUrl: string;
}

class TrainsApi {
  private _serverUrl: string;

  constructor({ serverUrl }: TrainsApiOptions) {
    this._serverUrl = serverUrl;
  }

  private _checkResponse(res: Response) {
    return res.ok
      ? res.json()
      : Promise.reject(`${res.status} ${res.statusText}`);
  }

  private _request(url: string, options: RequestInit) {
    return fetch(url, options).then(this._checkResponse);
  }

  getTrains() {
    return this._request(this._serverUrl, {
      method: 'GET',
    });
  }
}

const trainsApi = new TrainsApi({
  serverUrl: API_URL,
});

export default trainsApi;
