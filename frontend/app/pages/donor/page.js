"use client";

import { useState } from "react";
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
import CustomModal from "../../components/modal.js";

export default function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isDonorsModalOpen, setIsDonorsModalOpen] = useState(false);
  const [isCheckEligibilityModalOpen, setIsCheckEligibilityModalOpen] = useState(false);
  const [isViewCriteriaModalOpen, setIsViewCriteriaModalOpen] = useState(false);
  const [donorEligibility, setDonorEligibility] = useState({
    1: false, // Example donor IDs and their eligibility status
    2: false,
    3: false,
  });
  const handleCheckboxChange = (id) => {
    setDonorEligibility((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


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
                    onClick={() => setIsRegisterModalOpen(true)}
                  >
                    <CiCirclePlus className="h-5 w-5 mr-2" />
                    Register New Donor
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                    onClick={() => setIsDonorsModalOpen(true)}
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
                  <Button
                    className="bg-red-500 text-white p-2"
                    onClick={() => setIsCheckEligibilityModalOpen(true)}
                  >
                    <CiCircleCheck className="h-5 w-5 mr-2" />
                    Check Donor Eligibility
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                    onClick={() => setIsViewCriteriaModalOpen(true)}
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

      {/* Register New Donor Modal */}
      <CustomModal
        isOpen={isRegisterModalOpen}
        onRequestClose={() => setIsRegisterModalOpen(false)}
      >
        <h2 className="text-xl mb-4">Register New Donor</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border p-2 w-full"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="bloodType"
            >
              Blood Type
            </label>
            <input
              className="border p-2 w-full"
              type="text"
              id="bloodType"
              name="bloodType"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="lastDonation"
            >
              Last Donation
            </label>
            <input
              className="border p-2 w-full"
              type="date"
              id="lastDonation"
              name="lastDonation"
              required
            />
          </div>
          <Button className="bg-red-500 text-white p-2 w-full" type="submit">
            Register
          </Button>
        </form>
      </CustomModal>

      {/* View All Donors Modal */}
      <CustomModal
        isOpen={isDonorsModalOpen}
        onRequestClose={() => setIsDonorsModalOpen(false)}
      >
        <h2 className="text-xl mb-4">All Donors</h2>
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
      </CustomModal>

      {/* Check Donor Eligibility Modal */}
      <CustomModal
        isOpen={isCheckEligibilityModalOpen}
        onRequestClose={() => setIsCheckEligibilityModalOpen(false)}
      >
        <h2 className="text-xl mb-4">Check Donor Eligibility</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Donor ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Eligible</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(donorEligibility).map(([id, eligible]) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>Donor {id}</TableCell>{" "}
                {/* Replace with actual donor name */}
                <TableCell>
                  <input
                    type="checkbox"
                    checked={eligible}
                    onChange={() => handleCheckboxChange(id)}
                  />
                </TableCell>
                <TableCell>
                  {eligible ? (
                    <span className="text-green-500">✔</span>
                  ) : (
                    <span className="text-red-500">✖</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CustomModal>

      {/* View Eligibility Criteria Modal */}
      <CustomModal
        isOpen={isViewCriteriaModalOpen}
        onRequestClose={() => setIsViewCriteriaModalOpen(false)}
      >
        <h2 className="text-xl mb-4">Eligibility Criteria</h2>
        <ul className="list-disc list-inside">
          <li>Must be at least 18 years old.</li>
          <li>Weigh at least 50 kg (110 lbs).</li>
          <li>Have a valid ID.</li>
          <li>Be in good health at the time of donation.</li>
          <li>Have not donated blood in the last 56 days.</li>
          <li>No recent tattoos or piercings within the last 6 months.</li>
          <li>Free from any major medical conditions.</li>
        </ul>
      </CustomModal>
    </main>
  );
}
