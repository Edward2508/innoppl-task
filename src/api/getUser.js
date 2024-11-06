import { AUTH_USER } from "../utils/constants";

const getUser = async (token) => {
  try {
    const response = await fetch(AUTH_USER, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};

export default getUser;
