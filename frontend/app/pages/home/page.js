import Sidebar from "../../components/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "../../UI/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../UI/table";
import { TbUsers } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";
import { CiCalendar, CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineInformationCircle } from "react-icons/hi";
// import { Tooltip } from "@mui/material";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="grid gap-10 m-6">
          <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="text-center p-2">
                <CardTitle className="text-xl">Total Donors</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-4xl font-bold">1,234</div>
                <TbUsers className="h-8 w-8 text-red-500" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="text-center p-2">
                <CardTitle className="text-xl">Blood Inventory</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-4xl font-bold">5,678</div>
                <LuPackage className="h-8 w-8 text-red-500" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="text-center p-2">
                <CardTitle className="text-xl">Pending Reservations</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-4xl font-bold">123</div>
                <CiCalendar className="h-8 w-8 text-red-500" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="text-center p-2">
                <CardTitle className="text-xl">Supplies Needed</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-4xl font-bold">45</div>
                <CiDeliveryTruck className="h-8 w-8 text-red-500" />
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="text-center p-2">
                <CardTitle className="text-xl">Recent Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Last Donation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>A+</TableCell>
                      <TableCell>2023-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>O-</TableCell>
                      <TableCell>2023-03-28</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell>AB+</TableCell>
                      <TableCell>2023-05-01</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="text-center p-2">
                <CardTitle className="text-xl">Upcoming Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Donor</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>A+</TableCell>
                      <TableCell>2023-06-10</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>O-</TableCell>
                      <TableCell>2023-06-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell>AB+</TableCell>
                      <TableCell>2023-06-20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="text-center p-2">
                <CardTitle className="text-xl">Low Supply Items</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Reorder Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Syringes</TableCell>
                      <TableCell>50</TableCell>
                      <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bandages</TableCell>
                      <TableCell>75</TableCell>
                      <TableCell>150</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Alcohol Wipes</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell>75</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
