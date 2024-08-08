"use client";

import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import { Button } from "../../UI/button";
import { SiWebpack } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "../../UI/card";
import { CiCirclePlus } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../UI/table";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import CustomModal from "../../components/modal.js";

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isReservationsModalOpen, setIsReservationsModalOpen] = useState(false);
  const openReservationsModal = () => setIsReservationsModalOpen(true);
  const closeReservationsModal = () => setIsReservationsModalOpen(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const openFeedbackModal = () => setIsFeedbackModalOpen(true);
  const closeFeedbackModal = () => setIsFeedbackModalOpen(false);
  const [isFeedbackTableModalOpen, setIsFeedbackTableModalOpen] = useState(false);
  const openFeedbackTableModal = () => setIsFeedbackTableModalOpen(true);
  const closeFeedbackTableModal = () => setIsFeedbackTableModalOpen(false);

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
                  <Button
                    className="bg-red-500 text-white p-2"
                    onClick={openModal}
                  >
                    <CiCirclePlus className="h-5 w-5 mr-2" />
                    Create Reservation
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                    onClick={openReservationsModal}
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
                  <Button
                    className="bg-red-500 text-white p-2"
                    onClick={openFeedbackModal}
                  >
                    <CiCirclePlus className="h-5 w-5 mr-2" />
                    Create Feedback
                  </Button>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                    onClick={openFeedbackTableModal}
                  >
                    View All Feedbacks
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="text-center p-2">
                  <CardTitle className="text-xl">Total Reservations By Blood Type</CardTitle>
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

      {/* Modal for Creating Reservation */}
      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2 className="text-xl mb-4">Create Reservation</h2>
        <form>
          {/* Your form fields go here */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Donor Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter donor name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Blood Type</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <Button className="bg-red-500 text-white p-2 w-full">Submit</Button>
          </div>
        </form>
      </CustomModal>

      {/* Modal for View all the Reservations */}
      <CustomModal
        isOpen={isReservationsModalOpen}
        onRequestClose={closeReservationsModal}
      >
        <h2 className="text-xl mb-4">All Reservations</h2>
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
      </CustomModal>

      {/* Modal for create feedback the Reservations */}
      <CustomModal
        isOpen={isFeedbackModalOpen}
        onRequestClose={closeFeedbackModal}
      >
        <h2 className="text-xl mb-4">Create Feedback</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="feedback"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your feedback"
            />
          </div>
          <div className="flex justify-end">
            <Button
              className="bg-red-500 text-white p-2 mr-2 w-full"
              onClick={closeFeedbackModal}
            >
              Submit
            </Button>
          </div>
        </form>
      </CustomModal>

      <CustomModal
        isOpen={isFeedbackTableModalOpen}
        onRequestClose={closeFeedbackTableModal}
      >
        <h2 className="text-xl mb-4">All Feedbacks</h2>
        <div className={"max-h-72 overflow-y-auto"}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Feedback</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Great service!</TableCell>
                <TableCell>2024-08-01</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Very satisfied.</TableCell>
                <TableCell>2024-08-02</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>Will come again.</TableCell>
                <TableCell>2024-08-03</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CustomModal>
    </main>
  );
}
