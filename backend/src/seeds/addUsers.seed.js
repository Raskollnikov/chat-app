import { config } from "dotenv";
import { connectDt} from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
      email: "nino.thomadze@example.com",
      fullName: "Nino Thomadze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      email: "tamari.machavariani@example.com",
      fullName: "Tamari Machavariani",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      email: "mari.kiknavelidze@example.com",
      fullName: "Mari Kiknavelidze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      email: "salome.beridze@example.com",
      fullName: "Salome Beridze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      email: "eka.tsertsvadze@example.com",
      fullName: "Eka Tsertsvadze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      email: "ana.giorgadze@example.com",
      fullName: "Ana Giorgadze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      email: "keti.chkheidze@example.com",
      fullName: "Keti Chkheidze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      email: "sopho.javakhishvili@example.com",
      fullName: "Sopho Javakhishvili",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  
    // Male Users
    {
      email: "giorgi.tskhadadze@example.com",
      fullName: "Giorgi Tskhadadze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      email: "david.khutsishvili@example.com",
      fullName: "David Khutsishvili",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      email: "nikoloz.kalandadze@example.com",
      fullName: "Nikoloz Kalandadze",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        email: "elene.Gadelia@example.com",
        fullName: "Elene Gadelia",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
      },
      {
        email: "mako.abashidze@example.com",
        fullName: "Mako Abashidze",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        email: "irina.Liparteliani@example.com",
        fullName: "Irina Liparteliani",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
      },
      {
        email: "nino.kiknadze@example.com",
        fullName: "Nino Kiknadze",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        email: "mari.dvali@example.com",
        fullName: "Mari Dvali",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
      },
];



const seedDatabase = async () => {
  try {
    await connectDt();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();