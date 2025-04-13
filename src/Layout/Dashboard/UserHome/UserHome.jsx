import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-4xl font-medium">Hello! {user?.email}</h1>
    </div>
  );
};

export default UserHome;
