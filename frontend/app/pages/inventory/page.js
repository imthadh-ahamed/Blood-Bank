import Link from "next/link";
import Sidebar from "../../components/sidebar";

export default function page() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex min-h-screen w-full flex-col bg-background mt-6">
          Inventory
        </div>
      </div>
    </main>
  );
}
