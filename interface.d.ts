export interface User {
    _id: string;
    name: string;
    avatar: string;
    createdAt: string;
    isCertified: boolean
    email: string
  }
  
  export interface Comment {
    _id: string;
    message: string;
    user: User;
    post: string;
    createdAt: string;
  }
  
  export interface Post {
    _id: string;
    isAnonymous: boolean;
    content: string;
    owner: string;
    Likes: string[]; 
    Comments: string[]; 
    achievements: string[];
    createdAt: string;
    user: User;
    allcomments: Comment[];
    totallikes: number;
    likedByUsers: string[];
  }


export interface verify{
  fullname: string,
  officialemail: string,
  phone: number,
  address: string,
  licence: string,
  expiryDate: Date,
  province: string,
  licanceImage: string,
  educationImage: string,
  photoId: string,
  workplace: string,
  experience: number,
  specializations: string
}
