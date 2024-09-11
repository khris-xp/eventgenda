"use client";

import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Homeheader from "@/components/Homeheader";

export default function Home() {
  return (
    <Homeheader>
      {/* Main */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          The platform to Launch and Join Hackathons
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          TAIKAI is a hackathon platform that connects companies with talented
          developers to create solutions, solve problems, and win prizes.
        </Typography>

        <Box sx={{ mt: 8, textAlign: "center", py: 6 }}>
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

        <Box sx={{ textAlign: "center", my: 6 }}>
          <img
            src="/photos/view-homepage.jpg"
            alt="Hackathon overview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Featured Hackathons
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: 4,
            }}
          >
            {/* First Hackathon Card */}
            <Card sx={{ width: "24%", minWidth: 275 }}>
              <CardMedia
                component="img"
                height="140"
                image="/photos/view-hackathon-1.jpg"
                alt="Hackathon Event 1"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Hackathon Event 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Join this exciting hackathon to solve problems and win prizes!
                </Typography>
              </CardContent>
            </Card>

            {/* Second Hackathon Card */}
            <Card sx={{ width: "24%", minWidth: 275 }}>
              <CardMedia
                component="img"
                height="140"
                image="/photos/view-hackathon-2.jpg"
                alt="Hackathon Event 2"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Hackathon Event 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A hackathon for tech enthusiasts. Don’t miss this opportunity!
                </Typography>
              </CardContent>
            </Card>

            {/* Third Hackathon Card */}
            <Card sx={{ width: "24%", minWidth: 275 }}>
              <CardMedia
                component="img"
                height="140"
                image="/photos/view-hackathon-3.jpg"
                alt="Hackathon Event 3"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Hackathon Event 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Innovate, collaborate, and win amazing prizes in this
                  hackathon.
                </Typography>
              </CardContent>
            </Card>

            {/* Fourth Hackathon Card */}
            <Card sx={{ width: "24%", minWidth: 275 }}>
              <CardMedia
                component="img"
                height="140"
                image="/photos/view-hackathon-4.jpg"
                alt="Hackathon Event 4"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Hackathon Event 4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A platform to showcase your skills and win great rewards!
                </Typography>
              </CardContent>
            </Card>
          </Box>
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

      {/* Footer or other components */}
    </Homeheader>
  );
}
