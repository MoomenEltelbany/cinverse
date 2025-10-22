import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styled } from "@mui/material/styles";

function AccordionCard({ num, question, answer }) {
  const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: "#141414",
    borderBottom: "1px solid red",
    transition: "all 0.3s ease-in-out",
  }));

  const CustomSummary = styled(AccordionSummary)({
    backgroundColor: "#0f0f0f",
    color: "#f1f1f3",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#1a1a1a",
    },
  });

  const CustomDetails = styled(AccordionDetails)({
    backgroundColor: "#151212",
    color: "#a6a6a6",
  });
  return (
    <div>
      <CustomAccordion>
        <CustomSummary
          expandIcon={
            <ArrowDownwardIcon
              sx={{
                color: "#fde8e8",
                transition: "transform 0.3s ease",
                "&.Mui-expanded": {
                  transform: "rotate(180deg)",
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex items-center gap-4">
            <p className="bg-surface-card text-text-primary rounded px-3 py-1 text-sm font-semibold shadow-sm">
              {num}
            </p>
            <Typography component="span" className="">
              {question}
            </Typography>
          </div>
        </CustomSummary>
        <CustomDetails>
          <Typography>{answer}</Typography>
        </CustomDetails>
      </CustomAccordion>
    </div>
  );
}

export default AccordionCard;
