import apiClient from "."

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data)
  } catch (error) {
    return {
      error: true,
      exception: error,
    }
  }
}

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data)
  } catch (error) {
    return {
      error: true,
      exception: error,
    }
  }
}
