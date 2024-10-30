import { formatUppercase } from "@/utils/text";
import { Badge, TableCell } from "@mui/material";

type Props = {
  status: string;
};

export default function StatusTableCell({ status }: Props) {
  return (
    <TableCell>
      <Badge
        variant="dot"
        color={
          status === "pending"
            ? "warning"
            : status === "funding"
              ? "info"
              : status === "open"
                ? "primary"
                : status === "closed"
                  ? "success"
                  : status === "canceled"
                    ? "error"
                    : "default"
        }
      >
        {formatUppercase(status)}
      </Badge>
    </TableCell>
  );
}
