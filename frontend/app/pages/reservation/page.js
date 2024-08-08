import Link from "next/link";
import Sidebar from "../../components/sidebar";
import { Button } from "../../UI/button";
import { SiWebpack } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "../../UI/card";
import { CiCirclePlus, CiCircleCheck, CiCalendar } from "react-icons/ci";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../UI/table";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

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
                  <CardTitle className="text-xl">Total Reservations</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between p-2">
                  <div className="text-4xl font-bold">1,234</div>
                  <SiWebpack className="h-10 w-10 text-red-500" />
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Reservations</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-2 gap-2">
                  <Button className="bg-red-500 text-white p-2">
                    <CiCirclePlus className="h-5 w-5 mr-2" />
                    Create Reservation
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View All Reservations
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Feedbacks</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-2 gap-2">
                  <Button className="bg-red-500 text-white p-2">
                    <CiCirclePlus className="h-5 w-5 mr-2" />
                    Create Feedback
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View All Feedbacks
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Total By Blood Type</CardTitle>
                </CardHeader>
                <CardContent className={"max-h-72 overflow-y-auto"}>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Blood Type</TableHead>
                        <TableHead>Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>A+</TableCell>
                        <TableCell>50L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>A-</TableCell>
                        <TableCell>0.5L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>B+</TableCell>
                        <TableCell>6L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>B-</TableCell>
                        <TableCell>80L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>AB+</TableCell>
                        <TableCell>92L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>AB-</TableCell>
                        <TableCell>75L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>O+</TableCell>
                        <TableCell>46L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>O-</TableCell>
                        <TableCell>54L</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">
                    Upcoming Reservations
                  </CardTitle>
                </CardHeader>
                <CardContent className={"max-h-72 overflow-y-auto"}>
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
                    Emergency Reservation
                  </CardTitle>
                </CardHeader>
                <CardContent className={"max-h-72 overflow-y-auto p-4"}>
                  <p className="mb-4">
                    Blood donations are a vital part of maintaining a healthy
                    community. By donating blood, you can help save lives and
                    support those in need.
                  </p>
                  <p>Contact Us</p>
                  <ul className="p-3">
                    <li className="p-1">
                      <div className="flex items-center gap-2">
                        <FaPhone className="h-5 w-5" />
                        <span>555-555-5555</span>
                      </div>
                    </li>
                    <li className="p-1">
                      <div className="flex items-center gap-2">
                        <IoMail className="h-5 w-5" />
                        <span>info@bloodbank.com</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
