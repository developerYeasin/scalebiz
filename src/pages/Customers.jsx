"use client";

import React from "react";
import CustomerListHeader from "@/components/customers/CustomerListHeader.jsx";
import CustomerListTable from "@/components/customers/CustomerListTable.jsx";
import CustomerListPagination from "@/components/customers/CustomerListPagination.jsx";
import { useDebounce } from "@/hooks/use-debounce.js";

const mockCustomers = [
  { name: "Shakwat Hossain", phone: "+8801708378659", email: "shakwathossain007@gmail.com", address: "Level 13, City Centre, 90/1 Motijheel C/A Motijheel, Dhaka, Dhaka,", district: "Dha" },
  { name: "Sam Sadik", phone: "+8801832578847", email: "sayemsadik31@gmail.com", address: "Zila.Rangpur,upazila.Mitapukur,union.Payrabondho,village.Damdama Mithapukur, Rangpur, Rangpur,", district: "Rang" },
  { name: "Rasel", phone: "+8801647159442", email: "mdriaduddin852@gamil.com", address: "Anchar miyar hat, Subarna-Chor, Noakhali Subarnachar, Noakhali, Chattagram,", district: "Noak" },
  { name: "সাইফুল", phone: "+8801817409732", email: "example@gmail.com", address: "কুমিল্লা বুড়িচং, সাদেকপুর Burichang, Comilla, Chattagram,", district: "Com" },
  { name: "Boby", phone: "+8801726460880", email: "example@gmail.com", address: "Ukil para,Sunamganj Sunamganj Sadar, Sunamganj, Sylhet,", district: "Sunan" },
  { name: "Taj Uddin", phone: "+8801774949796", email: "daytajuddin@gmail.com", address: "Bhatera,kulaura,Moulvibazar, sylhet Kulaura, Moulvibazar, Sylhet,", district: "N/A" },
  { name: "Md Saikat", phone: "+8801328973132", email: "saikatislamazzad101@gmail.com", address: "Sahangal School Bazar Road Nosarabad, Dinajpur, Barisal", district: "Dinaj" },
  { name: "Another Customer", phone: "+8801234567890", email: "another@example.com", address: "Some address, City, Country", district: "City" },
  { name: "Test User", phone: "+8801111111111", email: "test@example.com", address: "Test address, Test City", district: "Test" },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.phone.includes(debouncedSearchTerm) ||
    customer.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  // Reset to page 1 when search term changes
  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setCurrentPage(1);
    }
  }, [debouncedSearchTerm]);

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <div className="p-4 md:p-6">
      <CustomerListHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CustomerListTable customers={paginatedCustomers} />
      <CustomerListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={filteredCustomers.length}
      />
    </div>
  );
};

export default Customers;