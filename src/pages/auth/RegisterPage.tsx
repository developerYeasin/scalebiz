"use client";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.jsx";
import { showSuccess, showError } from "@/utils/toast.js";
import api from "@/utils/api.js"; // Use the configured API instance
import { Eye, EyeOff } from "lucide-react"; // Import Eye and EyeOff icons

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [avatarUrl, setAvatarUrl] = React.useState("");
  const [preferredLanguage, setPreferredLanguage] = React.useState("en");
  const [timezone, setTimezone] = React.useState("Dhaka");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false); // New state for password visibility

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/register", { // Use api instance
        name,
        email,
        password,
        phone_number: phoneNumber,
        avatar_url: avatarUrl || undefined, // Send only if provided
        preferred_language: preferredLanguage,
        timezone,
      });
      showSuccess("Registration successful! Please log in.");
      console.log("Registration response:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      showError(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-[500px] max-w-[90%] my-20 mx-auto"> {/* Added mx-auto for horizontal centering */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"} // Toggle input type
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-10" // Add right padding to make space for the button
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:bg-transparent hover:text-muted-foreground" // Adjusted positioning and removed hover
                onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone_number">Phone Number</Label>
              <Input
                id="phone_number"
                type="tel"
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="avatar_url">Avatar URL (Optional)</Label>
              <Input
                id="avatar_url"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
              />
            </div>
            {/* For simplicity, preferred_language and timezone are hardcoded or can be added as selects */}
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline text-purple-600 hover:text-purple-700">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;