"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Customer {
  name: string;
  phone: string;
  email: string;
  address: string;
  district: string;
}

const mockCustomers: Customer[] = [
  { name: "Shakwat Hossain", phone: "+8801708378659", email: "shakwathossain007@gmail.com", address: "Level 13, City Centre, 90/1 Motijheel C/A Motijheel, Dhaka, Dhaka,", district: "Dha" },
  { name: "Sam Sadik", phone: "+8801832578847", email: "sayemsadik31@gmail.com", address: "Zila.Rangpur,upazila.Mitapukur,union.Payrabondho,village.Damdama Mithapukur, Rangpur, Rangpur,", district: "Rang" },
  { name: "Rasel", phone: "+8801647159442", email: "mdriaduddin852@gamil.com", address: "Anchar miyar hat, Subarna-Chor, Noakhali Subarnachar, Noakhali, Chattagram,", district: "Noak" },
  { name: "সাইফুল", phone: "+8801817409732", email: "example@gmail.com", address: "কুমিল্লা বুড়িচং, সাদেকপুর Burichang, Comilla, Chattagram,", district: "Com" },
  { name: "Boby", phone: "+8801726460880", email: "example@gmail.com", address: "Ukil para,Sunamganj Sunamganj Sadar, Sunamganj, Sylhet,", district: "Sunan" },
  { name: "Taj Uddin", phone: "+8801774949796", email: "daytajuddin@gmail.com", address: "Bhatera,kulaura,Moulvibazar, sylhet Kulaura, Moulvibazar, Sylhet,", district: "N/A" },
  { name: "Md Saikat", phone: "+8801328973132", email: "saikatislamazzad101@gmail.com", address: "Sahangal School Bazar Road Nosarabad, Dinajpur, Barisal", district: "Dinaj" },
];

const CustomerListTable = () => {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>District</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockCustomers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.district}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomerListTable;