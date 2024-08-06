"use client";

import Link from "next/link";
import Sidebar from "../../components/sidebar";
import { Button } from "../../UI/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../UI/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../UI/table";
import { FiUsers } from "react-icons/fi";
import { CiCirclePlus, CiCircleCheck, CiCalendar } from "react-icons/ci";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex min-h-screen w-full flex-col bg-background mt-6">
          <div className="grid gap-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Total Donors</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between p-2">
                  <div className="text-4xl font-bold">1,234</div>
                  <FiUsers className="h-10 w-10 text-red-500" />
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Donor Registration</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-2 gap-2">
                  <Button
                    className="bg-red-500 text-white p-2"
                  >
                    <CiCirclePlus className="h-5 w-5 mr-2" />
                    Register New Donor
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View All Donors
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Donor Eligibility</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-2 gap-2">
                  <Button className="bg-red-500 text-white p-2">
                    <CiCircleCheck className="h-5 w-5 mr-2" />
                    Check Donor Eligibility
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View Eligibility Criteria
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Donor Appointments</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-2 gap-2">
                  <Button className="bg-red-500 text-white p-2">
                    <CiCalendar className="h-5 w-5 mr-2" />
                    Schedule Appointment
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View Upcoming Appointments
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  <CardTitle className="text-xl">
                    Upcoming Appointments
                  </CardTitle>
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
                  <CardTitle className="text-xl">
                    Donor Deferral History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Donor</TableHead>
                        <TableHead>Deferral Reason</TableHead>
                        <TableHead>Deferral Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>Low Iron</TableCell>
                        <TableCell>2023-03-15</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>Recent Tattoo</TableCell>
                        <TableCell>2023-04-01</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>Travel to Malaria-Endemic Area</TableCell>
                        <TableCell>2023-05-05</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
