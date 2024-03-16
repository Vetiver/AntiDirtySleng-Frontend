const baseUrl = "http://localhost:8080"

function checkResponse(res: any) {
    if (res) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res}`);
    }
  }

export default  baseUrl; checkResponse;