"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Input } => "@/components/ui/input.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { User, LogOut } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast.js";
import api from "@/utils/api.js";
import { logout } from "@/utils/auth.js";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/auth/me");
        setUserData(response.data.user); // Assuming your API returns { user: { ... } }
        showSuccess("Profile data loaded!");
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        setError(err.response?.data?.message || "Failed to load profile data.");
        showError(err.response?.data?.message || "Failed to load profile data.");
        logout(); // Log out if token is invalid or expired
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No user data found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={userData.avatar_url || "https://github.com/shadcn.png"} alt={userData.name} />
              <AvatarFallback>
                <User className="h-12 w-12 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-semibold">{userData.name}</h2>
          </div>

          <div className="grid gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={userData.email} readOnly className="mt-1 bg-muted" />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" value={userData.phone_number || "N/A"} readOnly className="mt-1 bg-muted" />
            </div>
            <div>
              <Label htmlFor="preferredLanguage">Preferred Language</Label>
              <Input id="preferredLanguage" value={userData.preferred_language || "N/A"} readOnly className="mt-1 bg-muted" />
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" value={userData.timezone || "N/A"} readOnly className="mt-1 bg-muted" />
            </div>
          </div>

          <Button
            variant="destructive"
            className="w-full mt-4"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;