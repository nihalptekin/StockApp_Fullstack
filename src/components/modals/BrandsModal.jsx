import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
// import { useState } from "react";
import useStockCall from "../../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BrandsModal({ open, handleClose, info, setInfo }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  //   lifting state up
  //   const [info, setInfo] = useState({
  //     name: "",
  //     phone: "",
  //     image: "",
  //     address: "",
  //   });
  //! statelerimizi lifting state up yaparak bir üst componente taşıdık oradan gerekli olan yerlere dağıtım yapabilelim. Bizim örneğimizde FirmModal componenti hem yeni firma eklemek için hemde var olan firmayı update edebilmek için kullanılıyor. Bu nedenle modalı açabilmek ve update işleminde içini doldurabilmek için Firms componentine statelerimizi taşımış olduk oradan da FirmCard componentine props yoluyla göndermiş olduk.
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.name)
    // console.log(e.target.value)
    setInfo({ ...info, [e.target.name]: e.target.value }); //! inputların name attributelarındaki isimler ile info statetimin içindeki keyler aynı olduğu için bu şekilde tek bir fonksiyonla inputdaki verilerimi state e aktarabildim.
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putStockData("brands", info); //! update işleminde info dolu geldiği için içerisinde id bilgiside yer alıyor. Biz bu id üzerinden sorgulama yaparak id varsa yapacağın işlem put işlemi id yoksa yapacağın işlem post işlemi diye belirtmiş olduk.
    } else {
      postStockData("brands", info);
    }

    // setInfo({
    //   name: "",
    //   phone: "",
    //   image: "",
    //   address: "",
    // });
    handleClose(); //? submit işleminden sonra modalın kapanması için burada handleClose fonksiyonunu çağırıyoruz.
  };
  console.log(info);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          // setInfo({
          //   name: "",
          //   phone: "",
          //   image: "",
          //   address: "",
          // });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              {info.id ? "Update Brand" : "Submit Brand"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
