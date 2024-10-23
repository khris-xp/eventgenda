import { EventRuleType } from "@/types/event-rule.type";
import { Box, Typography } from "@mui/material";

type Props = {
  eventRule: EventRuleType;
  index: number;
};

export default function EventRuleContainer({ eventRule, index }: Props) {
  return (
    <Box className="flex flex-col gap-7 mb-12">
      <Typography
        sx={{ fontWeight: "600", fontSize: { xs: "20px", md: "23px" } }}
      >
        {index}. {eventRule.name}
      </Typography>
      <Typography sx={{ color: "gray" }}>{eventRule.description}</Typography>
    </Box>
  );
}
