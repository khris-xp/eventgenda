"use client";
import Homeheader from "@/components/Homeheader";
import EventCard from "@/components/Card/EventCard";
import Link from "next/link";

import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function Home() {
  return (
    <Homeheader>
      {/* Main */}
      <Container maxWidth="xl" sx={{ mt: 5, pb: 40 }}>
        <div className="justify-center container mx-auto py-5">
          <Typography
            variant="h3"
            sx={{ mt: 4, mb: 4 }}
            component="h1"
            gutterBottom
          >
            The platform to Launch and Participate in Hackathons
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Eventgenda is a hackathon platform that connects companies with
            talented developers to create solutions, solve problems, and win
            prizes.
          </Typography>
        </div>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <img
            src="/imagepages/view-homepage.jpg"
            alt="Hackathon overview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        <Box sx={{ mt: 3, textAlign: "center", py: 2.5 }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ mr: 2 }}
          >
            For Participants
          </Button>
          <Button variant="outlined" size="large" color="primary">
            For Organizations
          </Button>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography
            sx={{ mb: 5 }}
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
          >
            Featured Hackathon
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 lg:gap-3 sm:gap-2 sm:ml-10 lg:ml-6 xl:ml-8">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <div className="flex justify-center mt-7">
            <Box sx={{ mt: 3, textAlign: "center", py: 2.5 }}>
              <Link href="/events" passHref>
                <Button variant="outlined" size="large" color="primary">
                  See all hackathons
                </Button>
              </Link>
            </Box>
          </div>
        </Box>

        {/* Another section: Garden */}
        <Box
          sx={{ mt: 8, textAlign: "center", backgroundColor: "#f5f5f5", py: 6 }}
        >
          <Typography variant="h4" component="h3">
            Nurturing ideas, harvesting success.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            Join TAIKAI Garden, where top hackathon projects find the perfect
            soil to grow! Showcase your work and grow your projects into
            real-world solutions.
          </Typography>
          <Button variant="contained" color="secondary">
            Join the waitlist
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          textAlign: "center",
          py: 3,
          backgroundColor: "#aaaaaa",
          color: "white",
        }}
      >
        <Typography variant="body2">
          © 2024 Eventgenda. All Rights Reserved.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          End Credit: Powered by [Eventgenda or Organization]
        </Typography>
      </Box>
      {/* Footer or other components */}
    </Homeheader>
  );
}
