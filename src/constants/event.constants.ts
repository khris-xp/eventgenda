import { EventType } from "@/types/event.type";

export const Events: EventType[] = [
  {
    _id: "1",
    title: "Tech Innovation Conference 2024",
    description:
      "A conference focusing on the latest trends in tech innovation.",
    limit: 300,
    category: {
      name: "Technology",
      description: "Events related to technology and innovation.",
    },
    createdBy: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      _id: "",
      userName: "",
      age: 0,
      coin: 0,
      reward: 0,
      role: [],
      profileImage: "",
      history: [],
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
    eventStartDate: new Date("2024-10-12T09:00:00Z"),
    eventEndDate: new Date("2024-10-14T18:00:00Z"),
    registrationStartDate: new Date("2024-09-01T00:00:00Z"),
    registrationEndDate: new Date("2024-10-01T23:59:59Z"),
    participants: [
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        role: "participant",
      },
      {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        role: "participant",
      },
    ],
    sponsor: {
      name: "TechCorp",
      logo: "techcorp-logo.png",
      website: "https://techcorp.com",
    },
    eventRule: {
      maxParticipants: 300,
      minAge: 18,
      requiresIdVerification: true,
    },
    donate: [
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        role: "donor",
      },
    ],
    projects: [
      {
        name: "AI for Good",
        description: "An AI-driven project to solve social issues.",
      },
    ],
    prizes: [1000, 500, 250], // Prize amounts
    thumbnail: "tech-innovation-thumbnail.jpg",
    location: {
      name: "TechCity Convention Center",
      address: "123 Tech Street, Innovation City",
      city: "Innovation City",
      country: "Techland",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "1",
    title: "Green Energy Summit",
    description:
      "A summit focusing on renewable and green energy technologies.",
    limit: 500,
    category: {
      name: "Environment",
      description: "Events related to sustainability and the environment.",
    },
    createdBy: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      _id: "",
      userName: "",
      age: 0,
      coin: 0,
      reward: 0,
      role: [],
      profileImage: "",
      history: [],
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
    eventStartDate: new Date("2024-11-05T08:00:00Z"),
    eventEndDate: new Date("2024-11-07T17:00:00Z"),
    registrationStartDate: new Date("2024-10-01T00:00:00Z"),
    registrationEndDate: new Date("2024-11-01T23:59:59Z"),
    participants: [
      {
        name: "Charles Brown",
        email: "charles.brown@example.com",
        role: "participant",
      },
    ],
    sponsor: {
      name: "EcoEnergy Inc.",
      logo: "ecoenergy-logo.png",
      website: "https://ecoenergy.com",
    },
    eventRule: {
      maxParticipants: 500,
      minAge: 16,
      requiresIdVerification: true,
    },
    donate: [],
    projects: [
      {
        name: "Solar Power for All",
        description: "A project aimed at providing affordable solar power.",
      },
    ],
    prizes: [2000, 1000, 500],
    thumbnail: "green-energy-thumbnail.jpg",
    location: {
      name: "GreenTech Center",
      address: "456 Eco Lane, Green City",
      city: "Green City",
      country: "EcoLand",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
