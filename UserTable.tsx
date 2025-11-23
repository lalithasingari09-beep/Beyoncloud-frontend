"use client";
import { useState, useEffect } from "react";
import users from "@/lib/users";

export default function UserTable() {
  const [data, setData] = useState([]);
  useEffect(()=>{ setData(users); },[]);
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((u:any)=>(
          <tr key={u.id}>
            <td className="border p-2">{u.id}</td>
            <td className="border p-2">{u.name}</td>
            <td className="border p-2">{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
