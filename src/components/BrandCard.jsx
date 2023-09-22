import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { CardHeader } from "@mui/material";
import useStockCall from "../hooks/useStockCall";

export default function BrandCard({ brand, handleOpen, setInfo }) {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent> */}
      <CardHeader title={brand?.name} subheader={brand?.address} />
      <CardMedia
        component="img"
        sx={{ height: 130, objectFit: "contain" }}
        image={brand?.image}
        title={brand?.name}
        alt={brand?.name}
      />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        <EditIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={() => {
            setInfo(brand); //! icona tıklanıldığında ınfo stateinin tıklanılan firmanın verileri ile dolması için statei burada güncelliyoruz.
            handleOpen(); //! icona tıklanıldığında modalın açılmasını sağlıyoruz.
          }}
        />
        <DeleteOutlineIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={() => deleteStockData("brands", brand.id)}
        />
      </CardActions>
    </Card>
  );
}
