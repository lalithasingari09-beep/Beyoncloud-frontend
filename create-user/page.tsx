import MainLayout from "@/components/Layout/MainLayout";
import CreateUserForm from "@/components/CreateUserForm";

export default function CreateUserPage() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <CreateUserForm />
    </MainLayout>
  );
}
