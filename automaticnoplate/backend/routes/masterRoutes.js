const express = require("express");
const {
  fetchAlerts,
  getEmp,
  addEmp,
  editEmp,
  deleteEmp,
  fetchEmp,
  excelEmp,
  sendEmailcronjob,
  sendEmail,
  allinfoimg_plateimg,
  allimg_plate_no,
} = require("../controllers/masterControllers");
const router = express.Router();

router.get("/emp", getEmp);

router.post("/emp/edit", editEmp);
router.get("/emp/excel", excelEmp);
// /dept1/delete
router.post("/emp/delete", deleteEmp);
router.post("/mailsend", sendEmail);

router.post("/mailsendcronjob", sendEmailcronjob);
router.get("/emp/fetch", fetchEmp);

router.post("/fetchAlerts", fetchAlerts);

// licence image api allimg_plate_no with given id
router.post("/allimg_plate_no", allimg_plate_no);
// licence image api allinfoimg_plateimg
router.get("/allinfoimg_plateimg", allinfoimg_plateimg);

module.exports = router;
