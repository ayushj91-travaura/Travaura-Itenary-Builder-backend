const mongoose = require("mongoose");
// const [details, setDetails] = useState({
//     name: "",
//     bookingID: "",
//     VoucherLink: "",
// agentUID: currentUser.uid || "",
//     agentEmail: currentUser.email || "",
//     agentName: currentUser.displayName || "",
//     createdAt: new Date().toISOString(),
//   });
const FlightVoucherSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    bookingID: {
        type: String,
        
    },
    VoucherLink: {
        type: String,
        
    },
    agentUID: {
        type: String,
        
    },
    agentEmail: {
        type: String,
        
    },
    agentName: {
        type: String,
        
    },
    }
);
    const FlightVoucher = mongoose.model("FlightVoucher", FlightVoucherSchema);
  module.exports = FlightVoucher;
