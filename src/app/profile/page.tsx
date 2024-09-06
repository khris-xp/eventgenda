"use client";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

export default function ProfilePage() {
  const { userProfile } = useAuth();
  return (
    <>
      <div>
        <div>{userProfile?.data.fullName}</div>
        <div>{userProfile?.data.email}</div>
        <div>{userProfile?.data.profileImage}</div>
        <div>{userProfile?.data.role}</div>
      </div>
    </>
  );
}
