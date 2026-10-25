export const hello = (req, res) => {
    try {
        res.status(200).json({ message: 'Data fetch ho gaya...' })
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}
export const send = (req, res) => {
    try {
        const {id,name,age}=req.body
        console.log(id,name,age);
        res.status(200).json({ message: 'Data Create ho gaya hai...',id,name,age  })
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const updation = (req,res)=>{
    try {
        res.status(200).json({message:"Your data update ho gaya hai..."})
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const deleteData =(req,res)=>{
    try {
        res.status(200).json({message:"Your data Delete ho gaya hai..."})
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}