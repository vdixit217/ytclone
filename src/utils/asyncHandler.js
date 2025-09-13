
const asynchandler = (requestHandler) => (req, res, next) => {  

    Promise.resolve(requestHandler(req, res, next)).catch(next);
}



export { asynchandler };


// const asynchandler = (fn) => async (req, res, next) => {

//     try{
//          await fn(req, res, next);
//     }
//     catch(err){
//         res.status(err.code|| 500).json({message: err.message || "Internal server error"});
    
// }


