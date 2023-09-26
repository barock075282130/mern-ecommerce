'use client';

import { NextResponse } from "next/server";
import { useState, useEffect } from "react";

export default async function getUser() {
  const [user, setUser] = useState(null);
  try {
    const res = await fetch("http://localhost:4000/userdata", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const json = await res.json();
    setUser(json);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json(user);
}
