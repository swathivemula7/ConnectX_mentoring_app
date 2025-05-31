import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Professionals can effortlessly set up and customize events based on what they want to teach — from tech tutorials to career mentoring.",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Easily define and manage your available time slots to simplify scheduling and avoid conflicts.",
  },
  {
    icon: LinkIcon,
    title: " Personalized Links",
    description: "Share a unique booking link with your audience, making it easy for students or peers to view and book your sessions.",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free account to start hosting or booking sessions." },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Create event and distribute your personalized link to peers.",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for newly scheduled meetings automatically",
  },
];

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold gradient-title pb-6">
            Simplified Learning with ConnectX
          </h1>
          <p className="text-xl text-gray-600 mb-10">
          ConnectX makes it easy for professionals, mentors, and industry experts to create, manage, and schedule teaching sessions. Define your availability, share your personalized booking link, and allow students or colleagues to book time with you — all seamlessly synced to your calendar.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
  <div className="relative w-full max-w-[550px] aspect-square">
    <Image
      src="/home_page1.png"
      alt="Scheduling illustration"
      layout="fill"
      objectFit="contain"
    />
  </div>
</div>

      </div>

      {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                <CardTitle className="text-center text-blue-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

   

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to share your Knowledge?
        </h2>
        <p className="text-xl mb-6">
          Make use of this tool to share your knowledge and also be ready to get in return from the tech community.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
