const settingUserApi = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-52", headers: {
    authorization: '16231cdf-2d24-4740-acd1-51d355ac1755', 'Content-Type': 'application/json'
  }
}

class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }


  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getServerInfo(path) {
    return this._request(`${this._url}${path}`, {headers: this._headers})
  };

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.removeServerLike(id);
    } else {
      return this.setServerLike(id);
    }

  }

  editServerProfileInfo(data, path) {
    return this._request(`${this._url}${path}`, {
      method: "PATCH", headers: this._headers, body: JSON.stringify({
        name: data.name, about: data.about,
      })
    })
  };

  addServerCard(data, path) {
    return this._request(`${this._url}${path}`, {
      method: "POST", headers: this._headers, body: JSON.stringify({
        name: data.name, link: data.link,
      })
    })
  };

  deleteServerCard(id, path) {
    return this._request(`${this._url}${path}/${id}`, {
      method: "DELETE", headers: this._headers,
    })
  };

  setServerLike(cardId) {
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT", headers: this._headers,
    })
  }

  removeServerLike(cardId) {
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE", headers: this._headers,
    })
  }

  setServerAvatar(data, path) {
    return this._request(`${this._url}${path}/avatar`, {
      method: "PATCH", headers: this._headers, body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
  }
}

export const api = new Api(settingUserApi)