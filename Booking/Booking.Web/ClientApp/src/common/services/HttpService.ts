import axios from 'axios';

export default class HttpService {
  // Change (REACT_APP_SERVER_URL) in .env file to yours
  private url = process.env.REACT_APP_SERVER_URL as string;

  get Url() {
    return this.url;
  }

  // check, if obtained url is full api path
  isFullUrl(url: string) {
    return url.includes('https') || url.includes('http');
  }

  validateUrl(url: string) {
    return this.isFullUrl(url) ?
      url = this.url :
      url = this.url + url;
  }

  async post<Request>(body: Request, url: string) {
    try {
      url = this.validateUrl(url);
      let request = await axios.post<Request>(url, body);
      let response = request.data;
      return response;
    }
    catch (e) {
      return {'AxiosError': e};
    }
  }

  async put<Request>(body: Request, url: string) {
    try {
      url = this.validateUrl(url);
      let request = await axios.put<Request>(url, body);
      let response = request.data;
      return response;
    }
    catch (e) {
      return {'AxiosError': e};
    }
  }

  async get(url: string) {
    try {
      url = this.validateUrl(url);
      let request = await axios.get(url);
      let response = request.data;
      return response;
    }
    catch (e) {
      return {'AxiosError': e};
    }
  }

  async delete(url: string) {
    try {
      url = this.validateUrl(url);
      let request = await axios.delete(url);
      let response = request.data;
      return response;
    }
    catch (e) {
      return {'AxiosError': e};
    }
  }
}