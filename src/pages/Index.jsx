import { MadeWithDyad } from "@/components/made-with-dyad.jsx";
import { Link } from "react-router-dom"; // Import Link

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600 mb-8">
          Start building your amazing project here!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Go to Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline">Go to Register</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="secondary">Go to Dashboard (Requires Login)</Button>
          </Link>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;