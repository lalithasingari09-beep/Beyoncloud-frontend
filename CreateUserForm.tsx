"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CreateUserForm() {
  const [form,setForm]=useState({name:"",age:"",dob:"",email:"",mobile:""});
  const handleChange=(e:any)=>setForm({...form,[e.target.name]:e.target.value});
  const resetForm=()=>setForm({name:"",age:"",dob:"",email:"",mobile:""});
  const handleSave=()=>{
    if(!form.name||!form.email||!form.mobile){ alert("Please fill all required fields"); return;}
    toast.success("User created successfully");
  };
  return (
    <div className="max-w-md space-y-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-3 w-full rounded"/>
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" className="border p-3 w-full rounded"/>
      <input type="date" name="dob" value={form.dob} onChange={handleChange} className="border p-3 w-full rounded"/>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-3 w-full rounded"/>
      <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" className="border p-3 w-full rounded"/>
      <div className="flex gap-4">
        <button onClick={handleSave} className="bg-green-600 text-white p-3 flex-1 rounded">Save</button>
        <button onClick={resetForm} className="bg-gray-400 p-3 flex-1 rounded">Reset</button>
      </div>
    </div>
  );
}
