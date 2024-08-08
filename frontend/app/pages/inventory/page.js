import Link from "next/link";
import Sidebar from "../../components/sidebar";
import { SiWebpack } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "../../UI/card";

export default function page() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex min-h-screen w-full flex-col bg-background mt-6">
          <div className="grid gap-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Total Blood Units</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between p-2">
                  <div className="text-4xl font-bold">1,234</div>
                  <SiWebpack className="h-10 w-10 text-red-500" />
                </CardContent>
              </Card>


            </div>
          </div>
          Inventory
        </div>
      </div>
    </main>
  );
}
