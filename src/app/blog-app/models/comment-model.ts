export interface Comment {
    commentID: number,
    commentedByUser: number,
    blogID: number,
    commentedOnDate: Date,
    body: string
}