export interface ReducedBlog {
    title: string,
    createdByID: number,
    body: string
  }

export interface Blog {
    blogID: number,
    createdByID: number,
    createdOn: Date,
    title: string,
    body: string,
}

export interface BlogWithComments extends Blog {
    comment: any
}