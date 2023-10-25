import { iHit, iLogin, iNewUser } from "../interfaces";

export const loginAPI = async (loginInfo: iLogin) => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error in loginAPI');
  }
};

export const newHitAPI = async (batida: iHit) => {
  try {
    const response = await fetch("http://localhost:3000/batida", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(batida),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error in newHitAPI');
  }
};

export const newUserAPI = async (newUser: iNewUser) => {
  try {
    const response = await fetch("http://localhost:3000/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error in newUserAPI');
  }
};
