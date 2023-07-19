// import Transaction from "../models/Transaction.js";

// // Controller function to get transactions with pagination, sorting, and searching
// export const getTransactions = async (req, res) => {
//   try {
//     // Extracting query parameters from request
//     const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

//     // Function to generate sort object based on the 'sort' query parameter
//     const generateSort = () => {
//       const sortParsed = JSON.parse(sort);
//       const sortFormatted = {
//         [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
//       };
//       return sortFormatted;
//     };

//     // Check if 'sort' query parameter is present and generate sort object
//     const sortFormatted = Boolean(sort) ? generateSort() : {};

//     // Query to search for transactions based on 'cost' or 'userId' fields
//     const query = {
//       $or: [
//         { cost: { $regex: new RegExp(search, "i") } },
//         { userId: { $regex: new RegExp(search, "i") } },
//       ],
//     };

//     // Find transactions matching the search criteria, sort, and apply pagination
//     const transactions = await Transaction.find(query)
//       .sort(sortFormatted)
//       .skip((page - 1) * pageSize)
//       .limit(parseInt(pageSize));

//     // Get the total count of transactions matching the search criteria
//     const total = await Transaction.countDocuments(query);

//     // Respond with the transactions and total count
//     res.status(200).json({
//       transactions,
//       total,
//     });
//   } catch (error) {
//     // If an error occurs, respond with an error message
//     res.status(404).json({ message: error.message });

//   }
// };

import Transaction from "../models/Transaction.js";

// Controller function to get all transactions
export const getTransactions = async (req, res) => {
  try {
    // Get all transactions without any filtering or sorting
    const transactions = await Transaction.find({});

    // Get the total count of transactions
    const total = await Transaction.countDocuments();

    // Respond with the transactions and total count
    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(404).json({ message: error.message });
  }
};

