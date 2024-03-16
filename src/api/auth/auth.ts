import baseUrl from "../constants";
import checkResponse from "../constants"

export const sendMailRequest = (form: {email: string, name: string, password: string}) => {
    return fetch(`${baseUrl}/auth/sendMail`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    // }).then(checkResponse);
    });
  };
export const registerRequest = (form: {email: string, password: string}) => {
    return fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    // }).then(checkResponse);
    });
  };
  
export const loginRequest = async (form: {email: string, password: string}) => {
    return await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    // }).then(checkResponse);
    });
  };