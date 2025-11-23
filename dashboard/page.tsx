import MainLayout from "@/components/Layout/MainLayout";
import UserTable from "@/components/UserTable";

export default function DashboardPage() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <UserTable />
    </MainLayout>
  );
}
