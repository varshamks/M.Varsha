
import { InsertOneEsharing, FindOneEsharing} from "../../models/feedback.model/feedback.model"

export const Feedback={
    FindOneEsharing:async(gmail:string)=>{
        return await FindOneEsharing(gmail)
    },

    InsertOneEsharing:async (data:any) => {
        const obj = {
            title: data?.title,
            description: data?.description,
            author: data?.author,
            date: data?.date || new Date(),
            category: data?.category,
            likes: data?.likes || 0,
            comments: data?.comments?.map((comment: any) => ({
              user: comment?.user,
              comment: comment?.comment,
              date: comment?.date || new Date(),
            })) || [],
          };
    
        // Assuming InsertOneEsharing is a function to insert the document into the database
        return await InsertOneEsharing(obj);
    }
    

}