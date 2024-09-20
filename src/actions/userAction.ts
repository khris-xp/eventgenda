"use server";

import { UserType } from "@/types/event.type";

const baseURL: string = process.env.API_URL || "http://localhost:8081";

export async function authUser(token: string): Promise<UserType | undefined> {
  try {
    const response = await fetch(`${baseURL}/api/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return undefined;
  }
}
