const express = require("express");
const {
  uploadFile,
  saveImgToDB,
  testUpload,
  exceluploadFile,
  sendimgtext,
  license,
} = require("../controllers/uploadControllers");
const { upload } = require("../utils/fileUpload");
const router = express.Router();

router.post("/", upload.single("excel"), exceluploadFile);
// router.post("/images", upload.single("image"), uploadFile);
router.post("/sendimgtext", upload.single("image"), sendimgtext);
// licence api all info
router.get("/license", license);
// licence image api /all captured images
router.post("/images", upload.single("image"), uploadFile);

// router.post("/image", upload.single("text"), uploadFile);
// router.post("/save", saveImgToDB);
// router.post("/test", upload.single("image"), testUpload);

module.exports = router;
